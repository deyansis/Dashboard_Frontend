const API_URL =
  "http://127.0.0.1:5000";

export interface Configuracion {
  idioma: string;
  tema: string;
  
  notificaciones: boolean;
  alertas_criticas: boolean;
}

export const getConfig =
  async () => {

    const response =
      await fetch(
        `${API_URL}/configuracion`
      );

    return response.json();

  };

export const updateConfig =
  async (
    config: Configuracion
  ) => {

    const response =
      await fetch(
        `${API_URL}/configuracion`,
        {
          method: "PUT",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify(
            config
          ),
        }
      );

    return response.json();

  };