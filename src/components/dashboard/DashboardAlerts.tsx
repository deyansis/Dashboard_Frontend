import {
  AlertCircle,
  AlertTriangle,
  CheckCircle2,
} from "lucide-react";

import { useEffect, useState } from "react";
import { getAlertsData } from "../../services/dashboardService";

interface Comentario {
  id: number;
  comentario: string;
  sentimiento: string;
  prioridad: string;
  confianza: number;
  fecha_registro: string;
}

interface PrioridadData {
  cantidad: number;
  comentarios: Comentario[];
}

interface AlertsData {
  alta: PrioridadData;
  media: PrioridadData;
  baja: PrioridadData;
}

interface Filters {
  fechaInicio: string;
  fechaFin: string;
  prioridad: string;
}

interface DashboardAlertsProps {
  filters: Filters;
}

const DashboardAlerts = ({
  filters,
}: DashboardAlertsProps) => {

  const [alerts, setAlerts] =
    useState<AlertsData | null>(null);

  useEffect(() => {

    const fetchAlerts = async () => {

      try {

        const data =
          await getAlertsData(
            filters
          );

        setAlerts(data);

      } catch (error) {

        console.error(
          "Error cargando alertas:",
          error
        );

      }

    };

    fetchAlerts();

  }, [filters]);

  const truncateText = (
    text: string,
    maxLength: number = 40
  ) => {

    if (text.length <= maxLength) {
      return text;
    }

    return (
      text.substring(0, maxLength) +
      "..."
    );

  };

  if (!alerts) {

    return (
      <div className="bg-[#071b3a] rounded-2xl p-4 border border-white/5 h-[250px] flex items-center justify-center text-slate-400">
        Cargando alertas...
      </div>
    );

  }

  return (

    <div className="bg-[#071b3a] rounded-2xl p-3 border border-white/5 h-[250px]">

      <h3 className="text-white font-semibold text-sm mb-4">
        Comentarios por Prioridad
      </h3>

      <div className="grid grid-cols-3 gap-2">

        {/* ALTA */}

        <div className="rounded-xl border border-red-500/40 bg-red-500/5 p-3 h-[180px]">

          <div className="flex items-center justify-between -mt-2 mb-2">

            <div className="flex items-center gap-2">

              <AlertCircle
                size={18}
                className="text-red-400"
              />

              <span className="text-white font-semibold">
                Alta
              </span>

            </div>

            <span className="text-red-400 text-2xl font-bold">
              {alerts.alta.cantidad}
            </span>

          </div>

          <div className="space-y-3">

            {alerts.alta.comentarios.map(
              (item) => (

                <div key={item.id}>

                  <p className="text-slate-200 text-sm">
                    • {truncateText(
                      item.comentario
                    )}
                  </p>

                  <span className="text-slate-500 text-xs">
                    {item.sentimiento}
                  </span>

                </div>

              )
            )}

          </div>

        </div>

        {/* MEDIA */}

        <div className="rounded-xl border border-yellow-500/40 bg-yellow-500/5 p-3 h-[180px]">

          <div className="flex items-center justify-between -mt-2 mb-2">

            <div className="flex items-center gap-2">

              <AlertTriangle
                size={18}
                className="text-yellow-400"
              />

              <span className="text-white font-semibold">
                Media
              </span>

            </div>

            <span className="text-yellow-400 text-3xl font-bold">
              {alerts.media.cantidad}
            </span>

          </div>

          <div className="space-y-3">

            {alerts.media.comentarios.map(
              (item) => (

                <div key={item.id}>

                  <p className="text-slate-200 text-sm">
                    • {truncateText(
                      item.comentario
                    )}
                  </p>

                  <span className="text-slate-500 text-xs">
                    {item.sentimiento}
                  </span>

                </div>

              )
            )}

          </div>

        </div>

        {/* BAJA */}

        <div className="rounded-xl border border-green-500/40 bg-green-500/5 p-3 h-[180px]">

          <div className="flex items-center justify-between -mt-2 mb-2">

            <div className="flex items-center gap-2">

              <CheckCircle2
                size={18}
                className="text-green-400"
              />

              <span className="text-white font-semibold">
                Baja
              </span>

            </div>

            <span className="text-green-400 text-3xl font-bold">
              {alerts.baja.cantidad}
            </span>

          </div>

          <div className="space-y-3">

            {alerts.baja.comentarios.map(
              (item) => (

                <div key={item.id}>

                  <p className="text-slate-200 text-sm">
                    • {truncateText(
                      item.comentario
                    )}
                  </p>

                  <span className="text-slate-500 text-xs">
                    {item.sentimiento}
                  </span>

                </div>

              )
            )}

          </div>

        </div>

      </div>

    </div>

  );

};

export default DashboardAlerts;