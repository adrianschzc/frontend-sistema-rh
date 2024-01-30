import { useForm } from "react-hook-form";
import { RiSearchLine } from "react-icons/ri";
function Candidatos() {
  const { register, watch } = useForm();
  return (
    <div className="">
      {/* Filters */}

      <div className="grid grid-cols-6 gap-4 items-center mb-4">
        <form className="col-span-4">
          <div className="relative">
            <RiSearchLine className="absolute left-2 top-3 text-gray-400" />
            <input
              {...register("Candidato")}
              type="text"
              placeholder="Buscar candidato"
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
            />
          </div>
        </form>
      </div>
      <div className="bg-secundary-100 p-4 rounded-lg">
        <div className="">
          <h1 className="font-semibold uppercase tracking-[5px] mb-8">
            Candidatos
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Candidatos;
