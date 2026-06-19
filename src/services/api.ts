const API_URL = "http://127.0.0.1:5000";

export interface Comentario {
  comentario: string;
  sentimiento: "positivo" | "negativo" | "neutral";
  estado: "respondido" | "pendiente";
  prioridad: "alta" | "media" | "baja";
}

export interface DashboardData {
  total: number;
  positivos: number;
  negativos: number;
  neutrales: number;
  resultados: Comentario[];
}

export const obtenerDashboard = async (): Promise<DashboardData> => {
  const response = await fetch(`${API_URL}/analizar_csv`);
  const data = await response.json();

  if (data.error) {
    throw new Error(data.error);
  }

  return data;
};

export const analizarComentario = async (texto: string): Promise<{ sentimiento: string }> => {
  const response = await fetch(`${API_URL}/analizar`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ texto }),
  });

  const data = await response.json();

  if (data.error) {
    throw new Error(data.error);
  }

  return data;
};