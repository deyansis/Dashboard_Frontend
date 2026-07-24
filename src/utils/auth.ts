// Importamos el tipo de usuario y definimos la clave que utilizaremos
// para almacenar la información de la sesión en el localStorage.
import type { Usuario } from "../services/authService";
const KEY = "usuario";



// Administramos la autenticación del usuario mediante LocalStorage,
// controlando el inicio, la consulta y el cierre de la sesión.
export const guardarUsuario = (usuario: Usuario) => {
  localStorage.setItem(KEY, JSON.stringify(usuario));
};
export const obtenerUsuario = () => {
  const data = localStorage.getItem(KEY);

  console.log("KEY:", KEY);
  console.log("DATA:", data);

  if (!data) {
    return null;
  }

  try {
    return JSON.parse(data);
  } catch {
    return null;
  }
};

export const cerrarSesion = () => {
  localStorage.removeItem(KEY);
};

export const estaAutenticado = () => {
  const usuario = obtenerUsuario();

  console.log("USUARIO:", usuario);

  return usuario !== null;
};