import {
  Search,
  RotateCcw,
  Database,
} from "lucide-react";

interface CommentsFiltersProps {
  busqueda: string;

  setBusqueda: (
    value: string
  ) => void;

  sentimientoFiltro: string;

  setSentimientoFiltro: (
    value: string
  ) => void;

  fechaInicio: string;

  setFechaInicio: (
    value: string
  ) => void;

  fechaFin: string;

  setFechaFin: (
    value: string
  ) => void;

  onConsultar: () => void;
}

const CommentsFilters = ({
  busqueda,
  setBusqueda,

  sentimientoFiltro,
  setSentimientoFiltro,

  fechaInicio,
  setFechaInicio,

  fechaFin,
  setFechaFin,

  onConsultar,

}: CommentsFiltersProps) => {

  const limpiarFiltros = () => {

    setBusqueda("");

    setSentimientoFiltro("todos");

    setFechaInicio("");

    setFechaFin("");

  };

  return (

    <div className="bg-[#071b3a] rounded-2xl p-4 border border-white/5 shadow-xl mb-4">

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">

        {/* Fecha Inicio */}

        <div>

          <label className="text-slate-300 text-sm block mb-2">
            Fecha inicio
          </label>

          <input
            type="date"
            value={fechaInicio}
            onChange={(e) =>
              setFechaInicio(e.target.value)
            }
            className="
              w-full
              h-10
              rounded-xl
              border
              border-slate-700
              bg-[#091a38]
              text-white
              px-3
            "
          />

        </div>

        {/* Fecha Fin */}

        <div>

          <label className="text-slate-300 text-sm block mb-2">
            Fecha fin
          </label>

          <input
            type="date"
            value={fechaFin}
            onChange={(e) =>
              setFechaFin(e.target.value)
            }
            className="
              w-full
              h-10
              rounded-xl
              border
              border-slate-700
              bg-[#091a38]
              text-white
              px-3
            "
          />

        </div>

        {/* Sentimiento */}

        <div>

          <label className="text-slate-300 text-sm block mb-2">
            Sentimiento
          </label>

          <select
            value={sentimientoFiltro}
            onChange={(e) =>
              setSentimientoFiltro(e.target.value)
            }
            className="
              w-full
              h-10
              rounded-xl
              border
              border-slate-700
              bg-[#091a38]
              text-white
              px-3
            "
          >

            <option value="todos">
              Todos
            </option>

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

        {/* Buscar */}

        <div>

          <label className="text-slate-300 text-sm block mb-2">
            Buscar
          </label>

          <div className="h-10 rounded-xl border border-slate-700 bg-[#091a38] px-3 flex items-center gap-2">

            <Search
              size={16}
              className="text-slate-400"
            />

            <input
              type="text"
              value={busqueda}
              onChange={(e) =>
                setBusqueda(e.target.value)
              }
              placeholder="Buscar comentario..."
              className="
                bg-transparent
                outline-none
                text-white
                w-full
              "
            />

          </div>

        </div>

      </div>

      {/* BOTONES */}

      <div className="flex justify-end gap-3 mt-5">

        <button
          onClick={limpiarFiltros}
          className="
            h-10
            px-5
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

          <RotateCcw size={16} />

          Limpiar

        </button>

        <button
          onClick={onConsultar}
          className="
            h-10
            px-5
            rounded-xl
            bg-blue-600
            hover:bg-blue-700
            text-white
            flex
            items-center
            gap-2
            transition-all
          "
        >

          <Database size={16} />

          Consultar comentarios

        </button>

      </div>

    </div>

  );

};

export default CommentsFilters;