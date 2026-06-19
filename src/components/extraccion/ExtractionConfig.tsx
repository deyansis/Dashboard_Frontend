import {
 
  Play,
  
} from "lucide-react";

interface ExtractionConfigProps {
  url: string;
  setUrl: React.Dispatch<
    React.SetStateAction<string>
  >;

  fechaInicio: string;
  setFechaInicio: React.Dispatch<
    React.SetStateAction<string>
  >;

  fechaFin: string;
  setFechaFin: React.Dispatch<
    React.SetStateAction<string>
  >;

  tema: string;
  setTema: React.Dispatch<
    React.SetStateAction<string>
  >;

  cantidad: string;
  setCantidad: React.Dispatch<
    React.SetStateAction<string>
  >;

  filtroSentimiento: string;
  setFiltroSentimiento: React.Dispatch<
    React.SetStateAction<string>
  >;

  onExtract: () => void;
  loading: boolean;
}

const ExtractionConfig = ({
  url,
  setUrl,

  fechaInicio,
  setFechaInicio,

  fechaFin,
  setFechaFin,

  tema,
  setTema,

  cantidad,
  setCantidad,

  filtroSentimiento,
  setFiltroSentimiento,

  onExtract,
  loading,
}: ExtractionConfigProps) => {
  return (
    <div className="bg-[#071b3a] rounded-2xl p-5 border border-white/5 shadow-sm">

      <h2 className="text-white text-xl font-bold mb-5">
        Configuración de extracción
      </h2>

      {/* URL FACEBOOK */}

      <div className="mb-5">

        <label className="text-slate-300 text-sm block mb-2">
          URL de publicación Facebook
        </label>

        <input
          type="text"
          value={url}
          onChange={(e) =>
            setUrl(e.target.value)
          }
          placeholder="https://www.facebook.com/..."
          className="
            w-full
            h-11
            rounded-xl
            border
            border-slate-700
            bg-[#091a38]
            px-4
            text-white
            outline-none
          "
        />

      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        {/* Plataforma */}

        <div>

  <label className="text-slate-300 text-sm block mb-2">
    Plataforma
  </label>

  <select
    className="
      w-full
      h-10
      rounded-xl
      border
      border-slate-700
      bg-[#091a38]
      px-4
      text-white
      outline-none
    "
  >
    <option>Facebook</option>
  </select>

</div>
        {/* FECHA INICIO */}

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
              px-4
              text-white
              outline-none
            "
          />

        </div>

        {/* FECHA FIN */}

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
              px-4
              text-white
              outline-none
            "
          />

        </div>
{/* TEMA */}

<div>

  <label className="text-slate-300 text-sm block mb-2">
    Tema de análisis
  </label>

  <input
    type="text"
    value={tema}
    onChange={(e) =>
      setTema(e.target.value)
    }
    placeholder="Municipalidad"
    className="
      w-full
      h-10
      rounded-xl
      border
      border-slate-700
      bg-[#091a38]
      px-4
      text-white
      outline-none
    "
  />

</div>

{/* CANTIDAD */}

<div>

  <label className="text-slate-300 text-sm block mb-2">
    Cantidad máxima
  </label>

  <input
    type="number"
    value={cantidad}
    onChange={(e) =>
      setCantidad(e.target.value)
    }
    className="
      w-full
      h-10
      rounded-xl
      border
      border-slate-700
      bg-[#091a38]
      px-4
      text-white
      outline-none
    "
  />

</div>

{/* FILTROS */}

<div>

  <label className="text-slate-300 text-sm block mb-2">
    Filtros avanzados
  </label>

  <select
    value={filtroSentimiento}
    onChange={(e) =>
      setFiltroSentimiento(
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
      px-4
      text-white
      outline-none
    "
  >

    <option value="todos">
      Todos
    </option>

    <option value="positivo">
      Solo positivos
    </option>

    <option value="negativo">
      Solo negativos
    </option>

    <option value="neutral">
      Solo neutrales
    </option>

  </select>

</div>
</div>

      <div className="mt-6 flex justify-center">

        <button
          onClick={onExtract}
          disabled={loading}
          className="
            w-full
            md:w-[380px]
            h-12
            rounded-xl
            bg-blue-600
            hover:bg-blue-700
            disabled:bg-slate-700
            transition
            text-white
            font-semibold
            flex
            items-center
            justify-center
            gap-2
          "
        >

          <Play size={18} />

          {loading
            ? "Extrayendo..."
            : "Iniciar extracción"}

        </button>

      </div>

    </div>
  );
};

export default ExtractionConfig;