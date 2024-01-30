import { useContext, useState, createContext, useEffect } from "react";
import {
  getVacantesRequest,
  getRegistrosPatronalesRequest,
  getFechasVacantesRequest,
  getVacantesDiasRequest,
  getVacantesByIdRequest,
} from "../api/vacantes";

export const VacantesContext = createContext();

export const useVacantes = () => {
  const context = useContext(VacantesContext);
  if (!context) {
    throw new Error("useVacantes deberia de estar dentro del provider");
  }
  return context;
};

export const VacantesProvider = ({ children }) => {
  const [vacantes, setVacantes] = useState([]);
  const [registrosPatronales, setRegistrosPatronales] = useState([]);
  const [modalState, setModalState] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [fechasVacantes, setFechasVacantes] = useState([]);
  const [vacantesDias, setVacantesDias] = useState([]);
  const closeModal = () => {
    try {
      setModalState(!modalState);
    } catch (error) {
      console.log(error);
    }
  };
  const checkModalContent = (modalContent = null) => {
    setModalContent(modalContent);
  };
  const getVacantes = async () => {
    try {
      const res = await getVacantesRequest();
      setVacantes(res.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };
  const getVacantesById = async (id) => {
    try {
      const res = await getVacantesByIdRequest(id);
      return res.data;
    } catch (error) {
      console.log(error.response.data);
    }
  };
  const getRegistrosPatronales = async () => {
    try {
      const res = await getRegistrosPatronalesRequest();
      setRegistrosPatronales(res.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };
  const getFechasVacantes = async (id) => {
    try {
      const res = await getFechasVacantesRequest(id);
      setFechasVacantes(res.data);
      console.log(res);
    } catch (error) {
      console.log(error.response.data);
    }
  };
  const getVacantesDias = async () => {
    try {
      const res = await getVacantesDiasRequest();
      setVacantesDias(res.data);
      console.log(res);
    } catch (error) {
      console.log(error.response.data);
    }
  };
  return (
    <VacantesContext.Provider
      value={{
        vacantes,
        registrosPatronales,
        modalState,
        modalContent,
        fechasVacantes,
        vacantesDias,
        getVacantesDias,
        getFechasVacantes,
        checkModalContent,
        closeModal,
        getVacantes,
        getVacantesById,
        getRegistrosPatronales,
      }}
    >
      {children}
    </VacantesContext.Provider>
  );
};
