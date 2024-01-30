import { Link } from "react-router-dom";

function CardVacanteByDay({ vacante }) {
  return (
    <div className="flex justify-between items-center gap-4 bg-secundary-900 p-4 rounded-lg mb-2">
      <div className="col-span-4 flex items-center gap-4">
        <h2 className="text-xs">{vacante.idAsignacion}</h2>
        <div className="flex flex-col gap-1">
          <h1 className="text-md">{vacante.Puesto}</h1>
          <h2 className="text-xs">{vacante.Reclutador_Asignado}</h2>
          <h3 className="text-xs text-primary">{vacante.Sucursal_Departamento}</h3>
        </div>
      </div>
      <div className="relative flex flex-col gap-2 px-2">
        <span className="absolute -top-8 right-2 text-xs hover:text-white">
          <Link
            to={`/vacantesdia/addcandidato/${vacante.idVacante}`}
            className=""
          >
            Postular
          </Link>
        </span>
        <span className="text-end text-sm text-primary">
          {"$ " + vacante.Sueldo}
        </span>
      </div>
    </div>
  );
}

export default CardVacanteByDay;
