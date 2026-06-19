import Sidebar from "../components/Sidebar";
import CommentsKPIs from "../components/comments/CommentsKPIs";
import CommentsFilters from "../components/comments/CommentsFilters";
import CommentsTable from "../components/comments/CommentsTable";
import CommentDetail from "../components/comments/CommentDetail";

import { useEffect, useState } from "react";

import { getComments } from "../services/extractionService";

interface Comentario {
  id: number;
  comentario: string;
  sentimiento: string;
  prioridad: string;
  fecha_registro: string;
}

const Comments = () => {
  const [comentarios, setComentarios] = useState<Comentario[]>([]);
  const [comentarioSeleccionado, setComentarioSeleccionado] =
    useState<Comentario | null>(null);

  const [busqueda, setBusqueda] = useState("");
  const [sentimientoFiltro, setSentimientoFiltro] = useState("todos");
  const [prioridadFiltro, setPrioridadFiltro] = useState("todas");
  const [fechaInicio, setFechaInicio] = useState("");
  const [fechaFin, setFechaFin] = useState("");

  useEffect(() => {
    let activo = true;

    const cargarDatos = async () => {
      try {
        const response = await getComments();

        if (activo) {
          setComentarios(response?.comentarios || []);
        }
      } catch (error) {
        console.error(
          "Error al cargar comentarios:",
          error
        );
      }
    };

    cargarDatos();

    return () => {
      activo = false;
    };
  }, []);

  const comentariosFiltrados = comentarios.filter((item) => {
    const coincideBusqueda = item.comentario
      .toLowerCase()
      .includes(busqueda.toLowerCase());

    const coincideSentimiento =
      sentimientoFiltro === "todos"
        ? true
        : item.sentimiento === sentimientoFiltro;

    const coincidePrioridad =
      prioridadFiltro === "todas"
        ? true
        : item.prioridad === prioridadFiltro;

    const coincideFecha =
      (!fechaInicio ||
        item.fecha_registro.substring(0, 10) >= fechaInicio) &&
      (!fechaFin ||
        item.fecha_registro.substring(0, 10) <= fechaFin);

    return (
      coincideBusqueda &&
      coincideSentimiento &&
      coincidePrioridad &&
      coincideFecha
    );
  });

  return (
    <div className="min-h-screen bg-[#050B1F] flex">
      <Sidebar />

      <main
        className="
          flex-1
          p-4
          md:p-6
          xl:p-6
          overflow-x-hidden
        "
      >
        <div className="mb-5">
          <h1 className="text-4xl font-bold text-white">
            Gestión de Comentarios
          </h1>

          <p className="text-slate-300 mt-2">
            Administra y clasifica los comentarios extraídos mediante
            inteligencia artificial.
          </p>
        </div>

        <CommentsKPIs comentarios={comentarios} />

        <CommentsFilters
          busqueda={busqueda}
          setBusqueda={setBusqueda}
          sentimientoFiltro={sentimientoFiltro}
          setSentimientoFiltro={setSentimientoFiltro}
          prioridadFiltro={prioridadFiltro}
          setPrioridadFiltro={setPrioridadFiltro}
          fechaInicio={fechaInicio}
          setFechaInicio={setFechaInicio}
          fechaFin={fechaFin}
          setFechaFin={setFechaFin}
        />

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-4">
          <div className="xl:col-span-9">
            <CommentsTable
              comentarios={comentariosFiltrados}
              setComentarios={setComentarios}
              setComentarioSeleccionado={setComentarioSeleccionado}
            />
          </div>

          <div className="xl:col-span-3">
            <CommentDetail
              comentario={comentarioSeleccionado}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Comments;