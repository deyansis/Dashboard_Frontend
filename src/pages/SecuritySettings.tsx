import Sidebar from "../components/Sidebar";
import {
  Lock,
  ShieldCheck,
  Save,
} from "lucide-react";

const SecuritySettings = () => {
  return (
    <div className="min-h-screen bg-[#050B1F] flex">
      <Sidebar />

      <main className="flex-1 p-6">

        <div className="mb-8">

          <h1 className="text-4xl font-bold text-white">
            Seguridad
          </h1>

          <p className="text-slate-400 mt-2">
            Configura el acceso y la protección del sistema.
          </p>

        </div>

        <div
          className="
            bg-[#071b3a]
            rounded-2xl
            p-6
            border
            border-white/5
            shadow-xl
            w-full
          "
        >

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Contraseña actual */}

            <div>

              <label className="text-slate-300 text-sm block mb-2">
                Contraseña actual
              </label>

              <div className="h-11 rounded-xl border border-slate-700 bg-[#091a38] px-4 flex items-center gap-3">

                <Lock size={18} className="text-slate-400" />

                <input
                  type="password"
                  placeholder="********"
                  className="bg-transparent w-full outline-none text-white"
                />

              </div>

            </div>

            {/* Nueva contraseña */}

            <div>

              <label className="text-slate-300 text-sm block mb-2">
                Nueva contraseña
              </label>

              <div className="h-11 rounded-xl border border-slate-700 bg-[#091a38] px-4 flex items-center gap-3">

                <Lock size={18} className="text-slate-400" />

                <input
                  type="password"
                  placeholder="********"
                  className="bg-transparent w-full outline-none text-white"
                />

              </div>

            </div>

          </div>

          {/* Confirmar */}

          <div className="mt-6">

            <label className="text-slate-300 text-sm block mb-2">
              Confirmar contraseña
            </label>

            <div className="h-11 rounded-xl border border-slate-700 bg-[#091a38] px-4 flex items-center gap-3">

              <Lock size={18} className="text-slate-400" />

              <input
                type="password"
                placeholder="********"
                className="bg-transparent w-full outline-none text-white"
              />

            </div>

          </div>

          {/* 2FA */}

          <div
            className="
              mt-8
              p-5
              rounded-xl
              bg-[#091a38]
              border
              border-white/5
            "
          >

            <div className="flex items-center justify-between">

              <div className="flex items-center gap-3">

                <ShieldCheck
                  size={22}
                  className="text-green-400"
                />

                <div>

                  <h3 className="text-white font-medium">
                    Autenticación en dos pasos
                  </h3>

                  <p className="text-slate-400 text-sm">
                    Añade una capa adicional de seguridad.
                  </p>

                </div>

              </div>

              <input
                type="checkbox"
                defaultChecked
                className="w-5 h-5"
              />

            </div>

          </div>

          <button
            className="
              mt-6
              h-11
              px-6
              rounded-xl
              bg-green-600
              hover:bg-green-700
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

export default SecuritySettings;