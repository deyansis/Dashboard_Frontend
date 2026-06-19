import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from "recharts";

import { useEffect, useState } from "react";
import { getTimelineData } from "../../services/dashboardService";

interface Filters {
  fechaInicio: string;
  fechaFin: string;
  prioridad: string;
}

interface TimelineChartProps {
  filters: Filters;
}

interface TimelineData {
  fecha: string;
  positivos: number;
  negativos: number;
  neutrales: number;
}

const TimelineChart = ({
  filters,
}: TimelineChartProps) => {

  const [data, setData] =
    useState<TimelineData[]>([]);

  useEffect(() => {

    const fetchTimeline = async () => {

      try {

        const result =
          await getTimelineData(
            filters
          );

        setData(result);

      } catch (error) {

        console.error(
          "Error cargando timeline",
          error
        );

      }

    };

    fetchTimeline();

  }, [filters]);

  return (
    <div className="bg-[#071b3a] rounded-2xl px-5 pb-5 pt-3 border border-white/5 h-[240px]">

      <h3 className="text-white font-semibold text-sm mb-2">
        Evolución en el Tiempo
      </h3>

      <div className="h-[180px]">

        <ResponsiveContainer width="100%" height="100%">

          <LineChart
            data={data}
            margin={{
              top: 10,
              right: 10,
              left: -15,
              bottom: 5,
            }}
          >

            <CartesianGrid
              stroke="#1e293b"
              strokeDasharray="3 3"
            />

            <XAxis
              dataKey="fecha"
              stroke="#94a3b8"
              tick={{ fontSize: 10 }}
              tickMargin={8}
            />

            <YAxis
              stroke="#94a3b8"
              tick={{ fontSize: 11 }}
            />

            <Tooltip
              contentStyle={{
                background: "#071b3a",
                border: "1px solid #1e293b",
                borderRadius: "10px",
                color: "#fff",
              }}
            />

            <Legend
              verticalAlign="top"
              align="center"
              iconType="circle"
              formatter={(value) => (
                <span
                  style={{
                    color: "#ffffff",
                  }}
                >
                  {value}
                </span>
              )}
              wrapperStyle={{
                fontSize: "12px",
                paddingBottom: "12px",
              }}
            />

            <Line
              type="monotone"
              dataKey="positivos"
              stroke="#39ff88"
              strokeWidth={2.5}
              dot={false}
            />

            <Line
              type="monotone"
              dataKey="negativos"
              stroke="#ff4d4d"
              strokeWidth={2.5}
              dot={false}
            />

            <Line
              type="monotone"
              dataKey="neutrales"
              stroke="#facc15"
              strokeWidth={2.5}
              dot={false}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
};

export default TimelineChart;