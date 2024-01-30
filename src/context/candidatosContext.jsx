import { useContext, useState, createContext } from "react";
import { getCandidosByIdVacanteRequest } from "../api/candidatos";

export const CandidatosContext = createContext();

export const useCandidatos = () => {
  const context = useContext(CandidatosContext);
  if (!context) {
    throw new Error("useCandidatos deberia de estar dentro del provider");
  }
  return context;
};

export const CandidatosProvider = ({ children }) => {
  const [candidatos, setCandidatos] = useState([]);

  const getCandidatosByIdVacante = async (id) => {
    try {
      const res = await getCandidosByIdVacanteRequest(id);
      console.log(res);
      setCandidatos(res.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };
  const prueba1 = () => {
    console.log("Probando prop");
  };

  return (
    <CandidatosContext.Provider
      value={{ candidatos, prueba1, getCandidatosByIdVacante }}
    >
      {children}
    </CandidatosContext.Provider>
  );
};
