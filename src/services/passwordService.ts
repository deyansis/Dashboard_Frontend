const API_URL = import.meta.env.VITE_API_URL;

export const enviarCodigo = async (correo: string) => {

  const response = await fetch(`${API_URL}/enviar-codigo`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      correo,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }

  return data;

};


// ========================================
// CAMBIAR CONTRASEÑA
// ========================================

export const cambiarPassword = async (
  correo: string,
  codigo: string,
  password: string
) => {

  const response = await fetch(
    `${API_URL}/cambiar-password`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        correo,
        codigo,
        password,
      }),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }

  return data;

};