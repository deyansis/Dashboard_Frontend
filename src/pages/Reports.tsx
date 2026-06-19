import Sidebar from "../components/Sidebar";
import ReportKPIs from "../components/reportes/ReportesKPIs";
import ReportGenerator from "../components/reportes/ReportGenerator";
import ReportHistory from "../components/reportes/ReportHistory";

const Reports = () => {
  return (
    <div className="min-h-screen bg-[#050B1F] flex">
      <Sidebar />

      <main
        className="
          flex-1
          p-4
          md:p-6
          xl:p-6
          overflow-x-hidden
        "
      >
        <div className="mb-6">
          <h1 className="text-4xl font-bold text-white">Reportes</h1>

          <p className="text-slate-400 mt-2">
            Genera y administra reportes de análisis de percepción ciudadana.
          </p>
        </div>

        <ReportKPIs />

       

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-4">
          <div className="xl:col-span-4">
            <ReportGenerator />
          </div>

          <div className="xl:col-span-8">
            <ReportHistory />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Reports;
