import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";
import { useEffect, useMemo, useState } from "react";
import { getDashboardData } from "../../services/dashboardService";

interface Filters {
  fechaInicio: string;
  fechaFin: string;
  prioridad: string;
}

interface PerceptionGaugeProps {
  filters: Filters;
}

const PerceptionGauge = ({ filters }: PerceptionGaugeProps) => {
  const [perception, setPerception] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getDashboardData(filters);
        setPerception(result.nivel_percepcion ?? 0);
      } catch (error) {
        console.error("Error cargando percepción", error);
      }
    };

    fetchData();
  }, [filters]);

  const data = [
    {
      value: perception,
      fill: "url(#perceptionGradient)",
    },
  ];

  const needleAngle = useMemo(() => {
    return -150 + (perception * 120) / 100;
  }, [perception]);

  return (
    <div className="bg-[#071b3a] rounded-2xl border border-white/5 h-full p-5">
      <h3 className="text-white font-semibold text-sm mb-3">
        Nivel de Percepción (por rango)
      </h3>

      <div className="relative w-full aspect-[1.35]">

        {/* Etiquetas */}

        <div className="absolute top-0 left-1/2 -translate-x-1/2 text-slate-300 text-sm font-medium z-20">
          Medio
        </div>

        <div className="absolute left-[8%] top-[46%] text-slate-300 text-sm font-medium z-20">
          Bajo
        </div>

        <div className="absolute right-[8%] top-[46%] text-slate-300 text-sm font-medium z-20">
          Alto
        </div>

        {/* Gauge */}

        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            data={data}
            startAngle={210}
            endAngle={-30}
            innerRadius="62%"
            outerRadius="90%"
          >
            <defs>
              <linearGradient
                id="perceptionGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#ff3b30" />
                <stop offset="50%" stopColor="#facc15" />
                <stop offset="100%" stopColor="#39ff88" />
              </linearGradient>
            </defs>

            <RadialBar
              dataKey="value"
              cornerRadius={20}
              background={{
                fill: "#102445",
              }}
            />
          </RadialBarChart>
        </ResponsiveContainer>

        {/* Aguja */}

        <div
          className="absolute left-1/2 top-[53%] -translate-x-1/2 -translate-y-1/2 z-30"
        >
          <div
            className="w-[22vw] max-w-[60px] min-w-[42px] h-1 bg-white rounded-full origin-left shadow-lg transition-transform duration-500"
            style={{
              transform: `rotate(${needleAngle}deg)`,
            }}
          />

          <div className="absolute w-4 h-4 rounded-full bg-white -left-2 top-1/2 -translate-y-1/2" />
        </div>

        {/* Valor */}

        <div className="absolute left-1/2 top-[63%] -translate-x-1/2 text-center">
          <h2 className="text-cyan-400 text-3xl font-bold">
            {Math.round(perception)}%
          </h2>

          <p
            className={`mt-2 text-sm font-semibold whitespace-nowrap ${
              perception >= 70
                ? "text-green-400"
                : perception >= 40
                  ? "text-yellow-400"
                  : "text-red-400"
            }`}
          >
            {perception >= 70
              ? "Percepción Alta"
              : perception >= 40
                ? "Percepción Media"
                : "Percepción Baja"}
          </p>
        </div>

      </div>
    </div>
  );
};

export default PerceptionGauge;