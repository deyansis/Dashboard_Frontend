const API_URL = import.meta.env.VITE_API_URL;

interface ExtractionFilters {
  url: string;
  fecha_inicio: string;
  fecha_fin: string;
  cantidad: string;
  sentimiento: string;
}

interface HistoryFilters {
  fecha_inicio: string;
  fecha_fin: string;
  cantidad: string;
  sentimiento: string;
}

// =============================
// EXTRAER FACEBOOK
// =============================

export const extractFacebookComments = async (
  filters: ExtractionFilters
) => {

  const response = await fetch(
    `${API_URL}/extraer-facebook`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(filters),
    }
  );

  return response.json();

};

// =============================
// CONSULTAR HISTORIAL
// =============================

export const getComments = async (
  filters: HistoryFilters
) => {

  const params = new URLSearchParams({
    fecha_inicio: filters.fecha_inicio,
    fecha_fin: filters.fecha_fin,
    cantidad: filters.cantidad,
    sentimiento: filters.sentimiento,
  });

  const response = await fetch(
    `${API_URL}/comentarios?${params.toString()}`
  );

  return response.json();

};

// =============================
// ELIMINAR
// =============================

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

// =============================
// ACTUALIZAR
// =============================

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
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sentimiento,
        prioridad,
      }),
    }
  );

  return response.json();

};

// =============================
// TIMELINE
// =============================

export const getTimeline = async () => {

  const response = await fetch(
    `${API_URL}/timeline`
  );

  return response.json();

};