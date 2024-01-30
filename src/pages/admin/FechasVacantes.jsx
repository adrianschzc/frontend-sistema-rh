import { useEffect } from "react";
import { useVacantes } from "../../context/vacantesContext";
import CardFechaVacante from "../../components/CardFechaVacante";


function FechasVacantes({ vacante }) {
  const { fechasVacantes, getFechasVacantes } = useVacantes();
  useEffect(() => {
    async function loadFechasVacantes() {
      getFechasVacantes(vacante.idVacante);
    }
    loadFechasVacantes();
  }, []);
  return (
    <div className="p-4">
      <div>
        <h1 className="font-semibold uppercase tracking-[5px] mb-4">
          Fechas Asignadas
        </h1>
        <div>
          {fechasVacantes.map((fechaVacante) => (
            <CardFechaVacante fechaVacante={fechaVacante} key={fechaVacante.idAsignacion} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FechasVacantes;
