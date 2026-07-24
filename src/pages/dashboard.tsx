// Importamos los componentes que conforman el Dashboard,
// incluyendo el menú lateral, filtros e indicadores principales.
import Sidebar from "../components/Sidebar";
import { useState, useEffect } from "react";
import DashboardKPIs from "../components/dashboard/DashboardKPIs";
import DashboardFilters from "../components/dashboard/DashboardFilters";
import DashboardCharts from "../components/dashboard/DashboardCharts";
import DashboardAlerts from "../components/dashboard/DashboardAlerts";
import DashboardSummary from "../components/dashboard/DashboardSummary";

// Administramos los filtros seleccionados por el usuario y
// actualizamos la información cuando estos cambian.
const Dashboard = () => {
  const [filters, setFilters] = useState({
    fechaInicio: "",
    fechaFin: "",
    prioridad: "todas",
  });
  const [appliedFilters, setAppliedFilters] =
    useState(filters);
  useEffect(() => {
    console.log(
      "Filtros aplicados:",
      appliedFilters
    );
  }, [appliedFilters]);

// Construimos la estructura principal del Dashboard,
// incorporando el menú lateral y el área de visualización.
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
        <div className="mb-4">
          <h1 className="text-4xl font-bold text-white">
            Dashboard - Sentimiento Ciudadano
          </h1>
          <p className="text-slate-400 mt-2">
            Sistema Inteligente de Monitoreo y Análisis de Percepción Ciudadana
          </p>
        </div>
        <DashboardKPIs

// Mostramos los diferentes componentes del Dashboard,
// enviando los filtros para actualizar la información presentada.
  filters={appliedFilters}
/>
        <DashboardFilters
          filters={filters}
          setFilters={setFilters}
          onApply={() =>
            setAppliedFilters(filters)
          }
        />
     <DashboardCharts
  filters={appliedFilters}
/>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
          <div className="lg:col-span-2">
       <DashboardAlerts
  filters={appliedFilters}
/>
          </div>
          <div>
            <DashboardSummary
  filters={appliedFilters}
/>
          </div>

        </div>

      </main>

    </div>
  );
};

export default Dashboard;