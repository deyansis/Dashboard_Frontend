import {
  FileText,
  Download,
  CalendarDays,
  FileSpreadsheet,
} from "lucide-react";

import {
  useEffect,
  useState,
} from "react";

import {
  getReports,
} from "../../services/reportService";

interface Reporte {
  id: number;
  nombre: string;
  formato: string;
  estado: string;
  fecha_generacion: string;
}

const ReportKPIs = () => {
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
  }, []);

  const totalReportes =
    reports.length;

  const ultimoReporte =
    reports.length > 0
      ? new Date(
          reports[0].fecha_generacion
        ).toLocaleDateString()
      : "--";

  const pdfCount =
    reports.filter(
      (r) =>
        r.formato === "PDF"
    ).length;

  const excelCount =
    reports.filter(
      (r) =>
        r.formato === "Excel"
    ).length;

  const formatoPrincipal =
    pdfCount >= excelCount
      ? "PDF"
      : "Excel";

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
      <div className="bg-[#071b3a] rounded-2xl p-4 border border-white/5 shadow-xl">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center">
            <FileText
              size={28}
              className="text-blue-400"
            />
          </div>

          <div>
            <p className="text-slate-400 text-sm">
              Reportes generados
            </p>

            <h2 className="text-3xl font-bold text-white">
              {totalReportes}
            </h2>

            <p className="text-green-400 text-sm mt-1">
              Registrados
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#071b3a] rounded-2xl p-4 border border-white/5 shadow-xl">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-green-500/20 flex items-center justify-center">
            <Download
              size={28}
              className="text-green-400"
            />
          </div>

          <div>
            <p className="text-slate-400 text-sm">
              Descargas realizadas
            </p>

            <h2 className="text-3xl font-bold text-white">
              {totalReportes}
            </h2>

            <p className="text-green-400 text-sm mt-1">
              Disponibles
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#071b3a] rounded-2xl p-4 border border-white/5 shadow-xl">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-purple-500/20 flex items-center justify-center">
            <CalendarDays
              size={28}
              className="text-purple-400"
            />
          </div>

          <div>
            <p className="text-slate-400 text-sm">
              Último reporte
            </p>

            <h2 className="text-xl font-bold text-white">
              {ultimoReporte}
            </h2>

            <p className="text-slate-400 text-sm mt-1">
              Generado
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#071b3a] rounded-2xl p-4 border border-white/5 shadow-xl">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-yellow-500/20 flex items-center justify-center">
            <FileSpreadsheet
              size={28}
              className="text-yellow-400"
            />
          </div>

          <div>
            <p className="text-slate-400 text-sm">
              Formato principal
            </p>

            <h2 className="text-2xl font-bold text-white">
              {formatoPrincipal}
            </h2>

            <p className="text-slate-400 text-sm mt-1">
              Más utilizado
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportKPIs;