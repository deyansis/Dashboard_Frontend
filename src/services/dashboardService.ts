// Obtenemos la dirección del backend desde las variables de entorno
// para realizar las consultas del Dashboard.
const API_URL = import.meta.env.VITE_API_URL;

export const getDashboardData = async (
  filters?: {
    fechaInicio: string;
    fechaFin: string;
    prioridad: string;
  }

  // Construimos los parámetros de búsqueda según los filtros
// seleccionados por el usuario para consultar la información.
) => {
  const params = new URLSearchParams();
  if (filters?.fechaInicio) {
    params.append(
      "fecha_inicio",
      filters.fechaInicio
    );
  }
  if (filters?.fechaFin) {
    params.append(
      "fecha_fin",
      filters.fechaFin
    );
  }
  if (
    filters?.prioridad &&
    filters.prioridad !== "todas"
  ) {
    params.append(
      "prioridad",
      filters.prioridad
    );
  }

  // Consultamos los indicadores principales del Dashboard
 // aplicando los filtros seleccionados por el usuario.
  const response = await fetch(
    `${API_URL}/dashboard?${params}`
  );
  return response.json();
};

// Obtenemos la información necesaria para construir
// la línea de tiempo del Dashboard.
export const getTimelineData = async (
  filters?: {
    fechaInicio: string;
    fechaFin: string;
    prioridad: string;
  }
) => {
  const params = new URLSearchParams();
  if (filters?.fechaInicio) {
    params.append(
      "fecha_inicio",
      filters.fechaInicio
    );
  }
  if (filters?.fechaFin) {
    params.append(
      "fecha_fin",
      filters.fechaFin
    );
  }
  if (
    filters?.prioridad &&
    filters.prioridad !== "todas"
  ) {
    params.append(
      "prioridad",
      filters.prioridad
    );
  }
  const response = await fetch(
    `${API_URL}/dashboard/timeline?${params}`
  );
  return response.json();
};

// Recuperamos la distribución de sentimientos
// según los filtros aplicados.
export const getSentimentData = async (
  filters?: {
    fechaInicio: string;
    fechaFin: string;
    prioridad: string;
  }
) => {
  const params = new URLSearchParams();
  if (filters?.fechaInicio) {
    params.append(
      "fecha_inicio",
      filters.fechaInicio
    );
  }
  if (filters?.fechaFin) {
    params.append(
      "fecha_fin",
      filters.fechaFin
    );
  }
  if (
    filters?.prioridad &&
    filters.prioridad !== "todas"
  ) {
    params.append(
      "prioridad",
      filters.prioridad
    );
  }
  const response = await fetch(
    `${API_URL}/dashboard/sentiments?${params}`
  );
  return response.json();
};

// Consultamos el resumen general de la información
// que se mostrará en el Dashboard.
export const getSummaryData = async (
  filters?: {
    fechaInicio: string;
    fechaFin: string;
    prioridad: string;
  }
) => {
  const params = new URLSearchParams();
  if (filters?.fechaInicio) {
    params.append(
      "fecha_inicio",
      filters.fechaInicio
    );
  }
  if (filters?.fechaFin) {
    params.append(
      "fecha_fin",
      filters.fechaFin
    );
  }
  if (
    filters?.prioridad &&
    filters.prioridad !== "todas"
  ) {
    params.append(
      "prioridad",
      filters.prioridad
    );
  }
  const response = await fetch(
    `${API_URL}/dashboard/summary?${params}`
  );
  return response.json();
};

// Obtenemos las alertas generadas por el sistema
// según los criterios seleccionados.
export const getAlertsData = async (
  filters?: {
    fechaInicio: string;
    fechaFin: string;
    prioridad: string;
  }
) => {
  const params = new URLSearchParams();
  if (filters?.fechaInicio) {
    params.append(
      "fecha_inicio",
      filters.fechaInicio
    );
  }
  if (filters?.fechaFin) {
    params.append(
      "fecha_fin",
      filters.fechaFin
    );
  }
  if (
    filters?.prioridad &&
    filters.prioridad !== "todas"
  ) {
    params.append(
      "prioridad",
      filters.prioridad
    );
  }
  const response = await fetch(
    `${API_URL}/dashboard/alerts?${params}`
  );

  return response.json();

};