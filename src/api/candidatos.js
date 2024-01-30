import axios from "./axios";

export const getCandidosByIdVacanteRequest = (id) =>
  axios.get(`/candidatos/vacante/${id}`);
