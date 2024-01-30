import axios from "./axios";

export const getVacantesRequest = () => axios.get("/vacantes");
export const getRegistrosPatronalesRequest = () =>
  axios.get("/registrospatronales");
export const getFechasVacantesRequest = (id) =>
  axios.get(`/fechasvacantes/${id}`);
export const getVacantesDiasRequest = () => axios.get("/vacantesdias");
export const getVacantesByIdRequest = (id) => axios.get(`/vacantes/${id}`);
