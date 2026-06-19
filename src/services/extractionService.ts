const API_URL = "http://127.0.0.1:5000";

interface ExtractionFilters {

  url: string;

  fecha_inicio: string;

  fecha_fin: string;

  tema: string;

  cantidad: string;

  sentimiento: string;

}

export const extractFacebookComments =
  async (
    filters: ExtractionFilters
  ) => {

    const response = await fetch(
      `${API_URL}/extraer-facebook`,
      {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json",
        },

        body: JSON.stringify(
          filters
        ),
      }
    );

    return response.json();

  };

export const deleteComment = async (
  id: number
) => {

  const response = await fetch(
    `${API_URL}/comentarios/${id}`,
    {
      method: "DELETE",
    }
  );

  return response.json();

};

export const updateComment = async (
  id: number,
  sentimiento: string,
  prioridad: string
) => {

  const response = await fetch(
    `${API_URL}/comentarios/${id}`,
    {
      method: "PUT",

      headers: {
        "Content-Type":
          "application/json",
      },

      body: JSON.stringify({

        sentimiento,
        prioridad,

      }),

    }
  );

  return response.json();

};
export const getComments =
  async () => {

    const response =
      await fetch(
        `${API_URL}/comentarios`
      );

    return response.json();

  };
  export const getTimeline =
  async () => {

    const response =
      await fetch(
        `${API_URL}/timeline`
      );

    return response.json();

  };
  