import {
  MessageSquare,
  Clock,
  CheckCircle,
} from "lucide-react";

interface ComentarioExtraido {
  id: number;
  comentario: string;
  sentimiento: string;
  prioridad: string;
  fecha_registro: string;
}

interface ExtractionKPIsProps {
  results: ComentarioExtraido[];
}

const ExtractionKPIs = ({
  results,
}: ExtractionKPIsProps) => {

  const totalComentarios =
    results.length;

  const ultimaExtraccion =
    results.length > 0
      ? new Date(
          results[0].fecha_registro
        ).toLocaleString()
      : "--";

  return (
    <div
      className="
        grid
        grid-cols-1
        sm:grid-cols-2
        xl:grid-cols-3
        gap-4
        mb-4
      "
    >
      {/* Comentarios extraídos */}

      <div className="bg-[#071b3a] rounded-2xl p-4 border border-white/5 shadow-xl">

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
            <MessageSquare
              size={30}
              className="text-green-400"
            />
          </div>

          <div>

            <p className="text-slate-400 text-sm">
              Comentarios extraídos
            </p>

            <h2 className="text-3xl font-bold text-white mt-1">
              {totalComentarios}
            </h2>

            <p className="text-green-400 text-sm mt-2">
              Comentarios encontrados
            </p>

          </div>

        </div>

      </div>

      {/* Última extracción */}

      <div className="bg-[#071b3a] rounded-2xl p-4 border border-white/5 shadow-xl">

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
            <Clock
              size={30}
              className="text-purple-400"
            />
          </div>

          <div>

            <p className="text-slate-400 text-sm">
              Última extracción
            </p>

            <h2 className="text-lg font-bold text-white mt-1">
              {ultimaExtraccion}
            </h2>

            <p className="text-slate-400 text-sm mt-2">
              Datos actualizados
            </p>

          </div>

        </div>

      </div>

      {/* Estado del sistema */}

      <div className="bg-[#071b3a] rounded-2xl p-4 border border-white/5 shadow-xl">

        <div className="flex items-center gap-4">

          <div
            className="
              w-16
              h-16
              rounded-2xl
              bg-emerald-500/20
              flex
              items-center
              justify-center
              shadow-[0_0_20px_rgba(16,185,129,0.35)]
            "
          >
            <CheckCircle
              size={30}
              className="text-emerald-400"
            />
          </div>

          <div>

            <p className="text-slate-400 text-sm">
              Estado del sistema
            </p>

            <h2 className="text-3xl font-bold text-green-400 mt-1">
              Activo
            </h2>

            <p className="text-slate-400 text-sm mt-2">
              Operativo y extrayendo
            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default ExtractionKPIs;