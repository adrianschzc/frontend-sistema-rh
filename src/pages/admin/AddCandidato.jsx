import { useForm } from "react-hook-form";
import { useVacantes } from "../../context/vacantesContext";
import { useEffect } from "react";

function AddCandidato() {
  const {
    handleSubmit,
    register,
    formState: { errors } 
  } = useForm();
  const onSubmit = handleSubmit((data) => {
    // signin(data);
    console.log(data);
  });
  return (
    <div className="flex justify-center">
      <div className="bg-secundary-100 p-4 w-[700px]">
        <div className="p-4 rounded-lg ">
          <h1 className="font-semibold uppercase tracking-[5px] mb-4">
            Agregar candidato
          </h1>
        </div>
        <form className="grid grid-cols-2 gap-4" onSubmit={onSubmit}>
          {/* Nombre */}
          <div className="col-span-2">
            <input
              {...register("Nombre", { required: true })}
              type="text"
              className="py-3 px-8  bg-secundary-900 w-full rounded-lg outline-none"
              placeholder="Nombre"
            />
          </div>
          {/* Apellido_Paterno */}
          <div>
            <input
              {...register("Apellido_Paterno", { required: true })}
              type="text"
              className="py-3 px-8  bg-secundary-900 w-full rounded-lg outline-none"
              placeholder="Apellido_Paterno"
            />
          </div>
          {/* Apellido_Materno */}
          <div>
            <input
              {...register("Apellido_Materno", { required: true })}
              type="text"
              className="py-3 px-8  bg-secundary-900 w-full rounded-lg outline-none"
              placeholder="Apellido_Materno"
            />
          </div>
          {/* GENERO */}
          <div>
            <select
              {...register("Genero", { required: true })}
              type="text"
              className="py-3 px-8  bg-secundary-900 w-full rounded-lg outline-none"
            >
              <option value="">Genero</option>
              <option value="MASCULINO">MASCULINO</option>
              <option value="FEMENINO">FEMENINO</option>
            </select>
          </div>
          {/* Correo */}
          <div>
            <input
              {...register("correo", { required: true })}
              type="email"
              className="py-3 px-8  bg-secundary-900 w-full rounded-lg outline-none"
              placeholder="E-mail"
            />
          </div>
          {/* Numero_Personal */}
          <div>
            <input
              {...register("Telefono", { required: true })}
              type="number"
              className="py-3 px-8  bg-secundary-900 w-full rounded-lg outline-none"
              placeholder="Celular"
            />
          </div>
          {/* Numero whatsapp */}
          <div>
            <input
              {...register("Celular", { required: true })}
              type="number"
              className="py-3 px-8  bg-secundary-900 w-full rounded-lg outline-none"
              placeholder="Celular Whatsapp"
            />
          </div>
          {/* estadoCivil */}
          <div>
            <select
              {...register("estadoCivil", { required: true })}
              type="text"
              className="py-3 px-8  bg-secundary-900 w-full rounded-lg outline-none"
            >
              <option value="">Estado Civil</option>
              <option value="CASADO">CASADO</option>
              <option value="SOLTERO">SOLTERO</option>
              <option value="UNION LIBRE">UNION LIBRE</option>
              <option value="DIVORCIADO">DIVORCIADO</option>
              <option value="VIUDO">VIUDO</option>
            </select>
          </div>
          {/* Profesion */}
          <div>
            <input
              {...register("Profesion", { required: true })}
              type="text"
              className="py-3 px-8  bg-secundary-900 w-full rounded-lg outline-none"
              placeholder="Profesión"
            />
          </div>
          {/* Fuente_Reclutamiento */}
          <div className="col-span-2">
            <select
              {...register("Fuente_Reclutamiento", { required: true })}
              type="text"
              className="py-3 px-8  bg-secundary-900 w-full rounded-lg outline-none"
            >
              <option value="">Fuente de reclutamiento</option>
              <option value="OCC">OCC</option>
              <option value="FACEBOOK">FACEBOOK</option>
              <option value="INDEED">INDEED</option>
              <option value="LINKEDIN">LINKEDIN</option>
              <option value="PERIODICO">PERIODICO</option>
              <option value="REFERIDO">REFERIDO</option>
              <option value="TALENTECA">TALENTECA</option>
              <option value="VOLANTERO">VOLANTERO</option>
            </select>
          </div>
          {/* EstatusRH*/}
          <div className="col-span-2">
            <select
              {...register("EstatusRH", { required: true })}
              type="text"
              className="py-3 px-8  bg-secundary-900 w-full rounded-lg outline-none"
            >
              <option value="">Estatus</option>
              <option value="ENTREVISTA">ENTREVISTA</option>
              <option value="RECHAZADO">RECHAZADO</option>
              <option value="BUZON">BUZÓN</option>
            </select>
          </div>
          <button
            className="col-span-2 py-3 pl-8 pr-4 bg-primary hover:bg-blue-500 transition-colors w-full rounded-lg outline-none text-white uppercase font-bold"
            type="submit"
          >
            Crear Candidato
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddCandidato;
