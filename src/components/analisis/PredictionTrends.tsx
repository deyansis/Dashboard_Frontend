import { useEffect, useState } from "react";
import type { ReactNode } from "react";

import {
  Shield,
  Building,
  Leaf,
  Users,
  Bus,
  HeartPulse,
  GraduationCap,
} from "lucide-react";

import { supabase } from "../../services/supabase";

interface TrendItemProps {
  icon: ReactNode;
  label: string;
  value: string;
  color: string;
}

interface TrendData {
  label: string;
  value: string;
  color: string;
  icon: ReactNode;
}

const TrendItem = ({
  icon,
  label,
  value,
  color,
}: TrendItemProps) => (
  <div>
    <div className="flex justify-between mb-2">
      <div className="flex items-center gap-2 text-white">
        {icon}
        <span className="text-sm">
          {label}
        </span>
      </div>

      <span className="text-slate-300 text-sm">
        {value}
      </span>
    </div>

    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
      <div
        className={`h-full rounded-full ${color}`}
        style={{
          width: value,
        }}
      />
    </div>
  </div>
);

const PredictionTrends = () => {
  const [trends, setTrends] =
    useState<TrendData[]>([]);

  useEffect(() => {
    let activo = true;

    const cargarDatos = async () => {
      const { data, error } =
        await supabase
          .from("comentarios")
          .select("tema");

      if (error || !data) {
        console.error(error);
        return;
      }

      const total = data.length;

      const conteo: Record<
        string,
        number
      > = {};

      data.forEach((item) => {
        if (
          !item.tema ||
          item.tema === "Otros"
        ) {
          return;
        }

        conteo[item.tema] =
          (conteo[item.tema] || 0) + 1;
      });

      const iconos: Record<
        string,
        ReactNode
      > = {
        "Seguridad Ciudadana": (
          <Shield
            size={18}
            className="text-green-400"
          />
        ),

        "Obras Públicas": (
          <Building
            size={18}
            className="text-blue-400"
          />
        ),

        "Medio Ambiente": (
          <Leaf
            size={18}
            className="text-purple-400"
          />
        ),

        "Atención Ciudadana": (
          <Users
            size={18}
            className="text-yellow-400"
          />
        ),

        Transporte: (
          <Bus
            size={18}
            className="text-red-400"
          />
        ),

        Salud: (
          <HeartPulse
            size={18}
            className="text-cyan-400"
          />
        ),

        Educación: (
          <GraduationCap
            size={18}
            className="text-orange-400"
          />
        ),
      };

      const colores: Record<
        string,
        string
      > = {
        "Seguridad Ciudadana":
          "bg-green-500",

        "Obras Públicas":
          "bg-blue-500",

        "Medio Ambiente":
          "bg-purple-500",

        "Atención Ciudadana":
          "bg-yellow-500",

        Transporte:
          "bg-red-500",

        Salud:
          "bg-cyan-500",

        Educación:
          "bg-orange-500",
      };

      const resultado =
        Object.entries(conteo)
          .map(
            ([tema, cantidad]) => ({
              label: tema,

              value: `${Math.round(
                (cantidad / total) *
                  100
              )}%`,

              color:
                colores[tema] ||
                "bg-slate-500",

              icon:
                iconos[tema] || (
                  <Shield
                    size={18}
                  />
                ),
            })
          )
          .sort(
            (a, b) =>
              parseInt(b.value) -
              parseInt(a.value)
          );

      if (activo) {
        setTrends(resultado);
      }
    };

    cargarDatos();

    return () => {
      activo = false;
    };
  }, []);

  return (
    <div className="bg-[#071b3a] rounded-2xl p-4 border border-white/5 shadow-xl">
      <h2 className="text-white text-lg font-bold mb-5">
        Temas más comentados por la ciudadanía
      </h2>

      <div className="space-y-5">
        {trends.map(
          (item) => (
            <TrendItem
              key={item.label}
              icon={item.icon}
              label={item.label}
              value={item.value}
              color={item.color}
            />
          )
        )}
      </div>
    </div>
  );
};

export default PredictionTrends;