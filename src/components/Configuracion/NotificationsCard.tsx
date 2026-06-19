import {
  Bell,
  ChevronRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const NotificationsCard = () => {
  const navigate = useNavigate();

  

  return (
    <div
    onClick={() => navigate("/notification-settings")}
      className="
        bg-[#071b3a]
        rounded-2xl
        p-6
        border
        border-white/5
        shadow-xl
        hover:border-yellow-500/30
        hover:scale-[1.01]
        transition-all
        cursor-pointer
      "
    >
      <div className="flex items-center justify-between">

        <div className="flex items-center gap-4">

          <div
            className="
              w-16
              h-16
              rounded-full
              bg-yellow-500/20
              flex
              items-center
              justify-center
            "
          >
            <Bell
              size={30}
              className="text-yellow-400"
            />
          </div>

          <div>

            <h2 className="text-white text-xl font-bold">
              Notificaciones
            </h2>

            <p className="text-slate-400 mt-2">
              Gestiona alertas y avisos del sistema.
            </p>

            <span
              className="
                inline-block
                mt-3
                px-3
                py-1
                rounded-lg
                bg-yellow-500/10
                text-yellow-400
                text-sm
              "
            >
              Configurado
            </span>

          </div>

        </div>

        <ChevronRight
          size={26}
          className="text-slate-400"
        />

      </div>
    </div>
  );
};

export default NotificationsCard;