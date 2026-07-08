const API_URL = import.meta.env.VITE_API_URL;

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

export const iniciarSesion = async (

  correo: string,

  password: string

): Promise<LoginResponse> => {

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