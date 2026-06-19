import {
  Calendar,
  MessageSquare,
  Flag,
  X,
} from "lucide-react";

interface Comentario {
  id: number;
  comentario: string;
  sentimiento: string;
  prioridad: string;
  fecha_registro: string;
}

interface CommentDetailProps {
  comentario: Comentario | null;
}

const CommentDetail = ({
  comentario,
}: CommentDetailProps) => {

  if (!comentario) {

    return (

      <div className="bg-[#071b3a] rounded-2xl border border-white/5 shadow-xl h-full flex items-center justify-center">

        <div className="text-center">

          <MessageSquare
            size={40}
            className="text-slate-500 mx-auto mb-3"
          />

          <p className="text-slate-400">
            Seleccione un comentario
          </p>

        </div>

      </div>

    );

  }

  return (

    <div className="bg-[#071b3a] rounded-2xl border border-white/5 shadow-xl h-full">

      {/* Header */}

      <div className="flex items-center justify-between p-5 border-b border-white/10">

        <h2 className="text-white font-bold">
          Detalle del comentario
        </h2>

        <button className="text-slate-400 hover:text-white">

          <X size={18} />

        </button>

      </div>

      {/* Contenido */}

      <div className="p-4 space-y-4">

        <div className="flex items-start gap-3">

          <Calendar
            size={18}
            className="text-slate-400 mt-1"
          />

          <div>

            <p className="text-slate-400 text-sm">
              Fecha
            </p>

            <p className="text-white">

              {new Date(
                comentario.fecha_registro
              ).toLocaleString()}

            </p>

          </div>

        </div>

        <div className="flex items-start gap-3">

          <MessageSquare
            size={18}
            className="text-slate-400 mt-1"
          />

          <div>

            <p className="text-slate-400 text-sm mb-2">
              Sentimiento
            </p>

            <span
              className={`inline-block px-3 py-1 rounded-lg text-xs border ${
                comentario.sentimiento ===
                "positivo"
                  ? "border-green-500 text-green-400"
                  : comentario.sentimiento ===
                    "negativo"
                  ? "border-red-500 text-red-400"
                  : "border-yellow-500 text-yellow-400"
              }`}
            >

              {comentario.sentimiento}

            </span>

          </div>

        </div>

        <div className="flex items-start gap-3">

          <Flag
            size={18}
            className="text-slate-400 mt-1"
          />

          <div>

            <p className="text-slate-400 text-sm mb-2">
              Prioridad
            </p>

            <span
              className={`inline-block px-3 py-1 rounded-lg text-xs border ${
                comentario.prioridad ===
                "alta"
                  ? "border-red-500 text-red-400"
                  : comentario.prioridad ===
                    "media"
                  ? "border-yellow-500 text-yellow-400"
                  : "border-blue-500 text-blue-400"
              }`}
            >

              {comentario.prioridad}

            </span>

          </div>

        </div>

        {/* Comentario */}

        <div className="pt-3 border-t border-white/10">

          <p className="text-slate-400 text-sm mb-3">
            Comentario completo
          </p>

          <p className="text-slate-300 leading-relaxed">

            {comentario.comentario}

          </p>

        </div>

       

        </div>

      </div>

    

  );

};

export default CommentDetail;