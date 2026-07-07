import type { Usuario } from "../services/authService";

const KEY = "usuario";

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