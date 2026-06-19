import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

import { useEffect, useState } from "react";
import { getSentimentData } from "../../services/dashboardService";

interface SentimentData {
  name: string;
  value: number;
}

interface Filters {
  fechaInicio: string;
  fechaFin: string;
  prioridad: string;
}

interface SentimentDonutProps {
  filters: Filters;
}

const COLORS = [
  "#39ff88",
  "#ff4d4d",
  "#facc15",
];

const SentimentDonut = ({
  filters,
}: SentimentDonutProps) => {

  const [data, setData] = useState<
    SentimentData[]
  >([]);

  useEffect(() => {

    const fetchData = async () => {

      try {

        const result =
          await getSentimentData(
            filters
          );

        setData(result);

      } catch (error) {

        console.error(
          "Error al obtener datos de sentimientos:",
          error
        );

      }

    };

    fetchData();

  }, [filters]);

  const total = data.reduce(
    (acc, item) => acc + item.value,
    0
  );

  return (
    <div className="bg-[#071b3a] rounded-2xl px-5 pb-5 pt-3 border border-white/5 h-[240px]">

      <h3 className="text-white font-semibold text-sm mb-2">
        Distribución de Sentimientos
      </h3>

      <div className="flex items-center justify-center gap-4 h-[160px]">

        {/* DONUT */}

        <div className="w-[215px] h-[215px] relative">

          <ResponsiveContainer
            width="100%"
            height="100%"
          >

            <PieChart>

              <Pie
                data={data}
                dataKey="value"
                innerRadius={32}
                outerRadius={67}
                paddingAngle={1}
                stroke="#071b3a"
                strokeWidth={2}
              >

                {data.map(
                  (_, index) => (

                    <Cell
                      key={index}
                      fill={
                        COLORS[
                          index %
                            COLORS.length
                        ]
                      }
                    />

                  )
                )}

              </Pie>

            </PieChart>

          </ResponsiveContainer>

          {/* CENTRO */}

          <div className="absolute inset-0 flex flex-col items-center justify-center">

            <span className="text-slate-400 text-[11px]">
              Total
            </span>

            <span className="text-white text-lg font-bold">
              {total.toLocaleString()}
            </span>

          </div>

        </div>

        {/* LEYENDA */}

        <div className="flex flex-col justify-center gap-3">

          {data.map(
            (item, index) => {

              const porcentaje =
                total > 0
                  ? (
                      (item.value /
                        total) *
                      100
                    ).toFixed(1)
                  : "0.0";

              return (

                <div
                  key={item.name}
                  className="flex items-center gap-4"
                >

                  <div
                    className="w-4 h-4 rounded-full"
                    style={{
                      backgroundColor:
                        COLORS[
                          index %
                            COLORS.length
                        ],
                    }}
                  />

                  <div>

                    <p className="text-white text-sm font-medium leading-none">
                      {item.name}
                    </p>

                    <p className="text-slate-200 text-xs mt-1">
                      {item.value} (
                      {porcentaje}%)
                    </p>

                  </div>

                </div>

              );

            }
          )}

        </div>

      </div>

    </div>
  );
};

export default SentimentDonut;