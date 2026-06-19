import Sidebar from "../components/Sidebar";
import {
  User,
  Mail,
  Briefcase,
  Lock,
  Save,
} from "lucide-react";

const ProfileSettings = () => {
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
        {/* Header */}

        <div className="mb-8">

          <h1 className="text-4xl font-bold text-white">
            Perfil del administrador
          </h1>

          <p className="text-slate-400 mt-2">
            Gestiona tu información personal y credenciales de acceso.
          </p>

        </div>

        {/* Formulario */}

        <div className="bg-[#071b3a] rounded-2xl p-6 border border-white/5 shadow-xl max-w-4xl">

          {/* Nombre */}

          <div className="mb-4">

            <label className="text-slate-300 text-sm block mb-1">
              Nombre completo
            </label>

            <div className="h-11 rounded-xl border border-slate-700 bg-[#091a38] px-4 flex items-center gap-3">

              <User
                size={18}
                className="text-slate-400"
              />

              <input
                type="text"
                defaultValue="Administrador SentiGob"
                className="
                  bg-transparent
                  w-full
                  outline-none
                  text-white
                "
              />

            </div>

          </div>

          {/* Correo */}

          <div className="mb-4">

            <label className="text-slate-300 text-sm block mb-1">
              Correo electrónico
            </label>

            <div className="h-11 rounded-xl border border-slate-700 bg-[#091a38] px-4 flex items-center gap-3">

              <Mail
                size={18}
                className="text-slate-400"
              />

              <input
                type="email"
                defaultValue="admin@sentigob.pe"
                className="
                  bg-transparent
                  w-full
                  outline-none
                  text-white
                "
              />

            </div>

          </div>

          {/* Cargo */}

          <div className="mb-4">

            <label className="text-slate-300 text-sm block mb-1">
              Cargo
            </label>

            <div className="h-11 rounded-xl border border-slate-700 bg-[#091a38] px-4 flex items-center gap-3">

              <Briefcase
                size={18}
                className="text-slate-400"
              />

              <input
                type="text"
                defaultValue="Administrador del sistema"
                className="
                  bg-transparent
                  w-full
                  outline-none
                  text-white
                "
              />

            </div>

          </div>

          {/* Contraseña */}

          <div className="mb-4">

            <label className="text-slate-300 text-sm block mb-1">
              Nueva contraseña
            </label>

            <div className="h-11 rounded-xl border border-slate-700 bg-[#091a38] px-4 flex items-center gap-3">

              <Lock
                size={18}
                className="text-slate-400"
              />

              <input
                type="password"
                placeholder="********"
                className="
                  bg-transparent
                  w-full
                  outline-none
                  text-white
                "
              />

            </div>

          </div>

          {/* Confirmar contraseña */}

          <div className="mb-6">

            <label className="text-slate-300 text-sm block mb-1">
              Confirmar contraseña
            </label>

            <div className="h-11 rounded-xl border border-slate-700 bg-[#091a38] px-4 flex items-center gap-3">

              <Lock
                size={18}
                className="text-slate-400"
              />

              <input
                type="password"
                placeholder="********"
                className="
                  bg-transparent
                  w-full
                  outline-none
                  text-white
                "
              />

            </div>

          </div>

          {/* Botón */}

          <button
            className="
              w-full
              md:w-[250px]
              h-11
              rounded-xl
              bg-blue-600
              hover:bg-blue-700
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

      </main>
    </div>
  );
};

export default ProfileSettings;