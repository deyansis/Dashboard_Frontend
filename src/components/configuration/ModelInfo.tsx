import {
  Brain,
  Sparkles,
  Database,
  CheckCircle2,
  MessageSquareText,
} from "lucide-react";

const ModelInfo = () => {
  return (

    <div className="space-y-6">

      {/* Información del modelo */}

      <div className="bg-[#071b3a] rounded-2xl border border-white/5 shadow-xl p-6">

        <div className="flex items-center gap-3 mb-6">

          <Brain
            size={30}
            className="text-cyan-400"
          />

          <div>

            <h2 className="text-2xl font-bold text-white">
              Información del Modelo
            </h2>

            <p className="text-slate-400">
              Características técnicas del modelo implementado.
            </p>

          </div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          <div className="bg-[#091a38] rounded-xl p-5 border border-white/5">

            <Brain
              className="text-violet-400 mb-3"
              size={26}
            />

            <p className="text-slate-400 text-sm">
              Algoritmo
            </p>

            <h3 className="text-white text-xl font-bold mt-2">
              Multinomial Naive Bayes
            </h3>

          </div>

          <div className="bg-[#091a38] rounded-xl p-5 border border-white/5">

            <Sparkles
              className="text-cyan-400 mb-3"
              size={26}
            />

            <p className="text-slate-400 text-sm">
              Vectorización
            </p>

            <h3 className="text-white text-xl font-bold mt-2">
              TF-IDF
            </h3>

          </div>

          <div className="bg-[#091a38] rounded-xl p-5 border border-white/5">

            <MessageSquareText
              className="text-green-400 mb-3"
              size={26}
            />

            <p className="text-slate-400 text-sm">
              Clases del modelo
            </p>

            <h3 className="text-white text-lg font-semibold mt-2">
              Positivo · Neutral · Negativo
            </h3>

          </div>

          <div className="bg-[#091a38] rounded-xl p-5 border border-white/5">

            <Database
              className="text-orange-400 mb-3"
              size={26}
            />

            <p className="text-slate-400 text-sm">
              Fuente de datos
            </p>

            <h3 className="text-white text-lg font-semibold mt-2">
              Comentarios de Facebook
            </h3>

          </div>

        </div>

      </div>

      {/* Descripción */}

      <div className="bg-[#071b3a] rounded-2xl border border-white/5 shadow-xl p-6">

        <div className="flex items-center gap-3 mb-5">

          <CheckCircle2
            size={28}
            className="text-green-400"
          />

          <h2 className="text-2xl font-bold text-white">

            Acerca del modelo

          </h2>

        </div>

        <p className="text-slate-300 leading-8">

          El sistema utiliza el algoritmo

          <span className="text-white font-semibold">

            {" "}Multinomial Naive Bayes{" "}

          </span>

          para clasificar automáticamente los comentarios ciudadanos
          en sentimientos positivos, neutrales y negativos.

          Antes de realizar la clasificación, los comentarios son
          sometidos a un proceso de limpieza y preprocesamiento.

          Posteriormente, son transformados mediante la técnica de
          vectorización

          <span className="text-cyan-400 font-semibold">

            {" "}TF-IDF{" "}

          </span>

          para obtener una representación numérica que permite al modelo
          realizar predicciones de manera eficiente.

        </p>

        <div className="mt-6 flex items-center gap-2">

          <CheckCircle2
            size={20}
            className="text-green-400"
          />

          <span className="text-green-400 font-medium">

            Modelo entrenado y listo para clasificar comentarios.

          </span>

        </div>

      </div>

    </div>

  );
};

export default ModelInfo;