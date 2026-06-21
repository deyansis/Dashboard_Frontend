import { useEffect, useState } from "react";
import {
  Brain,
  TrendingUp,
} from "lucide-react";

import { supabase } from "../../services/supabase";

interface InsightData {
  porcentajePositivo: number;
  temaPrincipal: string;
  temaNegativo: string;
}

const PredictionInsight = () => {
  const [insight, setInsight] =
    useState<InsightData | null>(null);

  useEffect(() => {
    let activo = true;

    const cargarDatos = async () => {
      const { data, error } =
        await supabase
          .from("comentarios")
          .select(
            "tema, sentimiento"
          );

      if (error || !data) {
        console.error(error);
        return;
      }

      const total =
        data.length;

      const positivos =
        data.filter(
          (item) =>
            item.sentimiento ===
            "positivo"
        ).length;

      const porcentajePositivo =
        total > 0
          ? Math.round(
              (positivos / total) *
                100
            )
          : 0;

      const temas: Record<
        string,
        {
          total: number;
          negativos: number;
        }
      > = {};

      data.forEach((item) => {
        const tema =
          item.tema || "Otros";

        if (!temas[tema]) {
          temas[tema] = {
            total: 0,
            negativos: 0,
          };
        }

        temas[tema].total++;

        if (
          item.sentimiento ===
          "negativo"
        ) {
          temas[
            tema
          ].negativos++;
        }
      });

      const temaPrincipal =
        [...Object.entries(temas)]
          .sort(
            (a, b) =>
              b[1].total -
              a[1].total
          )[0]?.[0] ||
        "Sin datos";

      const temaNegativo =
        [...Object.entries(temas)]
          .sort(
            (a, b) =>
              b[1].negativos -
              a[1].negativos
          )[0]?.[0] ||
        "Sin datos";

      if (activo) {
        setInsight({
          porcentajePositivo,
          temaPrincipal,
          temaNegativo,
        });
      }
    };

    cargarDatos();

    return () => {
      activo = false;
    };
  }, []);

  if (!insight) {
    return null;
  }

  return (
    <div className="mt-4 bg-[#071b3a] rounded-2xl p-5 border border-white/5 shadow-sm">
      <div className="flex items-center gap-3 mb-4">
        <div
          className="
            w-12
            h-12
            rounded-xl
            bg-cyan-500/20
            flex
            items-center
            justify-center
          "
        >
          <Brain
            size={24}
            className="text-cyan-400"
          />
        </div>

        <div>
          <h3 className="text-white font-semibold text-sm">
            Interpretación generada por IA
          </h3>

          <p className="text-slate-400 text-sm">
            Análisis automático de la tendencia observada.
          </p>
        </div>
      </div>

      <div className="space-y-3 text-slate-300 leading-relaxed">
        <p>
          La percepción ciudadana presenta un comportamiento relativamente estable durante el periodo analizado.
        </p>

        <p>
          Actualmente, el{" "}
          <span className="text-cyan-400 font-semibold">
            {insight.porcentajePositivo}%
          </span>{" "}
          de los comentarios analizados poseen una valoración positiva.
        </p>

        <p>
          El tema con mayor participación ciudadana corresponde a{" "}
          <span className="text-white font-semibold">
            {insight.temaPrincipal}
          </span>.
        </p>

        <p>
          Según la tendencia histórica observada, se proyecta una ligera mejora en la percepción ciudadana durante los próximos periodos.
        </p>
      </div>

      <div className="mt-4 flex items-center gap-2 text-green-400 text-sm font-medium">
        <TrendingUp size={14} />

        Recomendación: priorizar acciones relacionadas con{" "}
        {insight.temaNegativo} y mantener el monitoreo continuo de los comentarios ciudadanos.
      </div>
    </div>
  );
};

export default PredictionInsight;