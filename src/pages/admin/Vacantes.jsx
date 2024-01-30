import {
  RiSearchLine,
  RiFolderUserLine,
  RiTrafficLightLine,
} from "react-icons/ri";
import CardVacante from "../../components/CardVacante";
import { useVacantes } from "../../context/vacantesContext";
import { useEffect } from "react";
import Modal from "../../components/Modal";
import { useForm } from "react-hook-form";
import { filtrarVacantes } from "../../logic/filterVacantes";

function Vacantes() {
  const { register, watch } = useForm();

  const { vacantes, getVacantes, modalState, closeModal, modalContent } =
    useVacantes();
  useEffect(() => {
    async function loadVacantes() {
      getVacantes();
    }
    loadVacantes();
  }, []);
  console.log(vacantes)
  return (
    <div className="">
      {/* Filtros */}
      <div className="grid grid-cols-6 gap-4 items-center mb-6">
        <form className="col-span-4">
          <div className="relative">
            <RiSearchLine className="absolute left-2 top-3 text-gray-400" />
            <input
              {...register("Puesto")}
              type="text"
              placeholder="Buscar vacante"
              className="bg-secundary-100 w-full outline-none py-2 pl-8 pr-4 rounded-lg"
            />
          </div>
        </form>
        <form className="col-span-1">
          <div className="relative">
            <RiFolderUserLine className="absolute left-2 top-3 text-gray-400" />
            <select
              {...register("Reclutador_Asignado")}
              type="text"
              className="bg-secundary-100 w-full outline-none py-2 pl-8 pr-4 rounded-lg"
              placeholder="Selecciona reclutadora"
            >
              <option value="">Reclutador</option>
              <option value="YESSICA MACIAS">YESSICA MACIAS</option>
              <option value="IRLANDA CAROLINA">IRLANDA CAROLINA</option>
            </select>
          </div>
        </form>
        <form className="col-span-1">
          <div className="relative">
            <RiTrafficLightLine className="absolute left-2 top-3 text-gray-400" />
            <select
              {...register("Estatus_Proceso")}
              type="text"
              className="bg-secundary-100 w-full outline-none py-2 pl-8 pr-4 rounded-lg"
              placeholder="Selecciona reclutadora"
            >
              <option value="">Estatus</option>
              <option value="SIN CANDIDATOS">SIN CANDIDATOS</option>
              <option value="ENTREVISTA RH">ENTREVISTA RH</option>
              <option value="ENTREVISTA">ENTREVISTA</option>
              <option value="EN PROCESO">EN PROCESO</option>
              <option value="POR INGRESAR">POR INGRESAR</option>
            </select>
          </div>
        </form>
      </div>
      {/* Results */}
      <div className=" bg-secundary-100 p-4 rounded-lg">
        <div className="flex justify-between p-4">
          <h1 className="font-semibold uppercase tracking-[5px] mb-4">
            Vacantes
          </h1>
          <span className="text-primary text-sm">
            {filtrarVacantes(vacantes,watch).length + " " + "Resultados"}
          </span>
        </div>
        {/* Card */}
        <Modal isOpen={modalState} closeModal={closeModal}>
          {/* Contenido específico que quieres mostrar en el modal */}
          {modalContent}
        </Modal>
        {filtrarVacantes(vacantes,watch).map((vacante) => (
            <CardVacante vacante={vacante} key={vacante.idVacante} />
          ))}
      </div>
    </div>
  );
}

export default Vacantes;
