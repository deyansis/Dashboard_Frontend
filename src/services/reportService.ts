const API_URL = import.meta.env.VITE_API_URL;
export const getReports =
  async () => {

    const response =
      await fetch(
        `${API_URL}/reportes`
      );

    return response.json();

  };

export const createReport =
  async (
    nombre: string,
    formato: string
  ) => {

    const response =
      await fetch(
        `${API_URL}/reportes`,
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            nombre,
            formato,
          }),
        }
      );

    return response.json();

  };

export const downloadReport =
  (id: number) => {

    window.open(
      `${API_URL}/descargar-reporte/${id}`,
      "_blank"
    );

  };

  export const createReportByDate =
  async (
    nombre: string,
    formato: string,
    fechaInicio: string,
    fechaFin: string
  ) => {

    const response =
      await fetch(
        `${API_URL}/reportes`,
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            nombre,
            formato,
            fecha_inicio: fechaInicio,
            fecha_fin: fechaFin,
          }),
        }
      );

    return response.json();

  };

  export const deleteReport =
  async (
    id: number
  ) => {

    const response =
      await fetch(
        `${API_URL}/reportes/${id}`,
        {
          method: "DELETE",
        }
      );

    return response.json();

  };