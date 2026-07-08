const API_URL = import.meta.env.VITE_API_URL;

export const getUser =
  async () => {

    const response =
      await fetch(
        `${API_URL}/usuario`
      );

    return response.json();

  };