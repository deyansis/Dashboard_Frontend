import {
  FileText,
  Download,
  Trash2,
  History,
} from "lucide-react";

import {
  useEffect,
  useState,
} from "react";

import {
  getReports,
  downloadReport,
  deleteReport,
} from "../../services/reportService";

import Swal from "sweetalert2";
import toast from "react-hot-toast";

interface Reporte {
  id: number;
  nombre: string;
  formato: string;
  estado: string;
  fecha_generacion: string;
}

interface ReportHistoryProps {

  reload: boolean;

  onReportDeleted: () => void;

}

const ReportHistory = ({
  reload,
  onReportDeleted,
}: ReportHistoryProps) => {

  const [
    reports,
    setReports,
  ] = useState<Reporte[]>([]);

  useEffect(() => {

    let activo = true;

    const cargarDatos = async () => {

      try {

        const response =
          await getReports();

        if (activo) {

          setReports(
            response.reportes || []
          );

        }

      } catch (error) {

        console.error(error);

      }

    };

    cargarDatos();

    return () => {

      activo = false;

    };

  }, [reload]);

  const handleDownload = (
    report: Reporte
  ) => {

    downloadReport(
      report.id
    );

  };

  const handleDelete = async (
  report: Reporte
) => {

  const result = await Swal.fire({

    title: "¿Eliminar reporte?",

    text: "Esta acción no se puede deshacer.",

    icon: "warning",

    showCancelButton: true,

    confirmButtonColor: "#2563eb",

    cancelButtonColor: "#475569",

    confirmButtonText: "Eliminar",

    cancelButtonText: "Cancelar",

    background: "#071b3a",

    color: "#ffffff",

  });

  if (!result.isConfirmed) return;

  try {

    await deleteReport(
      report.id
    );

    setReports(
      reports.filter(
        (r) =>
          r.id !== report.id
      )
    );

    onReportDeleted();

    toast.success(
      "Reporte eliminado correctamente."
    );

  } catch (error) {

    console.error(error);

    toast.error(
      "No se pudo eliminar el reporte."
    );

  }

};
  return (

    <div className="bg-[#071b3a] rounded-2xl p-5 border border-white/5 shadow-xl">

      <div className="flex items-center gap-3 mb-5">

        <History
          size={22}
          className="text-purple-400"
        />

        <h2 className="text-white text-2xl font-bold">
          Historial de reportes
        </h2>

      </div>

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="border-b border-white/10">

              <th className="text-left py-3 text-slate-400 font-medium">
                Reporte
              </th>

              <th className="text-left py-3 text-slate-400 font-medium">
                Fecha
              </th>

              <th className="text-left py-3 text-slate-400 font-medium">
                Formato
              </th>

              <th className="text-left py-3 text-slate-400 font-medium">
                Estado
              </th>

              <th className="text-right py-3 text-slate-400 font-medium">
                Acciones
              </th>

            </tr>

          </thead>

          <tbody>

            {reports.map(
              (report) => (

                <tr
                  key={report.id}
                  className="border-b border-white/5"
                >

                  <td className="py-2.5">

                    <div className="flex items-center gap-3">

                      <div className="w-9 h-9 rounded-xl bg-blue-500/20 flex items-center justify-center">

                        <FileText
                          size={18}
                          className="text-blue-400"
                        />

                      </div>

                      <span className="text-white">

                        {report.nombre}

                      </span>

                    </div>

                  </td>

                  <td className="text-slate-300">

                    {new Date(
                      report.fecha_generacion
                    ).toLocaleDateString()}

                  </td>

                  <td className="text-slate-300">

                    {report.formato}

                  </td>

                  <td>

                    <span
                      className="
                        px-3
                        py-1
                        rounded-lg
                        text-xs
                        bg-green-500/10
                        text-green-400
                      "
                    >

                      {report.estado}

                    </span>

                  </td>

                  <td>

                    <div className="flex justify-end gap-2">

                      <button
                        onClick={() =>
                          handleDelete(
                            report
                          )
                        }
                        className="
  w-9
  h-9
  rounded-lg
  bg-red-500/15
  hover:bg-red-500/25
  hover:scale-110
  transition-all
  duration-300
  flex
  items-center
  justify-center
"
                      >

                        <Trash2
                          size={16}
                          className="text-red-400"
                        />

                      </button>

                      <button
                        onClick={() =>
                          handleDownload(
                            report
                          )
                        }
                        className="
  w-9
  h-9
  rounded-lg
  bg-blue-600
  hover:bg-blue-700
  hover:scale-110
  transition-all
  duration-300
  flex
  items-center
  justify-center
"
                      >

                        <Download
                          size={16}
                          className="text-white"
                        />

                      </button>

                    </div>

                  </td>

                </tr>

              )
            )}

          </tbody>

        </table>

      </div>

    </div>

  );

};

export default ReportHistory;