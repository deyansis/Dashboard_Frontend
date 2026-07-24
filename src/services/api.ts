// Obtenemos la dirección del backend desde las variables de entorno
// para facilitar la configuración del sistema en distintos entornos.
const API_URL = import.meta.env.VITE_API_URL;

// Definimos las estructuras de datos que utilizará el Dashboard
// para mostrar los comentarios y sus estadísticas.
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

// Consultamos la información del Dashboard para obtener las
// estadísticas y los comentarios analizados.
export const obtenerDashboard = async (): Promise<DashboardData> => {
  const response = await fetch(`${API_URL}/analizar_csv`);
  const data = await response.json();
  if (data.error) {
    throw new Error(data.error);
  }
  return data;
};

// Enviamos un comentario al backend para analizar su sentimiento
// y devolver el resultado del procesamiento.
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