import {
  Brain,
  Megaphone,
  Shield,
  MessageCircle,
  BarChart3,
} from "lucide-react";

const PredictionRecommendations = () => {
  return (
    <div className="bg-[#071b3a] rounded-2xl p-4 border border-white/5 shadow-xl mt-4">
      {/* Header */}

      <div className="flex items-center gap-3 mb-4">
        <Brain size={20} className="text-cyan-400" />

        <h2 className="text-white text-lg font-bold">
          Recomendaciones generadas por IA
        </h2>
      </div>

      {/* Cards */}

      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-4
          gap-4
        "
      >
        {/* Card 1 */}

        <div className="bg-[#091a38] border border-white/5 rounded-2xl p-2">
          <div className="flex gap-4">
            <div
              className="
        w-14
        h-14
        rounded-full
        bg-green-500/20
        flex
        items-center
        justify-center
        shrink-0
        mt-2
      "
            >
              <Megaphone size={24} className="text-green-400" />
            </div>

            <div className="flex-1">
              <h3 className="text-white font-semibold text-lm mb-2">
                Reforzar campañas informativas
              </h3>

              <p className="text-slate-400 text-sm leading-6 mb-4">
                Comunicar avances y obras en ejecución para mantener la
                percepción positiva.
              </p>

              <span className="px-3 py-0 rounded-lg bg-green-500/10 text-green-400 text-xs">
                Impacto alto
              </span>
            </div>
          </div>
        </div>

        {/* Card 2 */}

        <div className="bg-[#091a38] border border-white/5 rounded-2xl p-2">
          <div className="flex gap-4">
            <div
              className="
        w-14
        h-14
        rounded-full
        bg-blue-500/20
        flex
        items-center
        justify-center
        shrink-0
        mt-2
      "
            >
              <Shield size={24} className="text-blue-400" />
            </div>

            <div className="flex-1">
              <h3 className="text-white font-semibold text-lm mb-2">
                Atender reclamos de seguridad
              </h3>

              <p className="text-slate-400 text-sm leading-6 mb-4">
                Priorizar la atención de quejas relacionadas a seguridad
                ciudadana.
              </p>

              <span className="px-3 py-0 rounded-lg bg-blue-500/10 text-blue-400 text-xs">
                Impacto alto
              </span>
            </div>
          </div>
        </div>

        {/* Card 3 */}

        <div className="bg-[#091a38] border border-white/5 rounded-2xl p-2">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0">
              <MessageCircle size={18} className="text-purple-400" />
            </div>

            <div className="flex-1">
              <h3 className="text-white font-semibold text-lm leading-tight">
                Monitorear temas sensibles
              </h3>

              <p className="text-slate-400 text-sm mt-2 leading-5">
                Realizar seguimiento continuo de temas de limpieza pública y
                medio ambiente.
              </p>

              <span className="inline-block mt-3 px-3 py-0 rounded-lg bg-purple-500/10 text-purple-400 text-xs">
                Impacto medio
              </span>
            </div>
          </div>
        </div>
        {/* Card 4 */}

        <div className="bg-[#091a38] border border-white/5 rounded-2xl p-2 min-h-[160px]">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center shrink-0">
              <BarChart3 size={18} className="text-yellow-400" />
            </div>

            <div className="flex-1">
              <h3 className="text-white font-semibold text-lm leading-tight">
                Aumentar presencia digital
              </h3>

              <p className="text-slate-400 text-sm mt-2 leading-5">
                Mayor interacción en redes sociales durante fines de semana.
              </p>

              <span className="inline-block mt-3 px-3 py-0 rounded-lg bg-yellow-500/10 text-yellow-400 text-xs">
                Impacto medio
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PredictionRecommendations;
