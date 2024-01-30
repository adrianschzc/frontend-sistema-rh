import { useParams } from "react-router-dom";
import { useCandidatos } from "../../context/candidatosContext";
import { useEffect,useState } from "react";
import Spinner from "../../components/Spinner/Spinner";
import CardCandidatoByIdVacante from "../../components/CardCandidatoByIdVacante";


function CandidatosByIdVacante() {
  const params = useParams();
  const { candidatos, getCandidatosByIdVacante } = useCandidatos();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function loadCandidatos() {
      if (params.id) {
        setIsLoading(true);
        getCandidatosByIdVacante(params.id);
        setIsLoading(false);
      }
    }
    loadCandidatos();
  }, []);
  return (
    <div className="bg-secundary-100 p-4">
      <div className="flex justify-between p-4 rounded-lg">
        <h1 className="font-semibold uppercase tracking-[5px] mb-12">
          Candidatos de la Vacante
        </h1>
        <span className="text-primary text-sm">{candidatos.length +" "+ "Resultados"}</span>
      </div>
      {isLoading && (
        <div className="">
          <Spinner />
        </div>
      )}
      <div className="">
        {candidatos.map((candidato) => (
          <CardCandidatoByIdVacante candidato={candidato} key={candidato.idCandidato} />
        ))}
      </div>
    </div>
  );
}
export default CandidatosByIdVacante;
