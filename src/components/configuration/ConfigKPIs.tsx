import {
  Globe,
  Moon,
  Bell,
  TriangleAlert,
} from "lucide-react";

import {
  useEffect,
  useState,
} from "react";

import {
  getConfig,
} from "../../services/configService";

interface Configuracion {
  idioma: string;
  tema: string;
  notificaciones: boolean;
  alertas_criticas: boolean;
}





  const ConfigKPIs = () => {

  const [config, setConfig] =
    useState<Configuracion | null>(null);

  useEffect(() => {

    let activo = true;

    const cargarDatos = async () => {

      try {

        const data =
          await getConfig();

        if (activo) {

          setConfig(data);

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

  const cardClass = `
    bg-[#071b3a]
    rounded-2xl
    p-4
    border
    border-white/5
    shadow-xl
    transition-all
    duration-300
    hover:-translate-y-1
    hover:scale-[1.02]
    hover:shadow-2xl
    cursor-pointer
  `;

  return (

    <div
      className="
        grid
        grid-cols-1
        sm:grid-cols-2
        xl:grid-cols-4
        gap-4
        mb-6
      "
    >

      {/* Idioma */}

      <div className={cardClass}>

        <div className="flex items-center gap-4">

          <div
            className="
              w-14
              h-14
              rounded-2xl
              bg-blue-500/20
              flex
              items-center
              justify-center
            "
          >

            <Globe
              size={28}
              className="text-blue-400"
            />

          </div>

          <div>

            <p className="text-slate-400 text-sm">
              Idioma
            </p>
<h2 className="text-2xl font-bold text-white">
  Español
</h2>

            <p className="text-slate-400 text-xs">
              Configuración actual
            </p>

          </div>

        </div>

      </div>

    {/* Apariencia */}

<div className={cardClass}>

  <div className="flex items-center gap-4">

    <div
      className="
        w-14
        h-14
        rounded-2xl
        bg-purple-500/20
        flex
        items-center
        justify-center
      "
    >

      <Moon
        size={28}
        className="text-purple-400"
      />

    </div>

    <div>

      <p className="text-slate-400 text-sm">
        Apariencia
      </p>

      <h2 className="text-2xl font-bold text-white">
        Modo oscuro
      </h2>

      <p className="text-slate-400 text-xs">
        Apariencia predeterminada
      </p>

    </div>

  </div>

</div>

      {/* Notificaciones */}

      <div className={cardClass}>

        <div className="flex items-center gap-4">

          <div
            className="
              w-14
              h-14
              rounded-2xl
              bg-yellow-500/20
              flex
              items-center
              justify-center
            "
          >

            <Bell
              size={28}
              className="text-yellow-400"
            />

          </div>

          <div>

            <p className="text-slate-400 text-sm">
              Notificaciones
            </p>

            <h2
              className={`text-xl font-bold ${
  config?.notificaciones
    ? "text-green-400"
    : "text-slate-400"
}`}
            >
              {config?.notificaciones
                ? "Activadas"
                : "Desactivadas"}
            </h2>

            <p className="text-slate-400 text-xs">
              Estado actual
            </p>

          </div>

        </div>

      </div>

      {/* Alertas */}

      <div className={cardClass}>

        <div className="flex items-center gap-4">

          <div
            className="
              w-14
              h-14
              rounded-2xl
              bg-red-500/20
              flex
              items-center
              justify-center
            "
          >

            <TriangleAlert
              size={28}
              className="text-red-400"
            />

          </div>

          <div>

            <p className="text-slate-400 text-sm">
              Alertas críticas
            </p>

            <h2
              className={`text-xl font-bold ${
                config?.alertas_criticas
                  ? "text-green-400"
                  : "text-slate-400"
              }`}
            >
              {config?.alertas_criticas
                ? "Activas"
                : "Inactivas"}
            </h2>

            <p className="text-slate-400 text-xs">
              Estado actual
            </p>

          </div>

        </div>

      </div>

    </div>

  );

};

export default ConfigKPIs;