
import { useEffect, useState } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ReferenceLine,
} from "recharts";

import { supabase } from "../../services/supabase";
import PredictionInsight from "./PredictionInsight";
interface ChartData {
  fecha: string;
  real?: number;
  prediccion?: number;
}

const meses: Record<string, string> = {
  "01": "Ene",
  "02": "Feb",
  "03": "Mar",
  "04": "Abr",
  "05": "May",
  "06": "Jun",
  "07": "Jul",
  "08": "Ago",
  "09": "Sep",
  "10": "Oct",
  "11": "Nov",
  "12": "Dic",
};

const PredictionChart = () => {
  const [data, setData] = useState<ChartData[]>([]);

  useEffect(() => {
    let activo = true;

    const obtenerDatos = async () => {
      const { data: comentarios, error } = await supabase
        .from("comentarios")
        .select("sentimiento, fecha_registro");

      if (error || !comentarios) {
        console.error(error);
        return;
      }

      const agrupados: Record<
        string,
        {
          positivos: number;
          negativos: number;
          total: number;
        }
      > = {};

      comentarios.forEach((item) => {
        if (
  !item.fecha_registro.startsWith("2025")
) {
  return;
}
        if (!item.fecha_registro) return;

        const fecha = item.fecha_registro.substring(0, 7);
        console.log(fecha);

        if (!agrupados[fecha]) {
          agrupados[fecha] = {
            positivos: 0,
            negativos: 0,
            total: 0,
          };
        }

        agrupados[fecha].total++;

        if (item.sentimiento === "positivo") {
          agrupados[fecha].positivos++;
        }

        if (item.sentimiento === "negativo") {
          agrupados[fecha].negativos++;
        }
      });

      const historial: ChartData[] = Object.entries(agrupados)
        .sort(([fechaA], [fechaB]) => fechaA.localeCompare(fechaB))
        .map(([fecha, valores]) => {
          const porcentajePositivo = (valores.positivos / valores.total) * 100;

          const mes = fecha.split("-")[1];

          return {
            fecha: meses[mes] || fecha,
            real: Number(porcentajePositivo.toFixed(1)),
          };
        });

      const reales = historial.map((item) => item.real ?? 0).slice(-3);

      const promedio =
        reales.length > 0
          ? reales.reduce((a, b) => a + b, 0) / reales.length
          : 0;

      const ultima = historial[historial.length - 1];

      const predicciones: ChartData[] = [
        {
          fecha: "Proy 1",
          prediccion: Number((promedio * 1.02).toFixed(1)),
        },
        {
          fecha: "Proy 2",
          prediccion: Number((promedio * 1.04).toFixed(1)),
        },
        {
          fecha: "Proy 3",
          prediccion: Number((promedio * 1.06).toFixed(1)),
        },
      ];

      if (ultima) {
        predicciones[0].real = ultima.real;
      }

      if (activo) {
        setData([...historial, ...predicciones]);
      }
    };

    obtenerDatos();

    return () => {
      activo = false;
    };
  }, []);

  return (
    <div className="bg-[#071b3a] rounded-2xl p-5 border border-white/5 shadow-xl ">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-white text-xl font-bold">
          Evolución de la Percepción Ciudadana
        </h2>

        <div className="bg-[#091a38] border border-slate-700 rounded-xl px-4 py-2 text-white text-sm">
          Percepción mensual
        </div>
      </div>

      <div className="flex justify-center gap-20 text-xs text-slate-400 mb-2">
        <span>Datos reales</span>
        <span>Predicción IA</span>
      </div>

      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{
              top: 20,
              right: 10,
              left: -10,
              bottom: 10,
            }}
          >
            <CartesianGrid stroke="#1e3a5f" strokeDasharray="3 3" />

            <ReferenceLine
              x="Proy 1"
              stroke="#94a3b8"
              strokeDasharray="5 5"
              label={{
                value: "Predicción IA",
                position: "top",
                fill: "#cbd5e1",
                fontSize: 12,
              }}
            />

            <XAxis dataKey="fecha" stroke="#94a3b8" />

            <YAxis
  stroke="#94a3b8"
  width={60}
  domain={[25, 50]}
/>

            <Tooltip
              contentStyle={{
                background: "#091a38",
                border: "1px solid #1e3a5f",
              }}
            />

            <Legend />

            <Line
              type="monotone"
              dataKey="real"
              stroke="#3b82f6"
              strokeWidth={3}
              dot
              name="% Positivos"
            />

            <Line
              type="monotone"
              dataKey="prediccion"
              stroke="#60a5fa"
              strokeWidth={3}
              strokeDasharray="8 6"
              dot
              name="Predicción IA"
            />
          </LineChart>

        </ResponsiveContainer>
      </div>
        <PredictionInsight />
    </div>
  );
};

export default PredictionChart;
