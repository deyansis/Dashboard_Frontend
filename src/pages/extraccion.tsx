import Sidebar from "../components/Sidebar";
import ExtractionKPIs from "../components/extraccion/ExtractionKPIs";
import ExtractionConfig from "../components/extraccion/ExtractionConfig";
import ExtractionProgress from "../components/extraccion/ExtractionProgress";
import ExtractionResults from "../components/extraccion/ExtractionResults";

import { useState } from "react";
import { extractFacebookComments } from "../services/extractionService";

interface ComentarioExtraido {
  id: number;
  comentario: string;
  sentimiento: string;
  prioridad: string;
  fecha_registro: string;
}

const Extraccion = () => {
  const [url, setUrl] = useState("");

  const [fechaInicio, setFechaInicio] = useState("");

  const [fechaFin, setFechaFin] = useState("");


  const [cantidad, setCantidad] = useState("100");

  const [filtroSentimiento, setFiltroSentimiento] = useState("todos");

  const [loading, setLoading] = useState(false);

  const [completed, setCompleted] = useState(false);

  const [results, setResults] = useState<ComentarioExtraido[]>([]);

  const handleExtraction = async () => {
    try {
      setCompleted(false);

      setLoading(true);

      const response = await extractFacebookComments({
        url,

        fecha_inicio: fechaInicio,

        fecha_fin: fechaFin,

        cantidad,

        sentimiento: filtroSentimiento,
      });

      setResults(response.comentarios || []);

      setCompleted(true);
    } catch (error) {
      console.error(error);

      alert("Error durante la extracción");
    } finally {
      setLoading(false);
    }
  };

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
            Extracción Inteligente
          </h1>

          <p className="text-slate-400 mt-2">
            Obtención automatizada de comentarios desde Facebook
          </p>
        </div>

        <ExtractionKPIs results={results} />

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-4 mb-4">
          <div className="xl:col-span-6">
            <ExtractionConfig
              url={url}
              setUrl={setUrl}
              fechaInicio={fechaInicio}
              setFechaInicio={setFechaInicio}
              fechaFin={fechaFin}
              setFechaFin={setFechaFin}
            
              
              cantidad={cantidad}
              setCantidad={setCantidad}
              filtroSentimiento={filtroSentimiento}
              setFiltroSentimiento={setFiltroSentimiento}
              onExtract={handleExtraction}
              loading={loading}
            />
          </div>

          <div className="xl:col-span-6">
            <ExtractionProgress loading={loading} completed={completed} />
          </div>
        </div>

        <ExtractionResults results={results} setResults={setResults} />
      </main>
    </div>
  );
};

export default Extraccion;
