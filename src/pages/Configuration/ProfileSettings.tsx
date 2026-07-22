import Sidebar from "../../components/Sidebar";

import {
  ArrowLeft,
  User,
  Mail,
  Briefcase,
  Save,
  BadgeCheck,
  Pencil,
  Trash2,
} from "lucide-react";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { obtenerUsuario, guardarUsuario } from "../../utils/auth";
import { actualizarPerfil } from "../../services/profileService";
import { obtenerUsuarios } from "../../services/userService";
import UserModal from "../../components/users/UserModal";
import EditUserModal from "../../components/users/EditUserModal";
import DeleteUserModal from "../../components/users/DeleteUserModal";

interface Usuario {
  id: number;
  nombre: string;
  correo: string;
  cargo: string;
  estado: string;
  numero_registro: string;
  fecha_registro: string;
}

const ProfileSettings = () => {
  const navigate = useNavigate();
  const usuario = obtenerUsuario();

  const [nombre, setNombre] = useState(usuario?.nombre ?? "");

  const [correo, setCorreo] = useState(usuario?.correo ?? "");

  const [cargo] = useState(usuario?.cargo ?? "");

  const [registro] = useState(usuario?.numero_registro ?? "");
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [openModal, setOpenModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [usuarioEditar, setUsuarioEditar] = useState<Usuario | null>(null);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [usuarioEliminar, setUsuarioEliminar] = useState<Usuario | null>(null);
  const guardarCambios = async () => {
    if (!usuario) {
      toast.error("No existe un usuario autenticado.");

      return;
    }

    try {
      const respuesta = await actualizarPerfil(
        nombre,

        correo,

        usuario.correo,
      );

      guardarUsuario(respuesta.usuario);

      setNombre(respuesta.usuario.nombre);
      setCorreo(respuesta.usuario.correo);

      toast.success("Perfil actualizado correctamente.");
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };

  const cargarUsuarios = async () => {
    const data = await obtenerUsuarios();

    setUsuarios(data);
  };

  useEffect(() => {
    cargarUsuarios();
  }, []);

  console.log(usuarios);
  return (
    <div className="min-h-screen bg-[#050B1F] flex">
      <Sidebar />

      <main className="flex-1 p-6">
        <button
          onClick={() => navigate("/settings")}
          className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 mb-6"
        >
          <ArrowLeft size={18} />
          Volver
        </button>

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white">
            Perfil del Administrador
          </h1>

          <p className="text-slate-400 mt-2">
            Administra la información de tu cuenta.
          </p>
        </div>

        <div className="bg-[#071b3a] rounded-2xl border border-white/5 shadow-xl p-8 w-full ">
          <h2 className="text-2xl font-bold text-white mb-8">
            Información del usuario
          </h2>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            {/* Nombre */}

            <div>
              <label className="text-slate-300 text-sm block mb-2">
                Nombre completo
              </label>

              <div className="flex items-center gap-3 h-14 rounded-xl border border-slate-700 bg-[#091a38] px-4">
                <User size={18} className="text-cyan-400" />

                <input
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  className="bg-transparent w-full outline-none text-white"
                />
              </div>
            </div>

            {/* Correo */}

            <div>
              <label className="text-slate-300 text-sm block mb-2">
                Correo electrónico
              </label>

              <div className="flex items-center gap-3 h-14 rounded-xl border border-slate-700 bg-[#091a38] px-4">
                <Mail size={18} className="text-cyan-400" />

                <input
                  value={correo}
                  onChange={(e) => setCorreo(e.target.value)}
                  className="bg-transparent w-full outline-none text-white"
                />
              </div>
            </div>

            {/* Cargo */}

            <div>
              <label className="text-slate-300 text-sm block mb-2">Cargo</label>

              <div className="flex items-center gap-3 h-14 rounded-xl border border-slate-700 bg-[#091a38] px-4">
                <Briefcase size={18} className="text-cyan-400" />

                <input
                  value={cargo}
                  disabled
                  className="bg-transparent w-full outline-none text-slate-400 cursor-not-allowed"
                />
              </div>
            </div>

            {/* Registro */}

            <div>
              <label className="text-slate-300 text-sm block mb-2">
                Número de registro
              </label>

              <div className="flex items-center gap-3 h-14 rounded-xl border border-slate-700 bg-[#091a38] px-4">
                <BadgeCheck size={18} className="text-cyan-400" />

                <input
                  value={registro}
                  disabled
                  className="bg-transparent w-full outline-none text-slate-400 cursor-not-allowed"
                />
              </div>
            </div>
          </div>

          <div className="mt-10 p-5 rounded-xl bg-[#091a38] border border-slate-700">
            <p className="text-slate-300 text-sm">
              🔒 La contraseña de acceso se administra desde la pantalla de
              inicio de sesión mediante la opción
              <span className="text-cyan-400 font-semibold">
                {" "}
                ¿Olvidaste tu contraseña?
              </span>
            </p>
          </div>

          <div className="flex justify-end mt-10">
            <button
              onClick={guardarCambios}
              className="
                h-12
                px-10
                rounded-xl
                bg-cyan-600
                hover:bg-cyan-700
                transition
                text-white
                font-semibold
                flex
                items-center
                gap-2
              "
            >
              <Save size={18} />
              Guardar cambios
            </button>
          </div>

          <div className="mt-12">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">
                Gestión de Usuarios
              </h2>

              <button
                onClick={() => setOpenModal(true)}
                className="
    px-5
    h-11
    rounded-xl
    bg-cyan-600
    hover:bg-cyan-700
    text-white
    font-semibold
  "
              >
                + Nuevo Usuario
              </button>
            </div>

            <div className="overflow-x-auto rounded-xl border border-slate-700">
              <table className="w-full">
                <thead className="bg-[#091a38]">
                  <tr>
                    <th className="p-4 text-left text-slate-300">Nombre</th>

                    <th className="p-4 text-left text-slate-300">Correo</th>

                    <th className="p-4 text-left text-slate-300">Cargo</th>

                    <th className="p-4 text-center text-slate-300">Estado</th>
                    <th className="p-4 text-center text-slate-300">Acciones</th>
                  </tr>
                </thead>

                <tbody>
                  {usuarios.map((item) => (
                    <tr key={item.id} className="border-t border-slate-700">
                      <td className="p-4 text-white">{item.nombre}</td>

                      <td className="p-4 text-slate-300">{item.correo}</td>

                      <td className="p-4 text-slate-300">{item.cargo}</td>

                      <td className="p-4 text-center text-green-400">
                        {item.estado}
                      </td>

                      <td className="p-4">
                        <div className="flex justify-center gap-3">
                          <button
 onClick={() => {
  setUsuarioEditar(item);
  setOpenEditModal(true);
}}
  className="
    w-10
    h-10
    rounded-lg
    bg-amber-500/20
    hover:bg-amber-500/30
    text-amber-400
    flex
    items-center
    justify-center
    transition
  "
>
  <Pencil size={18} />
</button>
<button
  onClick={() => {
    setUsuarioEliminar(item);
    setOpenDeleteModal(true);
  }}
  className="
    w-10
    h-10
    rounded-lg
    bg-red-500/20
    hover:bg-red-500/30
    text-red-400
    flex
    items-center
    justify-center
    transition
  "
>
  <Trash2 size={18} />
</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
<UserModal
  open={openModal}
  onClose={() => setOpenModal(false)}
  onSuccess={cargarUsuarios}
/>

<EditUserModal
  open={openEditModal}
  usuario={usuarioEditar}
  onClose={() => {
    setOpenEditModal(false);
    setUsuarioEditar(null);
  }}
  onSuccess={cargarUsuarios}
/>

<DeleteUserModal
  open={openDeleteModal}
  usuario={usuarioEliminar}
  onClose={() => {
    setOpenDeleteModal(false);
    setUsuarioEliminar(null);
  }}
  onSuccess={cargarUsuarios}
/>
       
      </main>
    </div>
  );
};

export default ProfileSettings;
