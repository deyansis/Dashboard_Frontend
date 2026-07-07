import {
  FileText,
  Calendar,
  Download,
  Check,
} from "lucide-react";

import { useState } from "react";

import toast from "react-hot-toast";

import {
  createReportByDate,
} from "../../services/reportService";

interface ReportGeneratorProps {
  onReportCreated: () => void;
}

const ReportGenerator = ({
  onReportCreated,
}: ReportGeneratorProps) => {

  const [
    tipoReporte,
    setTipoReporte,
  ] = useState(
    "Reporte de análisis completo"
  );

  const [
    fechaInicio,
    setFechaInicio,
  ] = useState("");

  const [
    fechaFin,
    setFechaFin,
  ] = useState("");

  const [
    formato,
    setFormato,
  ] = useState("PDF");

  const [
    loading,
    setLoading,
  ] = useState(false);

  const secciones =
    tipoReporte === "Reporte ejecutivo"
      ? [
          "Resumen ejecutivo",
          "KPIs",
          "Conclusiones",
          "Recomendaciones",
        ]
      : [
          "Resumen ejecutivo",
          "KPIs",
          "Comentarios analizados",
          "Conclusiones",
          "Recomendaciones",
        ];

  const handleGenerate =
    async () => {

      if (
        !fechaInicio ||
        !fechaFin
      ) {

        toast.error(
          "Seleccione el período del reporte."
        );

        return;

      }

      try {

        setLoading(true);

        await createReportByDate(
          tipoReporte,
          formato,
          fechaInicio,
          fechaFin
        );

        onReportCreated();

        toast.success(
          "Reporte generado correctamente."
        );

      } catch (error) {

        console.error(error);

        toast.error(
          "Error generando el reporte."
        );

      } finally {

        setLoading(false);

      }

    };

  return (

    <div className="bg-[#071b3a] rounded-2xl p-5 border border-white/5 shadow-xl">

      <div className="flex items-center gap-3 mb-5">

        <FileText
          size={22}
          className="text-blue-400"
        />

        <h2 className="text-white text-2xl font-bold">
          Generar nuevo reporte
        </h2>

      </div>

      {/* Tipo */}

      <div className="mb-5">

        <label className="text-slate-300 text-sm block mb-2">

          Tipo de reporte

        </label>

        <select
          value={tipoReporte}
          onChange={(e) =>
            setTipoReporte(
              e.target.value
            )
          }
          className="
            w-full
            h-12
            rounded-xl
            border
            border-slate-700
            bg-[#091a38]
            text-white
            px-4
            outline-none
            focus:border-blue-500
          "
        >

          <option>
            Reporte de análisis completo
          </option>

          <option>
            Reporte ejecutivo
          </option>

        </select>

      </div>

      <div className="border-t border-white/10 my-5"></div>

      {/* Período */}

      <div className="mb-5">

        <label className="text-slate-300 text-sm block mb-3">

          Período

        </label>

        <div className="grid grid-cols-2 gap-4">

          <div>

            <div
              className="
                h-12
                rounded-xl
                border
                border-slate-700
                bg-[#091a38]
                px-3
                flex
                items-center
                gap-2
                focus-within:border-blue-500
              "
            >

              <Calendar
                size={16}
                className="text-slate-400"
              />

              <input
                type="date"
                value={fechaInicio}
                onChange={(e) =>
                  setFechaInicio(
                    e.target.value
                  )
                }
                className="
                  bg-transparent
                  text-white
                  outline-none
                  w-full
                "
              />

            </div>

          </div>

          <div>

            <div
              className="
                h-12
                rounded-xl
                border
                border-slate-700
                bg-[#091a38]
                px-3
                flex
                items-center
                gap-2
                focus-within:border-blue-500
              "
            >

              <Calendar
                size={16}
                className="text-slate-400"
              />

              <input
                type="date"
                value={fechaFin}
                onChange={(e) =>
                  setFechaFin(
                    e.target.value
                  )
                }
                className="
                  bg-transparent
                  text-white
                  outline-none
                  w-full
                "
              />

            </div>

          </div>

        </div>

      </div>

      {/* Formato */}

      <div className="mb-5">

        <label className="text-slate-300 text-sm block mb-2">

          Formato

        </label>

        <select
          value={formato}
          onChange={(e) =>
            setFormato(
              e.target.value
            )
          }
          className="
            w-full
            h-12
            rounded-xl
            border
            border-slate-700
            bg-[#091a38]
            text-white
            px-4
            outline-none
            focus:border-blue-500
          "
        >

          <option>
            PDF
          </option>

          <option>
            Excel
          </option>

        </select>

      </div>

      {/* Secciones */}

      <div className="mb-5">

        <label className="text-slate-300 text-sm block mb-2">

          Secciones incluidas

        </label>

        <div className="rounded-xl border border-slate-700 bg-[#091a38] p-3">

          <p className="text-slate-400 text-sm mb-3">

            El reporte incluirá automáticamente las siguientes secciones según el tipo seleccionado.

          </p>

          <div className="flex flex-wrap gap-2">

            {secciones.map((seccion) => (

              <div
                key={seccion}
                className="
                  flex
                  items-center
                  gap-2
                  px-3
                  py-2
                  rounded-lg
                  bg-[#0d2247]
                  text-slate-200
                  text-sm
                "
              >

                <Check
                  size={15}
                  className="text-green-400"
                />

                {seccion}

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* Botón */}

      <button
        onClick={handleGenerate}
        disabled={loading}
        className="
          w-full
          h-12
          rounded-xl
          bg-blue-600
          hover:bg-blue-700
          disabled:bg-slate-700
          transition-all
          duration-300
          text-white
          font-semibold
          flex
          items-center
          justify-center
          gap-2
        "
      >

        <Download size={18} />

        {loading
          ? "Generando..."
          : "Generar reporte"}

      </button>

    </div>

  );

};

export default ReportGenerator;