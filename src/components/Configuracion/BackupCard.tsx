import {
  Database,
  Clock,
} from "lucide-react";

const BackupCard = () => {
  return (
    <div
      className="
        bg-[#071b3a]
        rounded-2xl
        p-6
        border
        border-white/5
        shadow-xl
      "
    >
      <div className="flex items-center gap-5">

        <div
          className="
            w-20
            h-20
            rounded-full
            bg-purple-500/20
            flex
            items-center
            justify-center
            shrink-0
          "
        >
          <Database
            size={40}
            className="text-purple-400"
          />
        </div>

        <div className="flex-1">

          <h2 className="text-white text-2xl font-bold">
            Respaldo y datos
          </h2>

          <p className="text-slate-400 mt-2">
            Gestiona la información almacenada y supervisa el estado de los respaldos del sistema.
          </p>

          <div className="flex items-center gap-2 mt-3">

            <Clock
              size={16}
              className="text-purple-400"
            />

            <span className="text-purple-400 text-sm font-medium">
              Último respaldo: Hoy 08:30 AM
            </span>

          </div>

        </div>

      </div>
    </div>
  );
};

export default BackupCard;