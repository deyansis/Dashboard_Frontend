import Sidebar from "../components/Sidebar";
import ProfileCard from "../components/Configuracion/ProfileCard";      
import ConfigKPIs from "../components/Configuracion/ConfigKPIs";
import NotificationsCard from "../components/Configuracion/NotificationsCard";
import SecurityCard from "../components/Configuracion/SecurityCard";
import GeneralSettingsCard from "../components/Configuracion/GeneralSettingsCard";
import BackupCard from "../components/Configuracion/BackupCard";

const Settings = () => {
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
            Gestiona usuarios, seguridad, notificaciones y respaldos del sistema.
          </p>

        </div>

        <ConfigKPIs />
        
<div className="grid grid-cols-1 xl:grid-cols-2 gap-4 mt-4">

  <ProfileCard />

  <GeneralSettingsCard />

</div>

<div className="grid grid-cols-1 xl:grid-cols-2 gap-4 mt-4">

  <NotificationsCard />

  <SecurityCard />

  <BackupCard />

</div>
      </main>

    </div>
  );
};

export default Settings;