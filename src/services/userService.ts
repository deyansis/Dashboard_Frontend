const API_URL = import.meta.env.VITE_API_URL;

interface Usuario {
  id?: number;
  nombre: string;
  correo: string;
  password: string;
  cargo: string;
  estado: string;
  numero_registro: string;
}

export const obtenerUsuarios = async () => {
  const response = await fetch(`${API_URL}/usuarios`);
  return response.json();
};

export const crearUsuario = async (usuario: Usuario) => {
  const response = await fetch(`${API_URL}/usuarios`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(usuario),
  });

  return response.json();
};

export const editarUsuario = async (
  id: number,
  usuario: Usuario
) => {
  const response = await fetch(`${API_URL}/usuarios/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(usuario),
  });

  return response.json();
};

export const eliminarUsuario = async (id: number) => {
  const response = await fetch(`${API_URL}/usuarios/${id}`, {
    method: "DELETE",
  });

  return response.json();
};