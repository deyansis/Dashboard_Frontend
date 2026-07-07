import Sidebar from "../components/Sidebar";
import CommentsKPIs from "../components/comments/CommentsKPIs";
import CommentsFilters from "../components/comments/CommentsFilters";
import CommentsTable from "../components/comments/CommentsTable";
import CommentDetail from "../components/comments/CommentDetail";

import { useState } from "react";

import toast from "react-hot-toast";

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

  const [sentimientoFiltro, setSentimientoFiltro] =
    useState("todos");

  const [fechaInicio, setFechaInicio] =
    useState("");

  const [fechaFin, setFechaFin] =
    useState("");

  // ==================================
  // CONSULTAR COMENTARIOS
  // ==================================

  const handleConsultar = async () => {

    if (!fechaInicio || !fechaFin) {

      toast.error(
        "Seleccione una fecha de inicio y una fecha de fin."
      );

      return;

    }

    if (fechaInicio > fechaFin) {

      toast.error(
        "La fecha de inicio no puede ser mayor que la fecha de fin."
      );

      return;

    }

    try {

      const response = await getComments({

        fecha_inicio: fechaInicio,

        fecha_fin: fechaFin,

        cantidad: "1000",

        sentimiento: sentimientoFiltro,

      });

      console.log("Respuesta:", response);

      setComentarios(
        response.comentarios ?? []
      );

      if (
        !response.comentarios ||
        response.comentarios.length === 0
      ) {

        toast(
          "No se encontraron comentarios para los filtros seleccionados."
        );

      } else {

        toast.success(
          "Comentarios cargados correctamente."
        );

      }

    } catch (error) {

      console.error(error);

      toast.error(
        "Error al consultar los comentarios."
      );

    }

  };

  // ==================================
  // FILTRO DE BÚSQUEDA
  // ==================================

  const listaComentarios = Array.isArray(comentarios)
    ? comentarios
    : [];

  const comentariosFiltrados =
    listaComentarios.filter((item) =>
      item.comentario
        .toLowerCase()
        .includes(
          busqueda.toLowerCase()
        )
    );

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

        <CommentsKPIs
          comentarios={listaComentarios}
        />

        <CommentsFilters
          busqueda={busqueda}
          setBusqueda={setBusqueda}
          sentimientoFiltro={sentimientoFiltro}
          setSentimientoFiltro={setSentimientoFiltro}
          fechaInicio={fechaInicio}
          setFechaInicio={setFechaInicio}
          fechaFin={fechaFin}
          setFechaFin={setFechaFin}
          onConsultar={handleConsultar}
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