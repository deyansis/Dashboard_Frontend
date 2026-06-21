import { useEffect, useState } from "react";
import { AlertTriangle } from "lucide-react";
import { supabase } from "../../services/supabase";

interface Risk {
  titulo: string;
  descripcion: string;
  nivel: "Alto" | "Medio" | "Bajo";
  color: string;
  border: string;
  bg: string;
}

const PredictionRisks = () => {
  const [risks, setRisks] = useState<Risk[]>([]);

  useEffect(() => {
    let activo = true;

    const cargarDatos = async () => {
      const { data, error } = await supabase
        .from("comentarios")
        .select("tema, sentimiento");

      if (error || !data) {
        console.error(error);
        return;
      }

      const temas: Record<
        string,
        {
          total: number;
          positivos: number;
          negativos: number;
        }
      > = {};

      data.forEach((item) => {
        const tema = item.tema || "Otros";

        if (!temas[tema]) {
          temas[tema] = {
            total: 0,
            positivos: 0,
            negativos: 0,
          };
        }

        temas[tema].total++;

        if (item.sentimiento === "positivo") {
          temas[tema].positivos++;
        }

        if (item.sentimiento === "negativo") {
          temas[tema].negativos++;
        }
      });

      const temasArray = Object.entries(temas);

      const temaMasNegativo = [...temasArray].sort(
        (a, b) => b[1].negativos - a[1].negativos,
      )[0];

      const temaMasComentado = [...temasArray].sort(
        (a, b) => b[1].total - a[1].total,
      )[0];

      const temasPositivos = [...temasArray].sort(
        (a, b) =>
          b[1].positivos - b[1].negativos - (a[1].positivos - a[1].negativos),
      );

      let temaMasPositivo = temasPositivos[0];

      if (temaMasPositivo?.[0] === temaMasComentado?.[0]) {
        temaMasPositivo = temasPositivos[1];
      }

      const nuevosRiesgos: Risk[] = [
        {
          titulo: "Posible incremento de comentarios negativos",

          descripcion: `Se detectó una concentración importante de opiniones negativas relacionadas con ${
            temaMasNegativo?.[0] || "un tema"
          }.`,

          nivel: "Alto",

          color: "text-red-400",

          border: "border-red-500/20",

          bg: "bg-red-500/[0.03]",
        },

        {
          titulo: "Tema sensible en seguimiento",

          descripcion: `${
            temaMasComentado?.[0] || "Un tema"
          } es actualmente uno de los temas con mayor participación ciudadana.`,

          nivel: "Medio",

          color: "text-yellow-400",

          border: "border-yellow-500/20",

          bg: "bg-yellow-500/[0.03]",
        },

        {
          titulo: "Percepción favorable detectada",

          descripcion: `${
            temaMasPositivo?.[0] || "Un tema"
          } presenta el mejor balance entre opiniones positivas y negativas.`,

          nivel: "Bajo",

          color: "text-green-400",

          border: "border-green-500/20",

          bg: "bg-green-500/[0.03]",
        },
      ];

      if (activo) {
        setRisks(nuevosRiesgos);
      }
    };

    cargarDatos();

    return () => {
      activo = false;
    };
  }, []);

  return (
    <div className="bg-[#071b3a] rounded-2xl p-4 border border-white/5 shadow-xl">
      <h2 className="text-white text-lg font-bold mb-5">Riesgos detectados</h2>

      <div className="space-y-3">
        {risks.map((risk, index) => (
          <div
            key={index}
            className={`border rounded-xl p-3 ${risk.border} ${risk.bg}`}
          >
            <div className="flex justify-between items-start">
              <div className="flex gap-3">
                <AlertTriangle size={18} className={`${risk.color} mt-1`} />

                <div>
                  <h3 className={`${risk.color} font-semibold`}>
                    {risk.titulo}
                  </h3>

                  <p className="text-slate-400 text-sm mt-1">
                    {risk.descripcion}
                  </p>
                </div>
              </div>

              <span
                className={`px-3 py-1 rounded-lg border text-xs ${risk.color}`}
              >
                {risk.nivel}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PredictionRisks;
