import { useNavigate } from "react-router-dom";
import {
  Settings,
  ChevronRight,
} from "lucide-react";

const GeneralSettingsCard = () => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate("/general-settings")}
      className="
        bg-[#071b3a]
        rounded-2xl
        p-6
        border
        border-white/5
        shadow-xl
        hover:border-cyan-500/30
        hover:scale-[1.01]
        transition-all
        cursor-pointer
      "
    >
      <div className="flex items-center justify-between">

        <div className="flex items-center gap-5">

          <div
            className="
              w-20
              h-20
              rounded-full
              bg-cyan-500/20
              flex
              items-center
              justify-center
              shrink-0
            "
          >
            <Settings
              size={40}
              className="text-cyan-400"
            />
          </div>

          <div>

            <h2 className="text-white text-2xl font-bold">
              Configuración general
            </h2>

            <p className="text-slate-400 mt-2">
              Gestiona las preferencias generales del sistema.
            </p>

            <span
              className="
                inline-block
                mt-3
                px-3
                py-1
                rounded-lg
                bg-cyan-500/10
                text-cyan-400
                text-sm
                font-medium
              "
            >
              Configurado
            </span>

          </div>

        </div>

        <ChevronRight
          size={28}
          className="text-slate-400"
        />

      </div>
    </div>
  );
};

export default GeneralSettingsCard;