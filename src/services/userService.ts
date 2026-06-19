const API_URL =
  "http://127.0.0.1:5000";

export const getUser =
  async () => {

    const response =
      await fetch(
        `${API_URL}/usuario`
      );

    return response.json();

  };