import {
  Pencil,
  Trash2,
} from "lucide-react";

import {
  deleteComment,
  updateComment,
} from "../../services/extractionService";
import Swal from "sweetalert2";
import toast from "react-hot-toast";


interface Comentario {
  id: number;
  comentario: string;
  sentimiento: string;
  prioridad: string;
  fecha_registro: string;
}

interface CommentsTableProps {
  comentarios: Comentario[];

  setComentarios: React.Dispatch<
    React.SetStateAction<Comentario[]>
  >;

  setComentarioSeleccionado: React.Dispatch<
    React.SetStateAction<
      Comentario | null
    >
  >;
}

const CommentsTable = ({
  comentarios,
  setComentarios,
  setComentarioSeleccionado,
}: CommentsTableProps) => {

  const handleDelete = async (
    id: number
  ) => {

   const resultado = await Swal.fire({
  title: "¿Eliminar comentario?",
  text: "Esta acción no se puede deshacer.",
  icon: "warning",
  showCancelButton: true,
  confirmButtonText: "Eliminar",
  cancelButtonText: "Cancelar",
  confirmButtonColor: "#2563eb",
  cancelButtonColor: "#475569",
  background: "#071b3a",
  color: "#ffffff",
});

if (!resultado.isConfirmed) return;

    try {

      await deleteComment(id);

      setComentarios(
        comentarios.filter(
          (item) =>
            item.id !== id
        )
      );

       toast.success("Comentario eliminado correctamente.");

    } catch (error) {

      console.error(error);

      toast.error("No se pudo eliminar el comentario.");

    }

  };

  const handleEdit = async (
    item: Comentario
  ) => {

    const nuevoSentimiento =
      prompt(
        "Nuevo sentimiento:",
        item.sentimiento
      );

    if (!nuevoSentimiento) return;

    const nuevaPrioridad =
      prompt(
        "Nueva prioridad:",
        item.prioridad
      );

    if (!nuevaPrioridad) return;

    try {

      await updateComment(
        item.id,
        nuevoSentimiento,
        nuevaPrioridad
      );

      setComentarios(

        comentarios.map((c) =>

          c.id === item.id
            ? {
                ...c,
                sentimiento:
                  nuevoSentimiento,
                prioridad:
                  nuevaPrioridad,
              }
            : c

        )

      );

      toast.success("Comentario actualizado correctamente.");

    } catch (error) {

      console.error(error);

      toast.error("No se pudo actualizar el comentario.");

    }

  };

  return (

    <div className="bg-[#071b3a] rounded-2xl border border-white/5 shadow-xl overflow-hidden">

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="border-b border-white/10">

              <th className="text-left text-slate-300 px-6 py-4 text-sm">
                Fecha
              </th>

              <th className="text-left text-slate-300 px-6 py-4 text-sm">
                Comentario
              </th>

              <th className="text-left text-slate-300 px-6 py-4 text-sm">
                Sentimiento
              </th>

              <th className="text-left text-slate-300 px-6 py-4 text-sm">
                Prioridad
              </th>

              <th className="text-center text-slate-300 px-6 py-4 text-sm">
                Acciones
              </th>

            </tr>

          </thead>

          <tbody>

            {comentarios.map(
              (item) => (

                <tr
                  key={item.id}
                  onClick={() =>
                    setComentarioSeleccionado(
                      item
                    )
                  }
                  className="
                    border-b
                    border-white/5
                    hover:bg-white/[0.02]
                    cursor-pointer
                  "
                >

                  <td className="px-6 py-4 text-sm text-white whitespace-nowrap">

                    {new Date(
                      item.fecha_registro
                    ).toLocaleDateString()}

                  </td>

                  <td className="px-6 py-4 text-sm text-slate-300">

                    {item.comentario}

                  </td>

                  <td className="px-6 py-4">

                    <span
                      className={`px-3 py-1 rounded-lg text-xs border ${
                        item.sentimiento ===
                        "positivo"
                          ? "border-green-500 text-green-400"
                          : item.sentimiento ===
                            "negativo"
                          ? "border-red-500 text-red-400"
                          : "border-yellow-500 text-yellow-400"
                      }`}
                    >

                      {item.sentimiento}

                    </span>

                  </td>

                  <td className="px-6 py-4">

                    <span
                      className={`px-3 py-1 rounded-lg text-xs border ${
                        item.prioridad ===
                        "alta"
                          ? "border-red-500 text-red-400"
                          : item.prioridad ===
                            "media"
                          ? "border-yellow-500 text-yellow-400"
                          : "border-blue-500 text-blue-400"
                      }`}
                    >

                      {item.prioridad}

                    </span>

                  </td>

                  <td className="px-6 py-4">

                    <div className="flex justify-center gap-2">

                      <button
                        onClick={(e) => {

                          e.stopPropagation();

                          handleEdit(
                            item
                          );

                        }}
                        className="
                          p-2
                          rounded-lg
                          text-yellow-400
                          hover:bg-yellow-500/10
                        "
                      >

                        <Pencil size={16} />

                      </button>

                      <button
                        onClick={(e) => {

                          e.stopPropagation();

                          handleDelete(
                            item.id
                          );

                        }}
                        className="
                          p-2
                          rounded-lg
                          text-red-400
                          hover:bg-red-500/10
                        "
                      >

                        <Trash2 size={16} />

                      </button>

                    </div>

                  </td>

                </tr>

              )
            )}

          </tbody>

        </table>

      </div>

      <div className="flex justify-between items-center p-4">

        <span className="text-slate-400 text-sm">

          Total comentarios:
          {" "}
          {comentarios.length}

        </span>

      </div>

    </div>

  );

};

export default CommentsTable;