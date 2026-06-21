import { useEffect, useState } from "react";

import {
  Brain,
  Megaphone,
  Shield,
  MessageCircle,
  BarChart3,
} from "lucide-react";

import { supabase } from "../../services/supabase";

interface Recommendation {
  titulo: string;
  descripcion: string;
  impacto: string;
  icono: React.ReactNode;
  color: string;
  bg: string;
}

const PredictionRecommendations = () => {
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);

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

      const temaMasPositivo = temasPositivos.find(
        (tema) =>
          tema[0] !== temaMasComentado?.[0] && tema[0] !== temaMasNegativo?.[0],
      );

      const nuevasRecomendaciones: Recommendation[] = [
        {
          titulo: "Fortalecer acciones correctivas",

          descripcion: `Incrementar las intervenciones relacionadas con ${
            temaMasNegativo?.[0] || "el tema identificado"
          } para reducir la percepción negativa detectada.`,

          impacto: "Impacto alto",

          icono: <Shield size={24} className="text-red-400" />,

          color: "text-red-400",

          bg: "bg-red-500/20",
        },

        {
          titulo: "Priorizar atención ciudadana",

          descripcion: `${
            temaMasComentado?.[0] || "el tema identificado"
          } concentra una alta participación ciudadana y requiere seguimiento constante.`,

          impacto: "Impacto alto",

          icono: <Megaphone size={24} className="text-blue-400" />,

          color: "text-blue-400",

          bg: "bg-blue-500/20",
        },

        {
          titulo: "Mantener buenas prácticas",

          descripcion: `${
            temaMasPositivo?.[0] || "el tema identificado"
          } presenta un balance favorable entre opiniones positivas y negativas.`,

          impacto: "Impacto medio",

          icono: <MessageCircle size={24} className="text-green-400" />,

          color: "text-green-400",

          bg: "bg-green-500/20",
        },

        {
          titulo: "Monitoreo continuo",

          descripcion:
            "Continuar evaluando la evolución de los comentarios ciudadanos para detectar cambios tempranos en la percepción pública.",

          impacto: "Impacto medio",

          icono: <BarChart3 size={24} className="text-yellow-400" />,

          color: "text-yellow-400",

          bg: "bg-yellow-500/20",
        },
      ];

      if (activo) {
        setRecommendations(nuevasRecomendaciones);
      }
    };

    cargarDatos();

    return () => {
      activo = false;
    };
  }, []);

  return (
    <div className="bg-[#071b3a] rounded-2xl p-4 border border-white/5 shadow-xl mt-4">
      <div className="flex items-center gap-3 mb-4">
        <Brain size={20} className="text-cyan-400" />

        <h2 className="text-white text-lg font-bold">
          Recomendaciones generadas por IA
        </h2>
      </div>

      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-4
          gap-4
        "
      >
        {recommendations.map((item, index) => (
          <div
            key={index}
            className="
                bg-[#091a38]
                border
                border-white/5
                rounded-2xl
                p-3
              "
          >
            <div className="flex gap-4">
              <div
                className={`
                    w-14
                    h-14
                    rounded-full
                    flex
                    items-center
                    justify-center
                    shrink-0
                    mt-1
                    ${item.bg}
                  `}
              >
                {item.icono}
              </div>

              <div>
                <h3 className="text-white font-semibold mb-2">{item.titulo}</h3>

                <p className="text-slate-400 text-sm leading-6 mb-3">
                  {item.descripcion}
                </p>

                <span
                  className={`
                      px-3
                      py-1
                      rounded-lg
                      text-xs
                      ${item.color}
                    `}
                >
                  {item.impacto}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PredictionRecommendations;
