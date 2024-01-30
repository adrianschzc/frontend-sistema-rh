import { useForm } from "react-hook-form";
import { RiSearchLine } from "react-icons/ri";
import { useVacantes } from "../../context/vacantesContext";
import { useEffect } from "react";
import CardVacanteByDay from "../../components/CardVacantesByDay";
import { fechaFormateadaHoy } from "../../logic/filterVacantes";
import { filtrarVacanteDias } from "../../logic/filterVacantes";

function VacantesByDay() {
  const { register, watch } = useForm();
  const { vacantesDias, getVacantesDias } = useVacantes();
  useEffect(() => {
    async function loadVacantes() {
      getVacantesDias();
    }
    loadVacantes();
  }, []);
  return (
    <div className="">
      {/* Filters */}

      <div className="grid grid-cols-6 gap-4 items-center mb-4">
        <form className="col-span-4">
          <div className="relative">
            <RiSearchLine className="absolute left-2 top-3 text-gray-400" />
            <input
              {...register("Puesto")}
              type="text"
              placeholder="Buscar puesto"
              className="bg-secundary-100 w-full outline-none py-2 pl-8 pr-4 rounded-lg"
            />
          </div>
        </form>
        <form className="col-span-1">
          <div className="relative flex gap-4 items-center">
            <label className="absolute -top-4 left-2 text-xs">De: </label>
            <input
              {...register("Fecha_1")}
              type="date"
              className="bg-secundary-100 w-full outline-none py-2 pl-3 pr-2 rounded-lg text-sm"
              defaultValue={fechaFormateadaHoy()}
            />
          </div>
        </form>
        <form className="col-span-1">
          <div className="relative flex gap-4 items-center">
            <label className="absolute -top-4 left-2 text-xs">Hasta:</label>
            <input
              {...register("Fecha_2")}
              type="date"
              className="bg-secundary-100 w-full outline-none py-2 pl-3 pr-2 rounded-lg text-sm"
              defaultValue={fechaFormateadaHoy()}
            />
          </div>
        </form>
      </div>
      <div className="bg-secundary-100 p-4 rounded-lg">
        <div className="flex justify-between p-2">
          <h1 className="font-semibold uppercase tracking-[5px] mb-8">
            Vacantes por Dia
          </h1>
          <span className="text-primary text-sm">
            {filtrarVacanteDias(vacantesDias, watch).length +
              " " +
              "Resultados"}
          </span>
        </div>
        <div>
          {filtrarVacanteDias(vacantesDias, watch).map((vacante) => (
            <CardVacanteByDay key={vacante.idAsignacion} vacante={vacante} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default VacantesByDay;
