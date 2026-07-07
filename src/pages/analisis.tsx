import { useEffect, useState } from "react";

import Sidebar from "../components/Sidebar";

import PredictionKPIs from "../components/analisis/PredictionKPIs";
import PredictionChart from "../components/analisis/PredictionChart";
import PredictionTrends from "../components/analisis/PredictionTrends";
import PredictionRisks from "../components/analisis/PredictionRisks";
import PredictionRecommendations from "../components/analisis/PredictionRecommendations";

import { supabase } from "../services/supabase";

const Analisis = () => {
  const [sentimiento, setSentimiento] =
    useState("Analizando");

  const [riesgo, setRiesgo] =
    useState("Bajo");

  const [tendencia, setTendencia] =
    useState("+0%");

  const obtenerIndicadores = async () => {
    try {
      const { data, error } =
        await supabase
          .from("comentarios")
          .select("*");

      if (error) {
        console.error(error);
        return;
      }

      if (!data || data.length === 0) {
        setSentimiento("Sin datos");
        setRiesgo("Bajo");
        setTendencia("0%");
        return;
      }

      const total = data.length;

      const positivos =
        data.filter(
          (item) =>
            item.sentimiento?.toLowerCase() ===
            "positivo"
        ).length;

      const negativos =
        data.filter(
          (item) =>
            item.sentimiento?.toLowerCase() ===
            "negativo"
        ).length;

      // Sentimiento esperado

      if (positivos > negativos) {
        setSentimiento("Positivo");
      } else if (negativos > positivos) {
        setSentimiento("Negativo");
      } else {
        setSentimiento("Neutral");
      }

      // Riesgo actual

      const porcentajeNegativo =
        total > 0
          ? (negativos / total) * 100
          : 0;

      if (porcentajeNegativo > 40) {
        setRiesgo("Alto");
      } else if (porcentajeNegativo > 20) {
        setRiesgo("Medio");
      } else {
        setRiesgo("Bajo");
      }

      // Tendencia

      const isn =
        total > 0
          ? ((positivos - negativos) / total) * 100
          : 0;

      if (isn >= 0) {
        setTendencia(
          `+${isn.toFixed(1)}%`
        );
      } else {
        setTendencia(
          `${isn.toFixed(1)}%`
        );
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    void obtenerIndicadores();
  }, []);

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
            Análisis Predictivo
          </h1>

          <p className="text-slate-400 mt-3">
            Predicción inteligente de la percepción ciudadana mediante modelos
            de Machine Learning.
          </p>
        </div>

        <PredictionKPIs
          sentimiento={sentimiento}
          riesgo={riesgo}
          tendencia={tendencia}
        />

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-4">
          <div className="xl:col-span-7">
            <PredictionChart />
          </div>

          <div className="xl:col-span-5 space-y-2">
            <PredictionTrends />
            <PredictionRisks />
          </div>
        </div>

        <PredictionRecommendations />
      </main>
    </div>
  );
};

export default Analisis;