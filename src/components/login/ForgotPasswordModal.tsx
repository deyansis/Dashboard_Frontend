import { X, Mail } from "lucide-react";
import { useState } from "react";
import { enviarCodigo, cambiarPassword } from "../../services/passwordService";
import toast from "react-hot-toast";

interface Props {
  open: boolean;
  onClose: () => void;
}

const ForgotPasswordModal = ({ open, onClose }: Props) => {
  const [paso, setPaso] = useState(1);

  const [correo, setCorreo] = useState("");

  const [codigo, setCodigo] = useState("");

  const [nuevaPassword, setNuevaPassword] = useState("");

  const [confirmarPassword, setConfirmarPassword] = useState("");

  const cumpleLongitud = nuevaPassword.length >= 8;

  const cumpleMayuscula = /[A-Z]/.test(nuevaPassword);

  const cumpleMinuscula = /[a-z]/.test(nuevaPassword);

  const cumpleNumero = /\d/.test(nuevaPassword);

  const cumpleEspecial = /[@$!%*?&.#_-]/.test(nuevaPassword);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div
        className="
          w-full
          max-w-md
          rounded-3xl
          bg-[#071b3a]
          border
          border-white/10
          shadow-2xl
          p-8
          animate-fadeIn
        "
      >
        {/* Encabezado */}

        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white">
            {paso === 1
              ? "Recuperar contraseña"
              : paso === 2
                ? "Verificar código"
                : "Nueva contraseña"}
          </h2>

          <button
            onClick={() => {
              setPaso(1);

              setCorreo("");

              setCodigo("");

              setNuevaPassword("");

              setConfirmarPassword("");

              onClose();
            }}
            className="text-slate-400 hover:text-white transition"
          >
            <X size={22} />
          </button>
        </div>

        <p className="text-slate-400 mt-3 leading-relaxed">
          Ingrese el correo electrónico asociado a su cuenta. Le enviaremos un
          código de verificación.
        </p>

        {/* Correo */}

        {paso === 1 && (
          <>
            <label className="block text-white mt-8 mb-2">
              Correo electrónico
            </label>

            <div className="h-14 rounded-xl border border-slate-600 bg-[#091a38] flex items-center px-4 gap-3">
              <Mail size={20} className="text-slate-400" />

              <input
                type="email"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
                placeholder="Ingrese su correo"
                className="
          w-full
          bg-transparent
          outline-none
          text-white
          placeholder:text-slate-500
        "
              />
            </div>
          </>
        )}

        {paso === 2 && (
          <div className="mt-8">
            <label className="block text-white mb-2">
              Código de verificación
            </label>

            <input
              type="text"
              value={codigo}
              onChange={(e) => setCodigo(e.target.value)}
              placeholder="Ingrese el código recibido"
              className="
        w-full
        h-14
        rounded-xl
        bg-[#091a38]
        border
        border-slate-600
        px-4
       
      "
            />
          </div>
        )}

        {paso === 3 && (
          <div className="space-y-5 mt-8">
            <div>
              <label className="block text-white mb-2">Nueva contraseña</label>

              <input
                type="password"
                value={nuevaPassword}
                onChange={(e) => setNuevaPassword(e.target.value)}
                className="
          w-full
          h-14
          rounded-xl
          bg-[#091a38]
          border
          border-slate-600
          px-4
         
        "
              />

              <div className="mt-4 space-y-2 text-sm">
                <p
                  className={
                    cumpleLongitud ? "text-green-400" : "text-slate-400"
                  }
                >
                  {cumpleLongitud ? "✔" : "•"} Mínimo 8 caracteres
                </p>

                <p
                  className={
                    cumpleMayuscula ? "text-green-400" : "text-slate-400"
                  }
                >
                  {cumpleMayuscula ? "✔" : "•"} Una letra mayúscula
                </p>

                <p
                  className={
                    cumpleMinuscula ? "text-green-400" : "text-slate-400"
                  }
                >
                  {cumpleMinuscula ? "✔" : "•"} Una letra minúscula
                </p>

                <p
                  className={cumpleNumero ? "text-green-400" : "text-slate-400"}
                >
                  {cumpleNumero ? "✔" : "•"} Un número
                </p>

                <p
                  className={
                    cumpleEspecial ? "text-green-400" : "text-slate-400"
                  }
                >
                  {cumpleEspecial ? "✔" : "•"} Un carácter especial
                </p>
              </div>
            </div>

            <div>
              <label className="block text-white mb-2">
                Confirmar contraseña
              </label>

              <input
                type="password"
                value={confirmarPassword}
                onChange={(e) => setConfirmarPassword(e.target.value)}
                className="
          w-full
          h-14
          rounded-xl
          bg-[#091a38]
          border
          border-slate-600
          px-4
         
        "
              />
            </div>
          </div>
        )}

        {/* Botón */}

        <button
          onClick={async () => {
            // PASO 1
            if (paso === 1) {
              try {
                await enviarCodigo(correo);

                toast.success("Código enviado correctamente.");

                setPaso(2);
              } catch (error) {
                if (error instanceof Error) {
                  toast.error(error.message);
                } else {
                  toast.error("Ocurrió un error.");
                }
              }

              return;
            }

            // PASO 2
            if (paso === 2) {
              if (!codigo.trim()) {
                toast.error("Ingrese el código recibido.");

                return;
              }

              setPaso(3);

              return;
            }

            // PASO 3

            if (!nuevaPassword.trim()) {
              toast.error("Ingrese una nueva contraseña.");

              return;
            }

            if (nuevaPassword !== confirmarPassword) {
              toast.error("Las contraseñas no coinciden.");

              return;
            }

            // Validar contraseña

            const regex =
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.#_-])[A-Za-z\d@$!%*?&.#_-]{8,}$/;

            if (!regex.test(nuevaPassword)) {
              toast.error(
                "La contraseña debe tener mínimo 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial.",
              );

              return;
            }

            try {
              const respuesta = await cambiarPassword(
                correo,
                codigo,
                nuevaPassword,
              );

              toast.success(respuesta.message);

              setPaso(1);
              setCorreo("");
              setCodigo("");
              setNuevaPassword("");
              setConfirmarPassword("");

              onClose();
            } catch (error) {
              if (error instanceof Error) {
                toast.error(error.message);
              } else {
                toast.error("Ocurrió un error.");
              }
            }
          }}
          className="
    w-full
    h-14
    mt-8
    rounded-xl
    bg-gradient-to-r
    from-cyan-500
    to-blue-600
    text-white
    font-semibold
    hover:opacity-90
    transition
  "
        >
          {paso === 1
            ? "Enviar código"
            : paso === 2
              ? "Verificar código"
              : "Cambiar contraseña"}
        </button>
      </div>
    </div>
  );
};

export default ForgotPasswordModal;
