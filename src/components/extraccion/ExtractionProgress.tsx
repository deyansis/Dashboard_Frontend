interface ExtractionProgressProps {
  loading: boolean;
  completed: boolean;
}

const ExtractionProgress = ({
  loading,
  completed,
}: ExtractionProgressProps) => {

  const porcentaje = loading
    ? 75
    : completed
    ? 100
    : 0;

  return (
    <div className="bg-[#071b3a] rounded-2xl p-3 border border-white/5 shadow-sm">

      <h2 className="text-white text-2xl font-bold mb-6">
        Progreso de extracción
      </h2>

      <div className="flex justify-between items-center mb-4">

        <p
          className={
            completed
              ? "text-green-400"
              : loading
              ? "text-cyan-400"
              : "text-slate-400"
          }
        >
          {completed
            ? "Extracción completada"
            : loading
            ? "Procesando comentarios..."
            : "Esperando extracción"}
        </p>

        <span
          className={`text-3xl font-bold ${
            completed
              ? "text-green-400"
              : loading
              ? "text-cyan-400"
              : "text-slate-400"
          }`}
        >
          {porcentaje}%
        </span>

      </div>

      <div className="h-4 bg-slate-800 rounded-full overflow-hidden">

        <div
          className="
            h-full
            bg-gradient-to-r
            from-green-400
            via-cyan-400
            to-blue-500
            rounded-full
            transition-all
            duration-700
          "
          style={{
            width: `${porcentaje}%`,
          }}
        />

      </div>

      <div className="flex justify-between mt-4 text-slate-400 text-sm">

        <span>
          {completed
            ? "Comentarios procesados"
            : loading
            ? "Extrayendo información..."
            : "Sin extracción"}
        </span>

        <span>
          {completed
            ? "Finalizado"
            : loading
            ? "En ejecución"
            : "--:--:--"}
        </span>

      </div>

      <div className="mt-8 border border-white/10 rounded-xl p-4">

        <h3 className="text-white font-semibold mb-3">
          Estado actual
        </h3>

        <div className="space-y-1">

          <div className="flex justify-between">
            <span className="text-slate-300">
              🟢 Conectando a la API
            </span>

            <span className="text-green-400">
              Completado
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-slate-300">
              🟢 Buscando comentarios
            </span>

            <span className="text-green-400">
              Completado
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-slate-300">
              🔵 Extrayendo comentarios
            </span>

            <span
              className={
                completed
                  ? "text-green-400"
                  : loading
                  ? "text-blue-400"
                  : "text-slate-400"
              }
            >
              {completed
                ? "Completado"
                : loading
                ? "En progreso"
                : "Pendiente"}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-slate-300">
              ⚪ Procesando datos
            </span>

            <span
              className={
                completed
                  ? "text-green-400"
                  : loading
                  ? "text-blue-400"
                  : "text-slate-400"
              }
            >
              {completed
                ? "Completado"
                : loading
                ? "En progreso"
                : "Pendiente"}
            </span>
          </div>

        </div>

      </div>

    </div>
  );
};

export default ExtractionProgress;