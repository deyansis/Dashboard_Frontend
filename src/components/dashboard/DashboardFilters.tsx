import {
  Calendar,
  Tag,
  Filter,
} from "lucide-react";

interface Filters {
  fechaInicio: string;
  fechaFin: string;
  prioridad: string;
}

interface DashboardFiltersProps {
  filters: Filters;
  setFilters: React.Dispatch<
    React.SetStateAction<Filters>
  >;
  onApply: () => void;
}

const DashboardFilters = ({
  filters,
  setFilters,
  onApply,
}: DashboardFiltersProps) => {
  return (
    <div className="bg-[#071b3a] rounded-2xl p-4 border border-white/5">

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">

        {/* TITULO */}

        <div>
          <h3 className="text-white font-bold text-lg">
            Filtros
          </h3>
        </div>

        {/* FECHA INICIO */}

        <div>

          <label className="text-slate-400 text-xs block mb-2">
            Fecha inicio
          </label>

          <div className="h-10 rounded-xl border border-slate-700 bg-[#091a38] px-3 flex items-center gap-2">

            <Calendar
              size={15}
              className="text-slate-400"
            />

            <input
              type="date"
              value={filters.fechaInicio}
              onChange={(e) =>
                setFilters((prev) => ({
                  ...prev,
                  fechaInicio: e.target.value,
                }))
              }
              className="
                bg-transparent
                text-white
                text-sm
                outline-none
                w-full
              "
            />

          </div>

        </div>

        {/* FECHA FIN */}

        <div>

          <label className="text-slate-400 text-xs block mb-2">
            Fecha fin
          </label>

          <div className="h-10 rounded-xl border border-slate-700 bg-[#091a38] px-3 flex items-center gap-2">

            <Calendar
              size={15}
              className="text-slate-400"
            />

            <input
              type="date"
              value={filters.fechaFin}
              onChange={(e) =>
                setFilters((prev) => ({
                  ...prev,
                  fechaFin: e.target.value,
                }))
              }
              className="
                bg-transparent
                text-white
                text-sm
                outline-none
                w-full
              "
            />

          </div>

        </div>

        {/* PRIORIDAD */}

        <div>

          <label className="text-slate-400 text-xs block mb-2">
            Prioridad
          </label>

          <div className="h-10 rounded-xl border border-slate-700 bg-[#091a38] px-3 flex items-center gap-2">

            <Tag
              size={14}
              className="text-slate-400"
            />

            <select
              value={filters.prioridad}
              onChange={(e) =>
                setFilters((prev) => ({
                  ...prev,
                  prioridad: e.target.value,
                }))
              }
              className="
                bg-transparent
                text-white
                text-sm
                outline-none
                w-full
              "
            >
              <option
                value="todas"
                className="bg-[#091a38]"
              >
                Todas
              </option>

              <option
                value="ALTA"
                className="bg-[#091a38]"
              >
                Alta
              </option>

              <option
                value="MEDIA"
                className="bg-[#091a38]"
              >
                Media
              </option>

              <option
                value="BAJA"
                className="bg-[#091a38]"
              >
                Baja
              </option>

            </select>

          </div>

        </div>

        {/* BOTÓN */}

        <button
          onClick={onApply}
          className="
            h-10
            rounded-xl
            bg-blue-600
            hover:bg-blue-700
            text-white
            text-sm
            font-semibold
            flex
            items-center
            justify-center
            gap-2
            transition
          "
        >
          <Filter size={14} />
          Aplicar filtros
        </button>

      </div>

    </div>
  );
};

export default DashboardFilters;