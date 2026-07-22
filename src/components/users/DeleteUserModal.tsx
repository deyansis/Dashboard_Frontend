import { X, TriangleAlert } from "lucide-react";
import toast from "react-hot-toast";
import { eliminarUsuario } from "../../services/userService";

interface Usuario {
  id: number;
  nombre: string;
}

interface DeleteUserModalProps {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
  usuario: Usuario | null;
}

const DeleteUserModal = ({
  open,
  onClose,
  onSuccess,
  usuario,
}: DeleteUserModalProps) => {

  const eliminar = async () => {

    if (!usuario) return;

    try {

      await eliminarUsuario(usuario.id);

      toast.success("Usuario eliminado correctamente.");

      onSuccess();
      onClose();

    } catch {

      toast.error("No se pudo eliminar el usuario.");

    }

  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">

      <div className="bg-[#071b3a] rounded-2xl w-full max-w-md border border-slate-700">

        <div className="flex justify-between items-center p-6 border-b border-slate-700">

          <h2 className="text-xl font-bold text-white">
            Eliminar usuario
          </h2>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white"
          >
            <X size={22} />
          </button>

        </div>

        <div className="p-6 text-center">

          <TriangleAlert
            size={60}
            className="mx-auto text-red-400 mb-5"
          />

          <p className="text-white text-lg">
            ¿Deseas eliminar a
          </p>

          <p className="text-cyan-400 font-bold text-xl mt-2">
            {usuario?.nombre}?
          </p>

          <p className="text-slate-400 mt-4">
            Esta acción no se puede deshacer.
          </p>

          <div className="flex justify-center gap-4 mt-8">

            <button
              onClick={onClose}
              className="px-6 h-11 rounded-xl border border-slate-600 text-slate-300 hover:bg-slate-700"
            >
              Cancelar
            </button>

            <button
              onClick={eliminar}
              className="px-6 h-11 rounded-xl bg-red-600 hover:bg-red-700 text-white font-semibold"
            >
              Eliminar
            </button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default DeleteUserModal;