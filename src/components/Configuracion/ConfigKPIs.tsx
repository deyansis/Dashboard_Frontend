import {
  Users,
  Bell,
  ShieldCheck,
  Database,
} from "lucide-react";

const ConfigKPIs = () => {
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
      {/* Administradores */}

      <div className="bg-[#071b3a] rounded-2xl p-4 border border-white/5 shadow-xl">

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
            <Users
              size={28}
              className="text-blue-400"
            />
          </div>

          <div>

            <p className="text-slate-400 text-sm">
              Administradores
            </p>

            <h2 className="text-3xl font-bold text-white">
              3
            </h2>

            <p className="text-slate-400 text-xs mt-1">
              Usuarios registrados
            </p>

          </div>

        </div>

      </div>

      {/* Notificaciones */}

      <div className="bg-[#071b3a] rounded-2xl p-4 border border-white/5 shadow-xl">

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
              Alertas activas
            </p>

            <h2 className="text-3xl font-bold text-white">
              5
            </h2>

            <p className="text-slate-400 text-xs mt-1">
              Configuradas
            </p>

          </div>

        </div>

      </div>

      {/* Seguridad */}

      <div className="bg-[#071b3a] rounded-2xl p-4 border border-white/5 shadow-xl">

        <div className="flex items-center gap-4">

          <div
            className="
              w-14
              h-14
              rounded-2xl
              bg-green-500/20
              flex
              items-center
              justify-center
            "
          >
            <ShieldCheck
              size={28}
              className="text-green-400"
            />
          </div>

          <div>

            <p className="text-slate-400 text-sm">
              Seguridad
            </p>

            <h2 className="text-2xl font-bold text-green-400">
              Activa
            </h2>

            <p className="text-slate-400 text-xs mt-1">
              Sistema protegido
            </p>

          </div>

        </div>

      </div>

      {/* Respaldo */}

      <div className="bg-[#071b3a] rounded-2xl p-4 border border-white/5 shadow-xl">

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
            <Database
              size={28}
              className="text-purple-400"
            />
          </div>

          <div>

            <p className="text-slate-400 text-sm">
              Último respaldo
            </p>

            <h2 className="text-2xl font-bold text-white">
              Hoy
            </h2>

            <p className="text-slate-400 text-xs mt-1">
              08:30 AM
            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default ConfigKPIs;