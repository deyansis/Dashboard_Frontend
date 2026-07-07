import Sidebar from "../../components/Sidebar";

import {
  Globe,
  Moon,
  Languages,
  Save,
  Bell,
  TriangleAlert,
  ArrowLeft,
} from "lucide-react";

import {
  useEffect,
  useState,
} from "react";

import { useNavigate } from "react-router-dom";

import toast from "react-hot-toast";

import {
  getConfig,
  updateConfig,
} from "../../services/configService";

const GeneralSettings = () => {

  const navigate = useNavigate();

  const [idioma, setIdioma] =
    useState("");

  const [tema, setTema] =
    useState("");

  const [
    notificaciones,
    setNotificaciones,
  ] = useState(false);

  const [
    alertasCriticas,
    setAlertasCriticas,
  ] = useState(false);

  useEffect(() => {

    let activo = true;

    const cargarDatos = async () => {

      try {

        const data =
          await getConfig();

        if (activo) {

          setIdioma(
            data.idioma || "Español"
          );

          setTema(
            data.tema || "Oscuro"
          );

          setNotificaciones(
            data.notificaciones || false
          );

          setAlertasCriticas(
            data.alertas_criticas || false
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

        notificaciones,

        alertas_criticas:
          alertasCriticas,

      });

      toast.success(
        "Configuración actualizada correctamente."
      );

    } catch (error) {

      console.error(error);

      toast.error(
        "No fue posible guardar la configuración."
      );

    }

  }

  return (

    <div className="min-h-screen bg-[#050B1F] flex">

      <Sidebar />

      <main className="flex-1 p-6">

        <button
          onClick={() =>
            navigate("/settings")
          }
          className="
            flex
            items-center
            gap-2
            text-cyan-400
            hover:text-cyan-300
            mb-6
          "
        >

          <ArrowLeft size={18} />

          Volver

        </button>

        <div className="mb-8">

          <h1 className="text-4xl font-bold text-white">

            Configuración General

          </h1>

          <p className="text-slate-400 mt-2">

            Gestiona las preferencias generales del sistema SentiGob.

          </p>

        </div>

        <div className="space-y-6">
                    {/* Información del sistema */}

          <div className="bg-[#071b3a] rounded-2xl border border-white/5 shadow-xl p-6">

            <h2 className="text-2xl font-bold text-white mb-6">
              Información del sistema
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              {/* Sistema */}

              <div className="bg-[#091a38] rounded-xl border border-white/5 p-5">

                <div className="flex items-center gap-3 mb-3">

                  <Globe
                    size={22}
                    className="text-cyan-400"
                  />

                  <p className="text-slate-400 text-sm">
                    Sistema
                  </p>

                </div>

                <h3 className="text-xl font-semibold text-white">
                  SentiGob
                </h3>

              </div>

              {/* Idioma */}

              <div className="bg-[#091a38] rounded-xl border border-white/5 p-5">

                <div className="flex items-center gap-3 mb-3">

                  <Languages
                    size={22}
                    className="text-cyan-400"
                  />

                  <p className="text-slate-400 text-sm">
                    Idioma
                  </p>

                </div>

                <h3 className="text-xl font-semibold text-white">
                  {idioma}
                </h3>

              </div>

              {/* Apariencia */}

              <div className="bg-[#091a38] rounded-xl border border-white/5 p-5">

                <div className="flex items-center gap-3 mb-3">

                  <Moon
                    size={22}
                    className="text-cyan-400"
                  />

                  <p className="text-slate-400 text-sm">
                    Apariencia
                  </p>

                </div>

                <h3 className="text-xl font-semibold text-white">
                  Modo {tema}
                </h3>

              </div>

              {/* Organización */}

              <div className="bg-[#091a38] rounded-xl border border-white/5 p-5">

                <div className="flex items-center gap-3 mb-3">

                  <Globe
                    size={22}
                    className="text-cyan-400"
                  />

                  <p className="text-slate-400 text-sm">
                    Organización
                  </p>

                </div>

                <h3 className="text-lg font-semibold text-white">
                  Municipalidad Distrital de Aucallama
                </h3>

              </div>

            </div>

          </div>

          {/* Preferencias */}

          <div className="bg-[#071b3a] rounded-2xl border border-white/5 shadow-xl p-6">

            <h2 className="text-2xl font-bold text-white mb-6">
              Preferencias
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              {/* Notificaciones */}

              <div className="bg-[#091a38] rounded-xl border border-white/5 p-5">

                <div className="flex items-center justify-between">

                  <div>

                    <div className="flex items-center gap-3 mb-2">

                      <Bell
                        size={22}
                        className="text-cyan-400"
                      />

                      <h3 className="text-white font-semibold">
                        Notificaciones
                      </h3>

                    </div>

                    <p className="text-slate-400 text-sm">
                      Habilitar notificaciones del sistema.
                    </p>

                  </div>

                  <input
                    type="checkbox"
                    checked={notificaciones}
                    onChange={(e) =>
                      setNotificaciones(
                        e.target.checked
                      )
                    }
                  />

                </div>

              </div>

              {/* Alertas */}

              <div className="bg-[#091a38] rounded-xl border border-white/5 p-5">

                <div className="flex items-center justify-between">

                  <div>

                    <div className="flex items-center gap-3 mb-2">

                      <TriangleAlert
                        size={22}
                        className="text-yellow-400"
                      />

                      <h3 className="text-white font-semibold">
                        Alertas críticas
                      </h3>

                    </div>

                    <p className="text-slate-400 text-sm">
                      Mostrar alertas importantes del sistema.
                    </p>

                  </div>

                  <input
                    type="checkbox"
                    checked={alertasCriticas}
                    onChange={(e) =>
                      setAlertasCriticas(
                        e.target.checked
                      )
                    }
                  />

                </div>

              </div>

            </div>

            <div className="flex justify-center mt-8">

              <button
                onClick={guardarCambios}
                className="
                  h-11
                  px-8
                  rounded-xl
                  bg-cyan-600
                  hover:bg-cyan-700
                  transition
                  text-white
                  font-semibold
                  flex
                  items-center
                  gap-2
                "
              >

                <Save size={18} />

                Guardar cambios

              </button>

            </div>

          </div>

        </div>

      </main>

    </div>

  );

};

export default GeneralSettings;