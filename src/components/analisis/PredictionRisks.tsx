import {
  AlertTriangle,
} from "lucide-react";

const PredictionRisks = () => {
  return (
    <div className="bg-[#071b3a] rounded-2xl p-4 border border-white/5 shadow-xl">

      <h2 className="text-white text-lg font-bold mb-5">
        Riesgos detectados
      </h2>

      <div className="space-y-1">

        {/* Riesgo 1 */}

        <div className="border border-red-500/20 rounded-xl p-2 bg-red-500/[0.03]">

          <div className="flex justify-between items-start">

            <div className="flex gap-3">

              <AlertTriangle
                size={18}
                className="text-red-400 mt-1"
              />

              <div>

                <h3 className="text-red-400 font-semibold">
                  Posible incremento de comentarios negativos
                </h3>

                <p className="text-slate-400 text-sm mt-1">
                  Se detecta un patrón creciente en las
                  menciones negativas relacionadas con seguridad.
                </p>

              </div>

            </div>

            <span className="px-3 py-1 rounded-lg border border-red-500 text-red-400 text-xs">
              Alto
            </span>

          </div>

        </div>

        {/* Riesgo 2 */}

        <div className="border border-yellow-500/20 rounded-xl p-3 bg-yellow-500/[0.03]">

          <div className="flex justify-between items-start">

            <div className="flex gap-3">

              <AlertTriangle
                size={18}
                className="text-yellow-400 mt-1"
              />

              <div>

                <h3 className="text-yellow-400 font-semibold">
                  Tema sensible en crecimiento
                </h3>

                <p className="text-slate-400 text-sm mt-1">
                  Incremento de comentarios relacionados
                  con limpieza pública y mantenimiento.
                </p>

              </div>

            </div>

            <span className="px-3 py-1 rounded-lg border border-yellow-500 text-yellow-400 text-xs">
              Medio
            </span>

          </div>

        </div>

        {/* Riesgo 3 */}

        <div className="border border-green-500/20 rounded-xl p-3 bg-green-500/[0.03]">

          <div className="flex justify-between items-start">

            <div className="flex gap-3">

              <AlertTriangle
                size={18}
                className="text-green-400 mt-1"
              />

              <div>

                <h3 className="text-green-400 font-semibold">
                  Riesgo controlado
                </h3>

                <p className="text-slate-400 text-sm mt-1">
                  No se observan variaciones significativas
                  en temas de transporte.
                </p>

              </div>

            </div>

            <span className="px-3 py-1 rounded-lg border border-green-500 text-green-400 text-xs">
              Bajo
            </span>

          </div>

        </div>

      </div>

    </div>
  );
};

export default PredictionRisks;