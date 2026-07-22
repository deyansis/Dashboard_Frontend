
import { X } from "lucide-react";
import toast from "react-hot-toast";
import { useState } from "react";
import { crearUsuario } from "../../services/userService";


interface UserModalProps {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

const UserModal = ({
  open,
  onClose,
  onSuccess,
}: UserModalProps) => {
const [nombre, setNombre] = useState("");
const [correo, setCorreo] = useState("");
const [cargo, setCargo] = useState("Analista");
const [estado, setEstado] = useState("Activo");
const [password, setPassword] = useState("");

const cumpleLongitud = password.length >= 8;
const cumpleMayuscula = /[A-Z]/.test(password);
const cumpleMinuscula = /[a-z]/.test(password);
const cumpleNumero = /\d/.test(password);
const cumpleEspecial = /[@$!%*?&.#_-]/.test(password);

const registrarUsuario = async () => {

  if (!nombre || !correo || !password) {

    toast.error("Complete todos los campos.");

    return;

  }

  const regex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.#_-])[A-Za-z\d@$!%*?&.#_-]{8,}$/;

if (!regex.test(password)) {

  toast.error(
    "La contraseña debe tener mínimo 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial."
  );

  return;

}
  try {

    await crearUsuario({
      nombre,
      correo,
      password,
      cargo,
      estado,
    });

    toast.success("Usuario registrado correctamente.");
onSuccess();
    onClose();

 } catch {

  toast.error("No se pudo registrar el usuario.");

}

};
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">

      

        <div className="flex justify-between items-center p-6 border-b border-slate-700">

          <h2 className="text-xl font-bold text-white">
            Nuevo Usuario
          </h2>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white"
          >
            <X size={22} />
          </button>

        </div>

        <div className="p-6 space-y-5">
            <div className="bg-[#071b3a] rounded-2xl w-full max-w-xl border border-slate-700 max-h-[90vh] overflow-y-auto">

  <div>
    <label className="block text-sm text-slate-300 mb-2">
      Nombre completo
    </label>

    <input
  type="text"
  value={nombre}
  onChange={(e) => setNombre(e.target.value)}
  placeholder="Ingrese el nombre"
  className="w-full h-12 rounded-xl bg-[#091a38] border border-slate-700 px-4 text-white outline-none focus:border-cyan-500"
/>
  </div>

  <div>
    <label className="block text-sm text-slate-300 mb-2">
      Correo electrónico
    </label>

    <input
  type="email"
  value={correo}
  onChange={(e) => setCorreo(e.target.value)}
  placeholder="correo@ejemplo.com"
  className="w-full h-12 rounded-xl bg-[#091a38] border border-slate-700 px-4 text-white outline-none focus:border-cyan-500"
/>
  </div>

  <div>
    <label className="block text-sm text-slate-300 mb-2">
      Cargo
    </label>

    <select
  value={cargo}
  onChange={(e) => setCargo(e.target.value)}
  className="w-full h-12 rounded-xl bg-[#091a38] border border-slate-700 px-4 text-white outline-none focus:border-cyan-500"
>
  <option>Administrador</option>
  <option>Analista</option>
</select>
  </div>

  <div>
    <label className="block text-sm text-slate-300 mb-2">
      Estado
    </label>

    <select
  value={estado}
  onChange={(e) => setEstado(e.target.value)}
  className="w-full h-12 rounded-xl bg-[#091a38] border border-slate-700 px-4 text-white outline-none focus:border-cyan-500"
>
  <option>Activo</option>
  <option>Inactivo</option>
</select>
  </div>

  <div>
    <label className="block text-sm text-slate-300 mb-2">
      Contraseña
    </label>

    <input
  type="password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  placeholder="********"
  className="w-full h-12 rounded-xl bg-[#091a38] border border-slate-700 px-4 text-white outline-none focus:border-cyan-500"
/>

<div className="mt-4 space-y-2 text-sm">

  <p className={cumpleLongitud ? "text-green-400" : "text-slate-400"}>
    {cumpleLongitud ? "✔" : "•"} Mínimo 8 caracteres
  </p>

  <p className={cumpleMayuscula ? "text-green-400" : "text-slate-400"}>
    {cumpleMayuscula ? "✔" : "•"} Una letra mayúscula
  </p>

  <p className={cumpleMinuscula ? "text-green-400" : "text-slate-400"}>
    {cumpleMinuscula ? "✔" : "•"} Una letra minúscula
  </p>

  <p className={cumpleNumero ? "text-green-400" : "text-slate-400"}>
    {cumpleNumero ? "✔" : "•"} Un número
  </p>

  <p className={cumpleEspecial ? "text-green-400" : "text-slate-400"}>
    {cumpleEspecial ? "✔" : "•"} Un carácter especial
  </p>

</div>
  </div>

  <div className="flex justify-end gap-3 pt-4">

    <button
      onClick={onClose}
      className="px-6 h-11 rounded-xl border border-slate-600 text-slate-300 hover:bg-slate-700 transition"
    >
      Cancelar
    </button>

    <button
  onClick={registrarUsuario}
  className="px-6 h-11 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white font-semibold transition"
>
  Guardar
</button>

  </div>

</div>

      </div>

    </div>
  );
};

export default UserModal;