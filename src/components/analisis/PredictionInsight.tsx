import {
  Brain,
  TrendingUp,
} from "lucide-react";

const PredictionInsight = () => {
  return (
    <div className="mt-4 bg-[#071b3a] rounded-2xl p-5 border border-white/5 shadow-sm">

      <div className="flex items-center gap-3 mb-4">

        <div
          className="
            w-12
            h-12
            rounded-xl
            bg-cyan-500/20
            flex
            items-center
            justify-center
          "
        >
          <Brain
            size={24}
            className="text-cyan-400"
          />
        </div>

        <div>
          <h3 className="text-white font-semibold text-sm">
            Interpretación generada por IA
          </h3>

          <p className="text-slate-400 text-sm">
            Análisis automático de la tendencia observada.
          </p>
        </div>

      </div>

      <div className="space-y-3 text-slate-300 leading-relaxed">

        <p>
          La percepción ciudadana se mantiene
          relativamente estable durante el
          periodo analizado.
        </p>

        <p>
          El porcentaje de comentarios positivos
          oscila entre 33% y 40%, reflejando una
          valoración moderadamente favorable de
          la gestión municipal.
        </p>

        <p>
          Según la tendencia histórica, se
          proyecta una ligera mejora para los
          próximos periodos.
        </p>

      </div>

      <div className="mt-4 flex items-center gap-2 text-green-400 text-sm font-medium">

        <TrendingUp size={14} />

        Recomendación: mantener las acciones
        actuales y monitorear los comentarios
        negativos para fortalecer la percepción
        ciudadana.

      </div>

    </div>
  );
};

export default PredictionInsight;