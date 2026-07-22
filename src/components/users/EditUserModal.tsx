import { X } from "lucide-react";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { editarUsuario } from "../../services/userService";

interface Usuario {
  id: number;
  nombre: string;
  correo: string;
  cargo: string;
  estado: string;
}

interface EditUserModalProps {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
  usuario: Usuario | null;
}

const EditUserModal = ({
  open,
  onClose,
  onSuccess,
  usuario,
}: EditUserModalProps) => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [cargo, setCargo] = useState("Analista");
  const [estado, setEstado] = useState("Activo");

  useEffect(() => {
    if (usuario) {
      setNombre(usuario.nombre);
      setCorreo(usuario.correo);
      setCargo(usuario.cargo);
      setEstado(usuario.estado);
    }
  }, [usuario]);

  const actualizarUsuario = async () => {
    if (!usuario) return;

    if (!nombre || !correo) {
      toast.error("Complete todos los campos.");
      return;
    }

    try {
      await editarUsuario(usuario.id, {
        nombre,
        correo,
        cargo,
        estado,
      });

      toast.success("Usuario actualizado correctamente.");

      onSuccess();
      onClose();
    } catch {
      toast.error("No se pudo actualizar el usuario.");
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-[#071b3a] rounded-2xl w-full max-w-xl border border-slate-700">

        <div className="flex justify-between items-center p-6 border-b border-slate-700">

          <h2 className="text-xl font-bold text-white">
            Editar Usuario
          </h2>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white"
          >
            <X size={22} />
          </button>

        </div>

        <div className="p-6 space-y-5">

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

          <div className="flex justify-end gap-3 pt-4">

            <button
              onClick={onClose}
              className="px-6 h-11 rounded-xl border border-slate-600 text-slate-300 hover:bg-slate-700 transition"
            >
              Cancelar
            </button>

            <button
              onClick={actualizarUsuario}
              className="px-6 h-11 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white font-semibold transition"
            >
              Actualizar
            </button>

          </div>

        </div>

      </div>
    </div>
  );
};

export default EditUserModal;