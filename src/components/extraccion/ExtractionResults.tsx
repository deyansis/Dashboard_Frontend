import { Search, Download, Pencil, Trash2 } from "lucide-react";
import { useState } from "react";

import { deleteComment, updateComment } from "../../services/extractionService";
import {
  createReport,
  downloadReport,
} from "../../services/reportService";
import toast from "react-hot-toast";

interface ComentarioExtraido {
  id: number;
  usuario?: string;
  comentario: string;
  sentimiento: string;
  prioridad: string;
  fecha_registro: string;
}

interface ExtractionResultsProps {
  results: ComentarioExtraido[];
  setResults: React.Dispatch<React.SetStateAction<ComentarioExtraido[]>>;
}

const ExtractionResults = ({ results, setResults }: ExtractionResultsProps) => {
  const [editingItem, setEditingItem] = useState<ComentarioExtraido | null>(
    null,
  );

  const [nuevoSentimiento, setNuevoSentimiento] = useState("");

  const [nuevaPrioridad, setNuevaPrioridad] = useState("");

  const [showExportModal, setShowExportModal] = useState(false);

  const [exportFormat, setExportFormat] = useState("PDF");

  const [busqueda, setBusqueda] = useState("");
  const handleUpdate = async () => {
    if (!editingItem) return;

    try {
      await updateComment(editingItem.id, nuevoSentimiento, nuevaPrioridad);

      setResults(
        results.map((item) =>
          item.id === editingItem.id
            ? {
                ...item,
                sentimiento: nuevoSentimiento,
                prioridad: nuevaPrioridad,
              }
            : item,
        ),
      );

      setEditingItem(null);
    } catch (error) {
      console.error(error);

      toast.success("Error actualizando comentario");
    }
  };

  const handleDelete = async (id: number) => {
    const confirmar = window.confirm("¿Desea eliminar este comentario?");

    if (!confirmar) return;

    try {
      await deleteComment(id);

      setResults(results.filter((item) => item.id !== id));
    } catch (error) {
      console.error(error);

      toast.success("Error eliminando comentario");
    }
  };

  const resultadosFiltrados = results.filter((item) => {

  const texto = busqueda.toLowerCase();

  return (

    item.usuario?.toLowerCase().includes(texto) ||

    item.comentario.toLowerCase().includes(texto) ||

    item.sentimiento.toLowerCase().includes(texto)

  );

});

  return (
    <div className="bg-[#071b3a] rounded-2xl p-5 border border-white/5 shadow-xl">
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
  value={busqueda}
  onChange={(e) => setBusqueda(e.target.value)}
  placeholder="Buscar usuario o comentario..."
  className="
    bg-transparent
    outline-none
    text-white
    w-full
  "
/>
          </div>

          <button
            onClick={() => {

  if (resultadosFiltrados.length === 0) {

    toast.success(
      "No existen comentarios para exportar."
    );

    return;

  }

  setShowExportModal(true);

}}
            className="
              flex
              items-center
              gap-2
              px-4
              h-10
              rounded-xl
              border
              border-slate-700
              hover:bg-slate-700/40
              text-white
            "
          >
            <Download size={16} />
            Exportar
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10 text-slate-400 text-sm">
              <th className="w-[100px] text-left py-3">Fecha</th>

              <th className="w-[180px] text-left py-3">Usuario</th>

              <th className="text-left py-3">Comentario</th>

              <th className="w-[110px] text-center py-3">Sentimiento</th>

              <th className="w-[100px] text-center py-3">Prioridad</th>

              <th className="w-[150px] text-center py-3">Acciones</th>
            </tr>
          </thead>

          <tbody>
            {results.length === 0 ? (
              <tr>
                <td colSpan={6} className="text-center py-10 text-slate-400">
                  No hay resultados. Inicie una extracción.
                </td>
              </tr>
            ) : (
              resultadosFiltrados.map((item) => (
                <tr
                  key={item.id}
                  className="
                    border-b
                    border-white/5
                  "
                >
                 <td className="py-4 text-slate-300">
  {item.fecha_registro
    ? new Date(item.fecha_registro).toLocaleString("es-PE", {
        dateStyle: "short",
        timeStyle: "short",
      })
    : "-"}
</td>

                  <td className="py-4 text-slate-300 font-medium">
                    {item.usuario || "-"}
                  </td>

                  <td className="py-4 text-slate-300">{item.comentario}</td>

                  <td className="py-4 text-center align-middle">
                    <div className="flex justify-center">
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
                    </div>
                  </td>

                  <td className="py-4 text-center align-middle">
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

                  <td className="py-4">
                    <div className="flex justify-center items-center gap-2">
                      <button
                        onClick={() => {
                          setEditingItem(item);
                          setNuevoSentimiento(item.sentimiento);
                          setNuevaPrioridad(item.prioridad);
                        }}
                        className="
                          w-9
                          h-9
                          rounded-lg
                          bg-yellow-500/10
                          hover:bg-yellow-500/20
                          text-yellow-400
                          flex
                          items-center
                          justify-center
                          transition
                        "
                        title="Editar"
                      >
                        <Pencil size={16} />
                      </button>

                      <button
                        onClick={() => handleDelete(item.id)}
                        className="
                          w-9
                          h-9
                          rounded-lg
                          bg-red-500/10
                          hover:bg-red-500/20
                          text-red-400
                          flex
                          items-center
                          justify-center
                          transition
                        "
                        title="Eliminar"
                      >
                        <Trash2 size={16} />
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
              <label className="text-slate-300 block mb-2">Sentimiento</label>

              <select
                value={nuevoSentimiento}
                onChange={(e) => setNuevoSentimiento(e.target.value)}
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
                <option value="positivo">Positivo</option>

                <option value="neutral">Neutral</option>

                <option value="negativo">Negativo</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="text-slate-300 block mb-2">Prioridad</label>

              <select
                value={nuevaPrioridad}
                onChange={(e) => setNuevaPrioridad(e.target.value)}
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
                <option value="alta">Alta</option>

                <option value="media">Media</option>

                <option value="baja">Baja</option>
              </select>
            </div>

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setEditingItem(null)}
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
                  hover:bg-blue-700
                  text-white
                "
              >
                Guardar
              </button>
            </div>
          </div>
        </div>
      )}

      {showExportModal && (
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
            <h2 className="text-white text-xl font-bold mb-5">
              Exportar comentarios
            </h2>

            <label className="text-slate-300 block mb-2">
              Formato del archivo
            </label>

            <select
              value={exportFormat}
              onChange={(e) => setExportFormat(e.target.value)}
              className="
                w-full
                h-11
                rounded-xl
                bg-[#091a38]
                border
                border-slate-700
                text-white
                px-3
                mb-6
              "
            >
              <option value="PDF">PDF</option>

              <option value="Excel">Excel</option>

              <option value="CSV">CSV</option>
            </select>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowExportModal(false)}
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
  onClick={async () => {
    try {
      const nombre = `Reporte_${Date.now()}`;

      const response = await createReport(
        nombre,
        exportFormat
      );

      downloadReport(
        response.reporte.id
      );

    } catch (error) {
      console.error(error);

      toast.success(
        "No se pudo generar el reporte"
      );
    }

    setShowExportModal(false);
  }}
  className="
    px-4
    py-2
    rounded-lg
    bg-blue-600
    hover:bg-blue-700
    text-white
  "
>
  Exportar
</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExtractionResults;
