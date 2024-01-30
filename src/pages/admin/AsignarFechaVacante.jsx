import { useForm } from "react-hook-form";
import { useVacantes } from "../../context/vacantesContext";

function AsignarFechaVacante() {
  const { closeModal } = useVacantes();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const onSubmit = handleSubmit((data) => {
    // signin(data);
    console.log(data);
    if (!errors.Fecha_Asignacion) closeModal();
  });

  return (
    <div className="p-4">
      <div className=" font-semibold uppercase tracking-[5px] mb-4">
        <h1>Asignar Fecha</h1>
      </div>
      <form onSubmit={onSubmit} className="flex flex-col gap-4">
        <div>
          <input
            {...register("Fecha_Asignacion", { required: true })}
            type="date"
            className="py-3 px-8  bg-secundary-900 w-full rounded-lg outline-none"
          />
        </div>
        <button
          className="col-span-2 py-3 pl-8 pr-4 bg-primary hover:bg-blue-500 transition-colors w-full rounded-lg outline-none text-white uppercase font-bold"
          type="submit"
        >
          Asignar Fecha
        </button>
      </form>
    </div>
  );
}

export default AsignarFechaVacante;
