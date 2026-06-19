import { useNavigate } from "react-router-dom";

import {
  User,
  ChevronRight,
} from "lucide-react";

import {
  useEffect,
  useState,
} from "react";

import {
  getUser,
} from "../../services/userService";

interface Usuario {
  id: number;
  nombre: string;
  correo: string;
  cargo: string;
  estado: string;
}

const ProfileCard = () => {

  const navigate =
    useNavigate();

  const [
    usuario,
    setUsuario,
  ] = useState<Usuario | null>(
    null
  );

 useEffect(() => {
  let activo = true;

  const cargarDatos = async () => {
    try {
      const data =
        await getUser();

      if (activo) {
        setUsuario(data);
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

  return (

    <div
      onClick={() =>
        navigate(
          "/profile-settings"
        )
      }
      className="
        bg-[#071b3a]
        rounded-2xl
        p-6
        border
        border-white/5
        shadow-xl
        hover:border-blue-500/30
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
              bg-blue-500/20
              flex
              items-center
              justify-center
              shrink-0
            "
          >

            <User
              size={40}
              className="text-blue-400"
            />

          </div>

          <div>

            <h2 className="text-white text-2xl font-bold">

              {usuario?.nombre ||
                "Administrador"}

            </h2>

            <p className="text-slate-400 mt-2">

              {usuario?.correo ||
                "Sin correo"}

            </p>

            <p className="text-slate-500 text-sm mt-1">

              Cargo:
              {" "}
              {usuario?.cargo ||
                "-"}

            </p>

            <span
              className="
                inline-block
                mt-3
                px-3
                py-1
                rounded-lg
                bg-blue-500/10
                text-blue-400
                text-sm
                font-medium
              "
            >

              {usuario?.estado ||
                "Activo"}

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

export default ProfileCard;