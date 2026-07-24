// Importamos los componentes, iconos y servicios necesarios
// para obtener y mostrar los indicadores principales del Dashboard.
import {
  Smile,
  Frown,
  TrendingUp,
  Star,
} from "lucide-react";
import { useEffect, useState } from "react";
import { getDashboardData } from "../../services/dashboardService";
import KpiCard from "./KpiCard";

// Definimos la estructura de los datos y las propiedades
// que utilizará el componente para mostrar los indicadores.
interface DashboardData {
  tasa_positiva: number;
  tasa_negativa: number;
  indice_sentimiento: number;
  nivel_percepcion: number;
}
interface Filters {
  fechaInicio: string;
  fechaFin: string;
  prioridad: string;
}
interface DashboardKPIsProps {
  filters: Filters;
}

// Consultamos los indicadores del Dashboard cada vez que
// el usuario aplica nuevos filtros.
const DashboardKPIs = ({
  filters,
}: DashboardKPIsProps) => {
  const [dashboardData, setDashboardData] =
    useState<DashboardData | null>(null);
  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const data =
          await getDashboardData(filters);
        setDashboardData(data);
      } catch (error) {
        console.error(
          "Error obteniendo dashboard:",
          error
        );
      }
    };
    fetchDashboardData();
  }, [filters]);

  // Definimos los datos utilizados para representar
 // las mini gráficas de cada indicador.
  const positivos = [
    { valor: 20 },
    { valor: 40 },
    { valor: 25 },
    { valor: 55 },
    { valor: 45 },
    { valor: 70 },
    { valor: 60 },
    { valor: 80 },
  ];
  const negativos = [
    { valor: 80 },
    { valor: 70 },
    { valor: 65 },
    { valor: 55 },
    { valor: 60 },
    { valor: 40 },
    { valor: 35 },
    { valor: 32 },
  ];
  const indice = [
    { valor: 10 },
    { valor: 15 },
    { valor: 12 },
    { valor: 18 },
    { valor: 22 },
    { valor: 20 },
    { valor: 25 },
    { valor: 30 },
  ];

  // Mostramos las tarjetas con los indicadores principales
 // y el nivel de percepción obtenido del análisis.
  return (
    <div
      className="
        grid
        grid-cols-1
        sm:grid-cols-2
        xl:grid-cols-4
        gap-4
        mb-4
      "
    >
      <KpiCard
        titulo="Tasa Positiva"
        valor={
          dashboardData
            ? `${dashboardData.tasa_positiva}%`
            : "..."
        }
        subtitulo="↑ 18.7% vs periodo anterior"
        color="#39ff88"
        icono={
          <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center">
            <Smile
              size={34}
              className="text-green-400"
            />
          </div>
        }
        data={positivos}
      />

      <KpiCard
        titulo="Tasa Negativa"
        valor={
          dashboardData
            ? `${dashboardData.tasa_negativa}%`
            : "..."
        }
        subtitulo="↓ 14.3% vs periodo anterior"
        color="#ff4d4d"
        icono={
          <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center">
            <Frown
              size={34}
              className="text-red-400"
            />
          </div>
        }
        data={negativos}
      />

      <KpiCard
        titulo="Índice de Sentimiento Neto"
        valor={
          dashboardData
            ? `${dashboardData.indice_sentimiento}`
            : "..."
        }
        subtitulo="↑ Mejora significativa"
        color="#1d7cff"
        icono={
          <div className="w-16 h-16 rounded-full bg-blue-400/20 flex items-center justify-center">
            <TrendingUp
              size={34}
              className="text-blue-400"
            />
          </div>
        }
        data={indice}
      />

      <div className="bg-[#071b3a] rounded-2xl p-4 min-h-[190px] border border-white/5 shadow-xl">

        <div className="flex flex-col sm:flex-row items-start gap-4 mb-4">

          <div
            className="
              w-14
              h-14
              rounded-full
              bg-purple-500/20
              flex
              items-center
              justify-center
              shrink-0
            "
          >
            <Star
              size={30}
              className="text-white"
            />
          </div>

          <div>

            <p className="text-slate-100 font-semibold text-sm">
              Nivel de Percepción
            </p>

            <h2 className="text-xl sm:text-[17px] font-bold text-purple-400 mt-1">
              {dashboardData?.nivel_percepcion &&
              dashboardData.nivel_percepcion >= 70
                ? "ALTA"
                : dashboardData?.nivel_percepcion &&
                  dashboardData.nivel_percepcion >= 40
                ? "MEDIA"
                : "BAJA"}
            </h2>

          </div>

        </div>

        <div className="flex justify-between mb-2">

          <span className="text-slate-400">
            Nivel
          </span>

          <span className="text-white font-bold">
            {dashboardData
              ? `${dashboardData.nivel_percepcion}%`
              : "..."}
          </span>

        </div>

        <div className="h-3 rounded-full bg-slate-800 overflow-hidden w-full">

          <div
            className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
            style={{
              width: `${
                dashboardData?.nivel_percepcion ?? 0
              }%`,
            }}
          />

        </div>

      </div>

    </div>
  );
};

export default DashboardKPIs;