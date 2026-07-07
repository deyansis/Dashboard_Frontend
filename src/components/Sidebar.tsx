import { NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Database,
  MessageSquare,
  BrainCircuit,
  FileText,
  Settings,
  LogOut,
} from "lucide-react";

import { obtenerUsuario, cerrarSesion } from "../utils/auth";

const Sidebar = () => {
  const navigate = useNavigate();

  const usuario = obtenerUsuario();

  const inicial = usuario?.nombre?.charAt(0).toUpperCase() || "U";

  const logout = () => {
    cerrarSesion();

    navigate("/login", {
      replace: true,
    });
  };
  const menu = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Extracción Inteligente",
      path: "/extraccion",
      icon: Database,
    },
    {
      name: "Gestión de Comentarios",
      path: "/comments",
      icon: MessageSquare,
    },
    {
      name: "Análisis Predictivo",
      path: "/analisis",
      icon: BrainCircuit,
    },

    {
      name: "Reportes",
      path: "/Reports",
      icon: FileText,
    },
    {
      name: "Configuración",
      path: "/Settings",
      icon: Settings,
    },
  ];

  return (
    <aside className="min-h-screen bg-[#071b3a] border-r border-white/10 shadow-2xl sticky top-0 flex flex-col w-64">
      {/* HEADER */}

      <div className="px-6 py-6 border-b border-white/10">
        <div className="flex flex-col items-center">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-20 h-20 object-contain"
          />

          <h1 className="mt-4 text-3xl font-bold text-white">
            Senti<span className="text-cyan-400">Gob</span>
          </h1>
        </div>

        {/* USUARIO */}
        <div className="mt-7 pt-6 border-t border-white/10">
          <div className="flex items-center gap-3">
            <div
              className="
          w-11
          h-11
          rounded-full
          bg-gradient-to-r
          from-cyan-500
          to-blue-600
          flex
          items-center
          justify-center
          text-white
          font-bold
        "
            >
              {inicial}
            </div>

            <div className="min-w-0">
              <p className="text-white font-semibold truncate">
                {usuario?.nombre}
              </p>

              <p className="text-slate-400 text-sm">{usuario?.cargo}</p>
            </div>
          </div>
        </div>
      </div>

      {/* MENÚ */}
      <nav className="flex-1 px-3 py-6 space-y-2">
        {menu.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-semibold transition-all ${
                  isActive
                    ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg"
                    : "text-slate-400 hover:bg-white/5 hover:text-white"
                }`
              }
            >
              <Icon size={22} className="shrink-0" />

              <span>{item.name}</span>
            </NavLink>
          );
        })}
      </nav>

      {/* FOOTER */}

      <div className="px-4 py-5 border-t border-white/10">
        <button
          onClick={logout}
          className="
    w-full
    flex
    items-center
    justify-center
    gap-3
    py-3
    rounded-2xl
    border
    border-red-500/20
    text-red-400
    hover:bg-red-500
    hover:border-red-500
    hover:text-white
    transition-all
    duration-300
  "
        >
          <LogOut size={20} />

          <span className="font-semibold">Cerrar sesión</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
