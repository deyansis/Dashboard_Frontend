import {
  MessageSquare,
  Brain,
  Clock,
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

  const cardClass = `
    bg-[#071b3a]
    rounded-2xl
    p-4
    border
    border-white/5
    shadow-xl
    transition-all
    duration-300
    hover:-translate-y-1
    hover:scale-[1.02]
    hover:shadow-2xl
    cursor-default
  `;

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

      <div className={cardClass}>

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

      {/* Analizados por IA */}

      <div className={cardClass}>

        <div className="flex items-center gap-4">

          <div
            className="
              w-16
              h-16
              rounded-2xl
              bg-cyan-500/20
              flex
              items-center
              justify-center
              shadow-[0_0_20px_rgba(6,182,212,0.35)]
            "
          >

            <Brain
              size={30}
              className="text-cyan-400"
            />

          </div>

          <div>

            <p className="text-slate-400 text-sm">
              Analizados por IA
            </p>

            <h2 className="text-3xl font-bold text-white mt-1">
              {totalComentarios}
            </h2>

            <p className="text-cyan-400 text-sm mt-2">
              100% procesados
            </p>

          </div>

        </div>

      </div>

      {/* Última extracción */}

      <div className={cardClass}>

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

    </div>

  );

};

export default ExtractionKPIs;