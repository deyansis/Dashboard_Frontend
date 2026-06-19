import { Search, Filter, Download } from "lucide-react";

import { deleteComment, updateComment } from "../../services/extractionService";

import { useState } from "react";

interface ComentarioExtraido {
  id: number;
  comentario: string;
  sentimiento: string;
  prioridad: string;
  fecha_registro: string;
}

interface ExtractionResultsProps {
  results: ComentarioExtraido[];

  setResults: React.Dispatch<React.SetStateAction<ComentarioExtraido[]>>;
}

const ExtractionResults = ({
  results,
  setResults,
}: ExtractionResultsProps) => {

  const [editingItem, setEditingItem] =
    useState<ComentarioExtraido | null>(
      null
    );

  const [nuevoSentimiento,
    setNuevoSentimiento] =
    useState("");

  const [nuevaPrioridad,
    setNuevaPrioridad] =
    useState("");

  const handleUpdate = async () => {

    if (!editingItem) return;

    try {

      await updateComment(
        editingItem.id,
        nuevoSentimiento,
        nuevaPrioridad
      );

      setResults(

        results.map((item) =>

          item.id === editingItem.id

            ? {
                ...item,
                sentimiento:
                  nuevoSentimiento,
                prioridad:
                  nuevaPrioridad,
              }

            : item

        )

      );

      setEditingItem(null);

    } catch (error) {

      console.error(error);

      alert(
        "Error actualizando comentario"
      );

    }

  };

  const handleDelete = async (
    id: number
  ) => {

    const confirmar =
      window.confirm(
        "¿Desea eliminar este comentario?"
      );

    if (!confirmar) return;

    try {

      await deleteComment(id);

      setResults(

        results.filter(
          (item) =>
            item.id !== id
        )

      );

    } catch (error) {

      console.error(error);

      alert(
        "Error eliminando comentario"
      );

    }

  };
    

  return (
    <div className="bg-[#071b3a] rounded-2xl p-5 border border-white/5 shadow-xl">
      {/* HEADER */}

      <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-4 mb-5">
        <h2 className="text-xl font-bold text-white">Resultados obtenidos</h2>

        <div className="flex flex-col md:flex-row gap-3">
          <div
            className="
              h-10
              px-3
              rounded-xl
              border
              border-slate-700
              bg-[#091a38]
              flex
              items-center
              gap-2
              min-w-[280px]
            "
          >
            <Search size={16} className="text-slate-400" />

            <input
              type="text"
              placeholder="Buscar comentario..."
              className="
                bg-transparent
                outline-none
                text-white
                w-full
              "
            />
          </div>

          <button
            className="
              h-10
              px-4
              rounded-xl
              border
              border-slate-700
              bg-[#091a38]
              text-white
              flex
              items-center
              gap-2
            "
          >
            <Filter size={16} />
            Filtros
          </button>

          <button
            className="
              h-10
              px-4
              rounded-xl
              border
              border-slate-700
              bg-[#091a38]
              text-white
              flex
              items-center
              gap-2
            "
          >
            <Download size={16} />
            Exportar
          </button>
        </div>
      </div>

      {/* TABLA */}

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10 text-slate-400 text-sm">
              <th className="text-left py-3">Fecha</th>

              <th className="text-left py-3">Comentario</th>

              <th className="text-left py-3">Sentimiento</th>

              <th className="text-left py-3">Prioridad</th>

              <th className="text-center py-3">Acciones</th>
            </tr>
          </thead>

          <tbody>
            {results.length === 0 ? (
              <tr>
                <td
                  colSpan={5}
                  className="
                    text-center
                    py-10
                    text-slate-400
                  "
                >
                  No hay resultados. Inicie una extracción.
                </td>
              </tr>
            ) : (
              results.map((item) => (
                <tr
                  key={item.id}
                  className="
                      border-b
                      border-white/5
                    "
                >
                  <td className="py-4 text-slate-300">
                    {new Date(item.fecha_registro).toLocaleDateString()}
                  </td>

                  <td className="py-4 text-slate-300">{item.comentario}</td>

                  <td className="py-4">
                    <span
                      className={`
                          px-3
                          py-1
                          rounded-full
                          text-xs
                          ${
                            item.sentimiento === "positivo"
                              ? "bg-green-500/10 text-green-400"
                              : item.sentimiento === "negativo"
                                ? "bg-red-500/10 text-red-400"
                                : "bg-yellow-500/10 text-yellow-400"
                          }
                        `}
                    >
                      {item.sentimiento}
                    </span>
                  </td>

                  <td className="py-4">
                    <span
                      className={`
                          px-3
                          py-1
                          rounded-full
                          text-xs
                          ${
                            item.prioridad === "alta"
                              ? "bg-red-500/10 text-red-400"
                              : item.prioridad === "media"
                                ? "bg-yellow-500/10 text-yellow-400"
                                : "bg-blue-500/10 text-blue-400"
                          }
                        `}
                    >
                      {item.prioridad}
                    </span>
                  </td>

                  <td className="text-center">
                    <div className="flex justify-center gap-2">
                      <button
                        onClick={() => {
                          setEditingItem(item);

                          setNuevoSentimiento(item.sentimiento);

                          setNuevaPrioridad(item.prioridad);
                        }}
                        className="
    px-3
    py-1
    rounded-lg
    bg-yellow-500/10
    text-yellow-400
    text-xs
  "
                      >
                        Editar
                      </button>

                      <button
                        onClick={() => handleDelete(item.id)}
                        className="
                            px-3
                            py-1
                            rounded-lg
                            bg-red-500/10
                            text-red-400
                            text-xs
                          "
                      >
                        Eliminar
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
        </div>

      {editingItem && (

        <div
          className="
            fixed
            inset-0
            bg-black/60
            flex
            items-center
            justify-center
            z-50
          "
        >

          <div
            className="
              bg-[#071b3a]
              rounded-2xl
              p-6
              w-[420px]
              border
              border-white/10
            "
          >

            <h2 className="text-white text-xl font-bold mb-4">
              Editar comentario
            </h2>

            <div className="mb-4">

              <label className="text-slate-300 block mb-2">
                Sentimiento
              </label>

              <select
                value={nuevoSentimiento}
                onChange={(e) =>
                  setNuevoSentimiento(
                    e.target.value
                  )
                }
                className="
                  w-full
                  h-10
                  rounded-xl
                  bg-[#091a38]
                  border
                  border-slate-700
                  text-white
                  px-3
                "
              >
                <option value="positivo">
                  Positivo
                </option>

                <option value="neutral">
                  Neutral
                </option>

                <option value="negativo">
                  Negativo
                </option>

              </select>

            </div>

            <div className="mb-6">

              <label className="text-slate-300 block mb-2">
                Prioridad
              </label>

              <select
                value={nuevaPrioridad}
                onChange={(e) =>
                  setNuevaPrioridad(
                    e.target.value
                  )
                }
                className="
                  w-full
                  h-10
                  rounded-xl
                  bg-[#091a38]
                  border
                  border-slate-700
                  text-white
                  px-3
                "
              >
                <option value="alta">
                  Alta
                </option>

                <option value="media">
                  Media
                </option>

                <option value="baja">
                  Baja
                </option>

              </select>

            </div>

            <div className="flex justify-end gap-2">

              <button
                onClick={() =>
                  setEditingItem(null)
                }
                className="
                  px-4
                  py-2
                  rounded-lg
                  bg-slate-700
                  text-white
                "
              >
                Cancelar
              </button>

              <button
                onClick={handleUpdate}
                className="
                  px-4
                  py-2
                  rounded-lg
                  bg-blue-600
                  text-white
                "
              >
                Guardar
              </button>

            </div>

          </div>

        </div>

      )}

    </div>
  );
};

export default ExtractionResults;
