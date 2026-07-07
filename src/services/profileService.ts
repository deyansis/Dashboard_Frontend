const API_URL = "http://127.0.0.1:5000";

export const actualizarPerfil = async (
  nombre: string,
  correo: string,
  correoActual: string
) => {

  const response = await fetch(
    `${API_URL}/perfil`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nombre,
        correo,
        correo_actual: correoActual,
      }),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }

  return data;
};