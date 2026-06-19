import {
  MessageSquare,
  CheckCircle2,
  Calendar,
} from "lucide-react";

import { useEffect, useState } from "react";
import { getSummaryData } from "../../services/dashboardService";

interface SummaryData {
  total_comentarios: number;
  comentarios_analizados: number;
  porcentaje_analizado: number;
  ultima_fecha: string;
}

interface Filters {
  fechaInicio: string;
  fechaFin: string;
  prioridad: string;
}

interface DashboardSummaryProps {
  filters: Filters;
}

const DashboardSummary = ({
  filters,
}: DashboardSummaryProps) => {

  const [summary, setSummary] =
    useState<SummaryData | null>(null);

  useEffect(() => {

    const fetchSummary = async () => {

      try {

        const data =
          await getSummaryData(
            filters
          );

        setSummary(data);

      } catch (error) {

        console.error(
          "Error cargando resumen:",
          error
        );

      }

    };

    fetchSummary();

  }, [filters]);

  const fechaFormateada =
    summary?.ultima_fecha
      ? new Date(
          summary.ultima_fecha
        ).toLocaleString("es-PE")
      : "...";

  return (
    <div className="bg-[#071b3a] rounded-2xl p-4 border border-white/5 h-[250px]">

      <h3 className="text-white font-semibold text-sm mb-5">
        Resumen del Período
      </h3>

      <div className="space-y-1">

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">

            <div className="w-9 h-9 rounded-lg bg-blue-500 flex items-center justify-center">

              <MessageSquare
                size={18}
                className="text-white"
              />

            </div>

            <span className="text-slate-200 text-sm">
              Total de comentarios
            </span>

          </div>

          <span className="text-white text-sm font-semibold">
            {summary?.total_comentarios ?? "..."}
          </span>

        </div>

        <div className="border-t border-slate-700" />

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">

            <div className="w-9 h-9 rounded-lg bg-green-500 flex items-center justify-center">

              <CheckCircle2
                size={18}
                className="text-white"
              />

            </div>

            <span className="text-slate-200 text-sm">
              Comentarios analizados
            </span>

          </div>

          <span className="text-white text-sm font-semibold">
            {summary?.comentarios_analizados ?? "..."} (
            {summary?.porcentaje_analizado ?? "..."}%)
          </span>

        </div>

        <div className="border-t border-slate-700" />

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">

            <div className="w-9 h-9 rounded-lg bg-purple-500 flex items-center justify-center">

              <Calendar
                size={18}
                className="text-white"
              />

            </div>

            <span className="text-slate-200 text-sm">
              Última extracción
            </span>

          </div>

          <span className="text-white text-sm font-semibold">
            {fechaFormateada}
          </span>

        </div>

        <div className="border-t border-slate-700" />

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">

            <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center" />

            <span className="text-slate-200 text-sm">
              Fuente
            </span>

          </div>

          <span className="text-white text-sm font-semibold">
            Facebook
          </span>

        </div>

      </div>

    </div>
  );
};

export default DashboardSummary;