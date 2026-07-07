import {
  MessageSquare,
  Smile,
  Meh,
  Frown,
} from "lucide-react";

interface Comentario {
  id: number;
  comentario: string;
  sentimiento: string;
  prioridad: string;
  fecha_registro: string;
}

interface CommentsKPIsProps {
  comentarios: Comentario[];
}

const CommentsKPIs = ({
  comentarios,
}: CommentsKPIsProps) => {

  const total =
    comentarios.length;

  const positivos =
    comentarios.filter(
      (item) =>
        item.sentimiento ===
        "positivo"
    ).length;

  const neutrales =
  comentarios.filter(
    (item) =>
      item.sentimiento ===
      "neutral"
  ).length;

  const negativos =
    comentarios.filter(
      (item) =>
        item.sentimiento ===
        "negativo"
    ).length;

 

  const porcentajePositivos =
    total > 0
      ? (
          (positivos / total) *
          100
        ).toFixed(1)
      : "0";
  const porcentajeNeutrales =
  total > 0
    ? (
        (neutrales / total) *
        100
      ).toFixed(1)
    : "0";

  const porcentajeNegativos =
    total > 0
      ? (
          (negativos / total) *
          100
        ).toFixed(1)
      : "0";

  

  return (
    <div
      className="
        grid
        grid-cols-1
        sm:grid-cols-2
        xl:grid-cols-4
        gap-4
        mb-4
      "
    >
      {/* Total comentarios */}

      <div className="
  bg-[#071b3a]
  rounded-2xl
  p-5
  border
  border-white/5
  shadow-xl
  transition-all
  duration-300
  hover:-translate-y-1
  hover:scale-[1.02]
  hover:shadow-2xl
  cursor-default
">

        <div className="flex items-center gap-4">

          <div
            className="
              w-16
              h-16
              rounded-2xl
              bg-blue-500/20
              flex
              items-center
              justify-center
              shadow-[0_0_20px_rgba(59,130,246,0.35)]
            "
          >
            <MessageSquare
              size={30}
              className="text-blue-400"
            />
          </div>

          <div>

            <p className="text-slate-300 text-sm">
              Total comentarios
            </p>

            <h2 className="text-3xl font-bold text-white mt-1">
              {total}
            </h2>

            <p className="text-slate-400 text-sm mt-2">
              100% del total
            </p>

          </div>

        </div>

      </div>

      {/* Positivos */}

      <div className="
  bg-[#071b3a]
  rounded-2xl
  p-5
  border
  border-white/5
  shadow-xl
  transition-all
  duration-300
  hover:-translate-y-1
  hover:scale-[1.02]
  hover:shadow-2xl
  cursor-default
">

        <div className="flex items-center gap-4">

          <div
            className="
              w-16
              h-16
              rounded-2xl
              bg-green-500/20
              flex
              items-center
              justify-center
              shadow-[0_0_20px_rgba(34,197,94,0.35)]
            "
          >
            <Smile
              size={30}
              className="text-green-400"
            />
          </div>

          <div>

            <p className="text-slate-300 text-sm">
              Positivos
            </p>

            <h2 className="text-3xl font-bold text-white mt-1">
              {positivos}
            </h2>

            <p className="text-slate-400 text-sm mt-2">
              {porcentajePositivos}% del total
            </p>

          </div>

        </div>

      </div>

      {/* Negativos */}

      <div className="
  bg-[#071b3a]
  rounded-2xl
  p-5
  border
  border-white/5
  shadow-xl
  transition-all
  duration-300
  hover:-translate-y-1
  hover:scale-[1.02]
  hover:shadow-2xl
  cursor-default
">

        <div className="flex items-center gap-4">

          <div
            className="
              w-16
              h-16
              rounded-2xl
              bg-red-500/20
              flex
              items-center
              justify-center
              shadow-[0_0_20px_rgba(239,68,68,0.35)]
            "
          >
            <Frown
              size={30}
              className="text-red-400"
            />
          </div>

          <div>

            <p className="text-slate-300 text-sm">
              Negativos
            </p>

            <h2 className="text-3xl font-bold text-white mt-1">
              {negativos}
            </h2>

            <p className="text-slate-400 text-sm mt-2">
              {porcentajeNegativos}% del total
            </p>

          </div>

        </div>

      </div>

      {/* Neutrales */}

<div className="
  bg-[#071b3a]
  rounded-2xl
  p-5
  border
  border-white/5
  shadow-xl
  transition-all
  duration-300
  hover:-translate-y-1
  hover:scale-[1.02]
  hover:shadow-2xl
  cursor-default
">

  <div className="flex items-center gap-4">

    <div
      className="
        w-16
        h-16
        rounded-2xl
        bg-yellow-500/20
        flex
        items-center
        justify-center
        shadow-[0_0_20px_rgba(245,158,11,0.35)]
      "
    >

      <Meh
  size={30}
  className="text-yellow-400"
/>

    </div>

    <div>

      <p className="text-slate-300 text-sm">
        Neutrales
      </p>

      <h2 className="text-3xl font-bold text-white mt-1">
        {neutrales}
      </h2>

      <p className="text-slate-400 text-sm mt-2">
        {porcentajeNeutrales}% del total
      </p>

    </div>

  </div>



        </div>

      </div>

  
  );
};

export default CommentsKPIs;