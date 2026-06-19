import Sidebar from "../components/Sidebar";
import {
  Bell,
  Mail,
  AlertTriangle,
  FileText,
  Save,
} from "lucide-react";


const NotificationSettings = () => {
  

  return (
    <div className="min-h-screen bg-[#050B1F] flex">
      <Sidebar />

      <main className="flex-1 p-6">

        <div className="mb-8">

          <h1 className="text-4xl font-bold text-white">
            Notificaciones
          </h1>

          <p className="text-slate-400 mt-2">
            Configura las alertas y avisos del sistema.
          </p>

        </div>

        <div className="flex justify-center">

          <div className="bg-[#071b3a] rounded-2xl p-6 border border-white/5 shadow-xl w-full max-w-3xl">

            {/* Comentarios negativos */}

            <div className="flex items-center justify-between py-4 border-b border-white/5">

              <div className="flex items-center gap-3">

                <AlertTriangle
                  size={20}
                  className="text-red-400"
                />

                <div>

                  <h3 className="text-white font-medium">
                    Alertas de comentarios negativos
                  </h3>

                  <p className="text-slate-400 text-sm">
                    Notificar cuando aumenten los comentarios negativos.
                  </p>

                </div>

              </div>

              <input
                type="checkbox"
                defaultChecked
                className="w-5 h-5"
              />

            </div>

            {/* Riesgos */}

            <div className="flex items-center justify-between py-4 border-b border-white/5">

              <div className="flex items-center gap-3">

                <Bell
                  size={20}
                  className="text-yellow-400"
                />

                <div>

                  <h3 className="text-white font-medium">
                    Alertas de riesgos detectados
                  </h3>

                  <p className="text-slate-400 text-sm">
                    Notificar eventos críticos generados por la IA.
                  </p>

                </div>

              </div>

              <input
                type="checkbox"
                defaultChecked
                className="w-5 h-5"
              />

            </div>

            {/* Reportes */}

            <div className="flex items-center justify-between py-4 border-b border-white/5">

              <div className="flex items-center gap-3">

                <FileText
                  size={20}
                  className="text-blue-400"
                />

                <div>

                  <h3 className="text-white font-medium">
                    Reportes automáticos
                  </h3>

                  <p className="text-slate-400 text-sm">
                    Generar reportes periódicos automáticamente.
                  </p>

                </div>

              </div>

              <input
                type="checkbox"
                defaultChecked
                className="w-5 h-5"
              />

            </div>

            {/* Correo */}

            <div className="flex items-center justify-between py-4">

              <div className="flex items-center gap-3">

                <Mail
                  size={20}
                  className="text-green-400"
                />

                <div>

                  <h3 className="text-white font-medium">
                    Notificaciones por correo
                  </h3>

                  <p className="text-slate-400 text-sm">
                    Enviar alertas al correo del administrador.
                  </p>

                </div>

              </div>

              <input
                type="checkbox"
                defaultChecked
                className="w-5 h-5"
              />

            </div>

            <button
              className="
                mt-6
                w-full
                md:w-[220px]
                h-11
                rounded-xl
                bg-yellow-600
                hover:bg-yellow-700
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

        </div>

      </main>
    </div>
  );
};

export default NotificationSettings;