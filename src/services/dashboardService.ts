const API_URL = "http://127.0.0.1:5000";

export const getDashboardData = async (
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
    `${API_URL}/dashboard?${params}`
  );

  return response.json();
};

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