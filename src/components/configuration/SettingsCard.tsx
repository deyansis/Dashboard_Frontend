import type { ReactNode } from "react";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface SettingsCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  route: string;
}

const SettingsCard = ({
  title,
  description,
  icon,
  route,
}: SettingsCardProps) => {

  const navigate = useNavigate();

  return (

    <div
      onClick={() => navigate(route)}
      className="
        bg-[#071b3a]
        rounded-2xl
        p-6
        border
        border-white/5
        shadow-xl
        cursor-pointer
        transition-all
        duration-300
        hover:border-blue-500/40
        hover:-translate-y-1
        hover:shadow-2xl
      "
    >

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-5">

          <div
            className="
              w-16
              h-16
              rounded-2xl
              bg-blue-500/15
              flex
              items-center
              justify-center
            "
          >
            {icon}
          </div>

          <div>

            <h2 className="text-2xl font-bold text-white">
              {title}
            </h2>

            <p className="text-slate-400 mt-1">
              {description}
            </p>

          </div>

        </div>

        <ChevronRight
          size={28}
          className="text-slate-500"
        />

      </div>

    </div>

  );

};

export default SettingsCard;