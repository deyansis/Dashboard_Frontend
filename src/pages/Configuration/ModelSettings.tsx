import Sidebar from "../../components/Sidebar";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";


import ModelInfo from "../../components/configuration/ModelInfo";

const ModelSettings = () => {

  const navigate = useNavigate();

  return (

    <div className="min-h-screen bg-[#050B1F] flex">

      <Sidebar />

      <main className="flex-1 p-6">

        <button
          onClick={() => navigate("/settings")}
          className="
            flex
            items-center
            gap-2
            text-cyan-400
            hover:text-cyan-300
            mb-6
          "
        >
          <ArrowLeft size={18} />
          Volver
        </button>

        <div className="mb-8">

          <h1 className="text-4xl font-bold text-white">
            Modelo de Machine Learning
          </h1>

          <p className="text-slate-400 mt-2">
            Información del modelo utilizado para la clasificación automática
            de sentimientos en comentarios ciudadanos.
          </p>

        </div>


        <ModelInfo />

      </main>

    </div>

  );

};

export default ModelSettings;