// Definimos la dirección del servidor y las estructuras de datos
// utilizadas para el proceso de autenticación.
const API_URL = "https://dashboardbackend-production-b56a.up.railway.app";

export interface Usuario {
  id: number;
  nombre: string;
  correo: string;
  cargo: string;
  estado: string;
  numero_registro: string;
}
interface LoginResponse {
  success: boolean;
  message?: string;
  usuario?: Usuario;
}

// Declaramos la función encargada de enviar las credenciales
// del usuario al servidor para validar el inicio de sesión.
export const iniciarSesion = async (
  correo: string,
  password: string
): Promise<LoginResponse> => {

// Enviamos la solicitud al backend con las credenciales y
// obtenemos la respuesta para continuar con la autenticación.
  const response = await fetch(
    `${API_URL}/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        correo,
        password,
      }),
    }
  );
  return await response.json();
};