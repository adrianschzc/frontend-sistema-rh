import {
  RiFileList2Line,
  RiUserSearchLine,
  RiCalendarTodoLine,
  RiDeleteBin6Line,
  RiPencilLine
} from "react-icons/ri";
import { Link } from "react-router-dom";
import { useVacantes } from "../context/vacantesContext";
import AsignarFechaVacante from "../pages/admin/AsignarFechaVacante";
import FechasVacantes from "../pages/admin/FechasVacantes";
import CardDelete from "./CardDelete";
import { formatearFechas } from "../logic/filterVacantes";

function CardVacante({ vacante }) {
  const { closeModal, checkModalContent } = useVacantes();
  return (
    <div className="flex justify-between items-center gap-4 bg-secundary-900 p-4 rounded-lg mb-2">
      <div className="flex items-center gap-4">
        <h2 className="text-xs">{vacante.idVacante}</h2>
        <div className="flex flex-col gap-1">
          <h1 className="text-md">{vacante.Puesto}</h1>
          <h2 className="text-xs">{vacante.Reclutador_Asignado}</h2>
          <h3 className="text-xs text-primary">
            {vacante.Sucursal_Departamento}
          </h3>
        </div>
      </div>
      {/* Actions */}
      <div className="bg-secundary-100 border border-gray-500">
        <ul className="flex">
          <li className="">
            <Link to={`/vacantes/vacante/${vacante.idVacante}`}>
              <button className="p-3 border border-gray-500 hover:bg-gray-600 hover:text-white text-sm">
                <RiPencilLine />
              </button>
            </Link>
          </li>
          <li className="">
            <Link to={`/vacantes/candidatos/${vacante.idVacante}`}>
              <button className="p-3 border border-gray-500 hover:bg-gray-600 hover:text-white text-sm">
                <RiUserSearchLine />
              </button>
            </Link>
          </li>
          <li>
            <button
              onClick={() => {
                closeModal();
                checkModalContent(<FechasVacantes vacante={vacante} />);
              }}
              className="p-3 border border-gray-500 hover:bg-gray-600 hover:text-white text-sm"
            >
              <RiFileList2Line />
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                closeModal();
                checkModalContent(<AsignarFechaVacante />);
              }}
              className="p-3 border border-gray-500 hover:bg-gray-600 hover:text-white text-sm"
            >
              <RiCalendarTodoLine />
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                closeModal();
                checkModalContent(<CardDelete closeModal={closeModal} />);
              }}
              className="p-3 border border-gray-500 hover:bg-gray-600 hover:text-white text-sm"
            >
              <RiDeleteBin6Line />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CardVacante;
