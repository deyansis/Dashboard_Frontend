import {
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts";

interface Props {
  titulo: string;
  valor: string;
  subtitulo: string;
  color: string;
  icono: React.ReactNode;
  data: { valor: number }[];
}

const KpiCard = ({
  titulo,
  valor,
  subtitulo,
  color,
  icono,
  data,
}: Props) => {
  return (
    <div className="bg-[#071b3a] rounded-2xl p-4 border border-blue-500/10 shadow-lg overflow-hidden h-[190px]">

      {/* Encabezado */}

      <div className="flex items-center gap-3">

        {icono}

        <div>

          <h3 className="text-white text-[14px] font-semibold leading-tight">
            {titulo}
          </h3>

          <h2
            className="text-[32px] font-bold mt-1 leading-none"
            style={{ color }}
          >
            {valor}
          </h2>

        </div>

      </div>

      {/* Variación */}

      <p className="text-slate-300 text-sm font-medium mt-4">
        {subtitulo}
      </p>

      {/* Gráfico */}

      <div className="h-12 mt-3 -mx-4">

        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <AreaChart data={data}>
            <Area
              type="monotone"
              dataKey="valor"
              stroke={color}
              fill={color}
              fillOpacity={0.25}
              strokeWidth={2.5}
            />
          </AreaChart>
        </ResponsiveContainer>

      </div>

    </div>
  );
};

export default KpiCard;