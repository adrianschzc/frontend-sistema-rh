import { formatearFechas } from "../logic/filterVacantes";

function CardFechaVacante({ fechaVacante }) {
  return (
    <div className="bg-secundary-900 flex justify-between gap-4 rounded-lg p-4 mb-2">
      <div className="flex items-center">
        <h1 className="">{formatearFechas(fechaVacante.Fecha_Asignacion)}</h1>
      </div>
      <div className="flex items-center p-4">
        <h3 className="text-xs">{fechaVacante.Usuario}</h3>
      </div>
    </div>
  );
}
export default CardFechaVacante;
