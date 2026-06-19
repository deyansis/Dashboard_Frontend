import Sidebar from "../components/Sidebar";

import {
  Globe,
  Moon,
  Languages,
  Save,
} from "lucide-react";

import {
  useEffect,
  useState,
} from "react";

import {
  getConfig,
  updateConfig,
} from "../services/configService";

const GeneralSettings = () => {
  const [idioma, setIdioma] =
    useState("");

  const [tema, setTema] =
    useState("");

  const [
    comentariosMaximos,
    setComentariosMaximos,
  ] = useState(100);

  useEffect(() => {
    let activo = true;

    const cargarDatos = async () => {
      try {
        const data =
          await getConfig();

        if (activo) {
          setIdioma(
            data.idioma || ""
          );

          setTema(
            data.tema || ""
          );

          setComentariosMaximos(
            data.comentarios_maximos ||
              100
          );
        }
      } catch (error) {
        console.error(error);
      }
    };

    cargarDatos();

    return () => {
      activo = false;
    };
  }, []);

  async function guardarCambios() {
    try {
      await updateConfig({
        idioma,
        tema,
        comentarios_maximos:
          comentariosMaximos,
      });

      alert(
        "Configuración guardada correctamente"
      );
    } catch (error) {
      console.error(error);

      alert(
        "Error al guardar configuración"
      );
    }
  }

  return (
    <div className="min-h-screen bg-[#050B1F] flex">
      <Sidebar />

      <main className="flex-1 p-6">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white">
            Configuración general
          </h1>

          <p className="text-slate-400 mt-2">
            Gestiona las preferencias
            generales de la
            plataforma.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="bg-[#071b3a] rounded-2xl p-6 border border-white/5 shadow-xl w-full max-w-3xl">
            <div className="mb-4">
              <label className="text-slate-300 text-sm block mb-1">
                Nombre del sistema
              </label>

              <div className="h-11 rounded-xl border border-slate-700 bg-[#091a38] px-4 flex items-center gap-3">
                <Globe
                  size={18}
                  className="text-slate-400"
                />

                <input
                  type="text"
                  value="SentiGob"
                  disabled
                  className="bg-transparent w-full outline-none text-white"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="text-slate-300 text-sm block mb-1">
                Idioma
              </label>

              <div className="h-11 rounded-xl border border-slate-700 bg-[#091a38] px-4 flex items-center gap-3">
                <Languages
                  size={18}
                  className="text-slate-400"
                />

                <input
                  type="text"
                  value={idioma}
                  onChange={(e) =>
                    setIdioma(
                      e.target.value
                    )
                  }
                  className="bg-transparent w-full outline-none text-white"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="text-slate-300 text-sm block mb-1">
                Comentarios máximos
              </label>

              <div className="h-11 rounded-xl border border-slate-700 bg-[#091a38] px-4 flex items-center">
                <input
                  type="number"
                  value={
                    comentariosMaximos
                  }
                  onChange={(e) =>
                    setComentariosMaximos(
                      Number(
                        e.target.value
                      )
                    )
                  }
                  className="bg-transparent w-full outline-none text-white"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="text-slate-300 text-sm block mb-1">
                Tema
              </label>

              <div className="h-11 rounded-xl border border-slate-700 bg-[#091a38] px-4 flex items-center gap-3">
                <Moon
                  size={18}
                  className="text-slate-400"
                />

                <input
                  type="text"
                  value={tema}
                  onChange={(e) =>
                    setTema(
                      e.target.value
                    )
                  }
                  className="bg-transparent w-full outline-none text-white"
                />
              </div>
            </div>

            <button
              onClick={
                guardarCambios
              }
              className="
                w-full
                md:w-[220px]
                h-11
                rounded-xl
                bg-cyan-600
                hover:bg-cyan-700
                transition
                text-white
                font-semibold
                flex
                items-center
                justify-center
                gap-2
              "
            >
              <Save size={18} />
              Guardar cambios
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default GeneralSettings;