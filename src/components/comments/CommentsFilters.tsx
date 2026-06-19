import {
  Search,
  RotateCcw,
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

  prioridadFiltro: string;
  setPrioridadFiltro: (
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

}

const CommentsFilters = ({

  busqueda,
  setBusqueda,

  sentimientoFiltro,
  setSentimientoFiltro,

  prioridadFiltro,
  setPrioridadFiltro,

  fechaInicio,
  setFechaInicio,

  fechaFin,
  setFechaFin,

}: CommentsFiltersProps) => {

  const limpiarFiltros =
    () => {

      setBusqueda("");

      setSentimientoFiltro(
        "todos"
      );

      setPrioridadFiltro(
        "todas"
      );

      setFechaInicio("");

      setFechaFin("");

    };

  return (

    <div className="bg-[#071b3a] rounded-2xl p-4 border border-white/5 shadow-xl mb-4">

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-4">

        {/* Fecha Inicio */}

        <div>

          <label className="text-slate-300 text-sm block mb-2">
            Fecha inicio
          </label>

          <input
            type="date"
            value={fechaInicio}
            onChange={(e) =>
              setFechaInicio(
                e.target.value
              )
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
              setFechaFin(
                e.target.value
              )
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
              setSentimientoFiltro(
                e.target.value
              )
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

            <option value="negativo">
              Negativo
            </option>

            <option value="neutral">
              Neutral
            </option>

          </select>

        </div>

        {/* Prioridad */}

        <div>

          <label className="text-slate-300 text-sm block mb-2">
            Prioridad
          </label>

          <select
            value={prioridadFiltro}
            onChange={(e) =>
              setPrioridadFiltro(
                e.target.value
              )
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

            <option value="todas">
              Todas
            </option>

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
                setBusqueda(
                  e.target.value
                )
              }
              placeholder="Buscar..."
              className="
                bg-transparent
                outline-none
                text-white
                w-full
              "
            />

          </div>

        </div>

        {/* Limpiar */}

        <div className="flex items-end">

          <button
            onClick={
              limpiarFiltros
            }
            className="
              w-full
              h-10
              rounded-xl
              border
              border-slate-700
              bg-[#091a38]
              text-white
              flex
              items-center
              justify-center
              gap-2
            "
          >

            <RotateCcw
              size={16}
            />

            Limpiar

          </button>

        </div>

      </div>

    </div>

  );

};

export default CommentsFilters;