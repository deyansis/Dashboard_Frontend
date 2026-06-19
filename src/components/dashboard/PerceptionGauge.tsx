import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
} from "recharts";

import { useEffect, useState } from "react";
import { getDashboardData } from "../../services/dashboardService";

interface Filters {
  fechaInicio: string;
  fechaFin: string;
  prioridad: string;
}

interface PerceptionGaugeProps {
  filters: Filters;
}

const PerceptionGauge = ({
  filters,
}: PerceptionGaugeProps) => {

  const [perception, setPerception] =
    useState(0);

  useEffect(() => {

    const fetchData = async () => {

      try {

        const result =
          await getDashboardData(
            filters
          );

        setPerception(
          result.nivel_percepcion ?? 0
        );

      } catch (error) {

        console.error(
          "Error cargando percepción",
          error
        );

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

  return (
    <div className="bg-[#071b3a] rounded-2xl px-5 pb-5 pt-3 border border-white/5 h-[240px]">

      <h3 className="text-white font-semibold text-sm mb-2">
        Nivel de Percepción (por rango)
      </h3>

      <div className="relative h-[180px] mt-4">

        {/* MEDIO */}

        <div className="absolute left-1/2 -translate-x-1/2 top-[-6px] z-20">
          <span className="text-slate-300 text-sm font-medium">
            Medio
          </span>
        </div>

        {/* BAJO */}

        <div className="absolute left-14 top-[78px] z-20">
          <span className="text-slate-300 text-sm font-medium">
            Bajo
          </span>
        </div>

        {/* ALTO */}

        <div className="absolute right-14 top-[78px] z-20">
          <span className="text-slate-300 text-sm font-medium">
            Alto
          </span>
        </div>

        <ResponsiveContainer width="100%" height="100%">

          <RadialBarChart
            data={data}
            startAngle={210}
            endAngle={-30}
            innerRadius="60%"
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

        {/* AGUJA */}

        <div className="absolute left-1/2 top-[96px] -translate-x-1/2 z-30">

          <div
            className="
              w-[55px]
              h-[4px]
              bg-white
              rounded-full
              origin-left
              shadow-lg
            "
            style={{
              transform: `rotate(${
                -120 +
                (perception * 240) / 100
              }deg)`
            }}
          />

          <div
            className="
              w-4
              h-4
              rounded-full
              bg-white
              absolute
              -left-1
              -top-[6px]
            "
          />

        </div>

        {/* PORCENTAJE */}

        <div className="absolute left-1/2 top-[118px] -translate-x-1/2">

          <h2 className="text-cyan-400 text-3xl font-bold">
            {Math.round(perception)}%
          </h2>

        </div>

        {/* TEXTO */}

        <div className="absolute left-1/2 top-[160px] -translate-x-1/2">

          <p
            className={`
              text-sm
              font-semibold
              whitespace-nowrap
              ${
                perception >= 70
                  ? "text-green-400"
                  : perception >= 40
                  ? "text-yellow-400"
                  : "text-red-400"
              }
            `}
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