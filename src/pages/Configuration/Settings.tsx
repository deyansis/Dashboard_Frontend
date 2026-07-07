import Sidebar from "../../components/Sidebar";

import ConfigKPIs from "../../components/configuration/ConfigKPIs";
import SettingsCard from "../../components/configuration/SettingsCard";

import {
  Settings,
  Brain,
  User,
} from "lucide-react";

const SettingsPage = () => {

  return (

    <div className="min-h-screen bg-[#050B1F] flex">

      <Sidebar />

      <main
        className="
          flex-1
          p-4
          md:p-8
          xl:p-6
          overflow-x-hidden
        "
      >

        <div className="mb-8">

          <h1 className="text-4xl font-bold text-white">

            Configuración

          </h1>

          <p className="text-slate-400 mt-2">

            Administra los parámetros generales del sistema SentiGob.

          </p>

        </div>

        <ConfigKPIs />

        <div
          className="
            grid
            grid-cols-1
            xl:grid-cols-2
            gap-4
            mt-6
          "
        >

          <SettingsCard
            title="Configuración General"
            description="Gestiona idioma, tema y preferencias del sistema."
            icon={
              <Settings
                size={30}
                className="text-cyan-400"
              />
            }
            route="/settings/general"
          />

          <SettingsCard
            title="Modelo IA"
            description="Configura los parámetros del modelo de Machine Learning."
            icon={
              <Brain
                size={30}
                className="text-violet-400"
              />
            }
            route="/settings/model"
          />


          <SettingsCard
            title="Perfil del Administrador"
            description="Gestiona tu información y credenciales de acceso."
            icon={
              <User
                size={30}
                className="text-yellow-400"
              />
            }
            route="/settings/profile"
          />

        </div>

      </main>

    </div>

  );

};

export default SettingsPage;