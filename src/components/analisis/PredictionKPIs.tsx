import {
  Target,
  Smile,
  ShieldAlert,
  TrendingUp,
} from "lucide-react";

interface PredictionKPIsProps {
  sentimiento: string;
  riesgo: string;
  tendencia: string;
}

const PredictionKPIs = ({
  sentimiento,
  riesgo,
  tendencia,
}: PredictionKPIsProps) => {
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
      {/* Precisión */}

      <div className="bg-[#071b3a] rounded-2xl p-2 border border-white/5 shadow-xl">

        <div className="flex items-center gap-5">

          <div
            className="
              w-16
              h-16
              rounded-2xl
              bg-blue-500/20
              flex
              items-center
              justify-center
              shadow-[0_0_20px_rgba(59,130,246,0.35)]
            "
          >
            <Target
              size={30}
              className="text-blue-400"
            />
          </div>

          <div>

            <p className="text-slate-300 text-sm">
              Precisión del modelo
            </p>

            <h2 className="text-2xl font-bold text-white mt-1">
              92.4%
            </h2>

            <p className="text-green-400 text-sm mt-2">
              ↑ 2.6% vs semana anterior
            </p>

          </div>

        </div>

      </div>

      {/* Sentimiento esperado */}

      <div className="bg-[#071b3a] rounded-2xl p-2 border border-white/5 shadow-xl">

        <div className="flex items-center gap-4">

          <div
            className="
              w-16
              h-16
              rounded-2xl
              bg-green-500/20
              flex
              items-center
              justify-center
              shadow-[0_0_20px_rgba(34,197,94,0.35)]
            "
          >
            <Smile
              size={30}
              className="text-green-400"
            />
          </div>

          <div>

            <p className="text-slate-300 text-sm">
              Sentimiento esperado
            </p>

            <h2 className="text-2xl font-bold text-green-400 mt-1">
              {sentimiento}
            </h2>

            <p className="text-slate-400 text-sm mt-2">
              {sentimiento === "Positivo"
                ? "Tendencia favorable"
                : sentimiento === "Negativo"
                ? "Tendencia desfavorable"
                : "Comportamiento estable"}
            </p>

          </div>

        </div>

      </div>

      {/* Riesgo */}

      <div className="bg-[#071b3a] rounded-2xl p-2 border border-white/5 shadow-xl">

        <div className="flex items-center gap-4">

          <div
            className="
              w-16
              h-16
              rounded-2xl
              bg-yellow-500/20
              flex
              items-center
              justify-center
              shadow-[0_0_20px_rgba(245,158,11,0.35)]
            "
          >
            <ShieldAlert
              size={30}
              className="text-yellow-400"
            />
          </div>

          <div>

            <p className="text-slate-300 text-sm">
              Riesgo actual
            </p>

            <h2 className="text-2xl font-bold text-yellow-400 mt-1">
              {riesgo}
            </h2>

            <p className="text-slate-400 text-sm mt-2">
              {riesgo === "Alto"
                ? "Se requiere atención inmediata"
                : riesgo === "Medio"
                ? "Monitoreo recomendado"
                : "Sin alertas críticas"}
            </p>

          </div>

        </div>

      </div>

      {/* Tendencia */}

      <div className="bg-[#071b3a] rounded-2xl p-2 border border-white/5 shadow-xl">

        <div className="flex items-center gap-4">

          <div
            className="
              w-16
              h-16
              rounded-2xl
              bg-purple-500/20
              flex
              items-center
              justify-center
              shadow-[0_0_20px_rgba(168,85,247,0.35)]
            "
          >
            <TrendingUp
              size={30}
              className="text-purple-400"
            />
          </div>

          <div>

            <p className="text-slate-300 text-sm">
              Próxima semana
            </p>

            <h2 className="text-2xl font-bold text-purple-400 mt-1">
              {tendencia}
            </h2>

            <p className="text-slate-400 text-sm mt-2">
              Predicción basada en tendencia
            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default PredictionKPIs;