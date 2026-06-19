import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Database,
  MessageSquare,
  BrainCircuit,
  FileText,
  Settings,
} from "lucide-react";

const Sidebar = () => {
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
      <div className="px-4 py-5 border-b border-white/10 flex items-center gap-3">

        <div
          className="
            w-12
            h-12
            rounded-2xl
            bg-white
            flex
            items-center
            justify-center
            shadow-lg
            shrink-0
          "
        >
          <img
            src="/logo.png"
            alt="Logo"
            className="w-8 h-8 object-contain"
          />
        </div>

        <div>
          <h2 className="text-white text-sm font-black leading-tight">
            Sistema Inteligente
          </h2>

          <p className="text-slate-400 text-xs">
            Percepción Ciudadana
          </p>
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
              <Icon
                size={22}
                className="shrink-0"
              />

              <span>{item.name}</span>

            </NavLink>
          );
        })}

      </nav>

      {/* FOOTER */}
      <div className="px-4 py-4 border-t border-white/10">

        <div
          className="
            bg-white/5
            border
            border-white/10
            rounded-2xl
            p-4
          "
        >
          <p className="text-xs text-slate-400 font-medium">
            Sistema Inteligente
          </p>

          <p className="text-sm font-bold text-white mt-1">
            Naive Bayes + IA
          </p>
        </div>

      </div>

    </aside>
  );
};

export default Sidebar;