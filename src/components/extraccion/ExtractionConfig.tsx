import { Play } from "lucide-react";

interface ExtractionConfigProps {
  url: string;

  setUrl: React.Dispatch<
    React.SetStateAction<string>
  >;

  onExtract: () => void;

  loading: boolean;
}

const ExtractionConfig = ({
  url,
  setUrl,

  onExtract,

  loading,

}: ExtractionConfigProps) => {

  return (

    <div
      className="
        bg-[#071b3a]
        rounded-2xl
        p-5
        border
        border-white/5
        shadow-sm
        h-full
        flex
        flex-col
      "
    >

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

      {/* INFORMACIÓN */}

      <div
        className="
          rounded-xl
          border
          border-cyan-500/20
          bg-cyan-500/5
          p-4
        "
      >

        <h3 className="text-cyan-400 font-semibold mb-2">
          💡 Extracción inteligente
        </h3>

        <p className="text-slate-300 text-sm leading-6">
          La publicación será analizada automáticamente mediante
          Inteligencia Artificial para identificar el sentimiento,
          la prioridad y el tema de cada comentario extraído.
        </p>

      </div>

      {/* BOTÓN */}

      <div className="mt-auto pt-5">

        <button
          onClick={onExtract}
          disabled={loading}
          className="
            w-full
            h-12
            rounded-xl
            bg-blue-600
            hover:bg-blue-700
            disabled:bg-slate-700
            text-white
            font-semibold
            flex
            items-center
            justify-center
            gap-2
            transition-all
            duration-300
          "
        >

          <Play size={18} />

          {loading
            ? "Extrayendo..."
            : "Extraer comentarios"}

        </button>

      </div>

    </div>

  );

};

export default ExtractionConfig;