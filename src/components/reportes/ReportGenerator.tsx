import {
  FileText,
  Calendar,
  Download,
} from "lucide-react";

import { useState } from "react";

import {
  createReport,
} from "../../services/reportService";

const ReportGenerator = () => {

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

  const handleGenerate =
    async () => {

      if (
        !fechaInicio ||
        !fechaFin
      ) {

        alert(
          "Seleccione las fechas"
        );

        return;

      }

      try {

        setLoading(true);

        await createReport(
          tipoReporte,
          formato
        );

        alert(
          "Reporte generado correctamente"
        );

      } catch (error) {

        console.error(error);

        alert(
          "Error generando reporte"
        );

      } finally {

        setLoading(false);

      }

    };

  return (

    <div className="bg-[#071b3a] rounded-2xl p-5 border border-white/5 shadow-xl">

      {/* Header */}

      <div className="flex items-center gap-3 mb-4">

        <FileText
          size={22}
          className="text-blue-400"
        />

        <h2 className="text-white text-2xl font-bold">
          Generar nuevo reporte
        </h2>

      </div>

      {/* Tipo */}

      <div className="mb-4">

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
          "
        >

          <option>
            Reporte de análisis completo
          </option>

          <option>
            Reporte ejecutivo
          </option>

          <option>
            Reporte de sentimientos
          </option>

          <option>
            Reporte mensual
          </option>

        </select>

      </div>

      {/* Fechas */}

      <div className="grid grid-cols-2 gap-4 mb-4">

        <div>

          <label className="text-slate-300 text-sm block mb-2">

            Fecha inicio

          </label>

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

          <label className="text-slate-300 text-sm block mb-2">

            Fecha fin

          </label>

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

      {/* Formato */}

      <div className="mb-4">

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

      <div className="mb-4">

        <label className="text-slate-300 text-sm block mb-2">

          Incluir secciones

        </label>

        <div className="rounded-xl border border-slate-700 bg-[#091a38] p-3">

          <div className="flex flex-wrap gap-2">

            <div className="px-3 py-2 rounded-lg bg-[#0d2247] text-slate-200 text-sm">

              Resumen ejecutivo

            </div>

            <div className="px-3 py-2 rounded-lg bg-[#0d2247] text-slate-200 text-sm">

              Análisis de sentimiento

            </div>

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
          transition
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