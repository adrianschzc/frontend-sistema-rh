import { useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";
import { useVacantes } from "../../context/vacantesContext";
import { useEffect } from "react";
import { filtrarOpciones } from "../../logic/filterUtils.js";
import dayjs from "dayjs";

function AddVacante() {
  const { registrosPatronales, getRegistrosPatronales, getVacantesById } =
    useVacantes();
  const {
    handleSubmit,
    setValue,
    register,
    formState: { errors },
    watch,
  } = useForm();
  const onSubmit = handleSubmit((data) => {
    // signin(data);
    console.log(data);
  });
  const params = useParams();
  useEffect(() => {
    async function loadRegistros() {
      if (params.id) {
        const vacante = await getVacantesById(params.id);

        setValue(
          "Fecha_Vacante",
          vacante.Fecha_Vacante
            ? dayjs(vacante.Fecha_Vacante).format("YYYY-MM-DD")
            : ""
        );
        setValue("Reclutador_Asignado", vacante.Reclutador_Asignado);
        setValue("Tipo_Contratacion", vacante.Tipo_Contratacion);
        setValue("Horario", vacante.Horario);
        setValue("Marca", vacante.Marca);
        setValue("Sucursal_Departamento", vacante.Sucursal_Departamento);
        setValue("Zona_Direccion", vacante.Zona_Direccion);
        setValue("Puesto", vacante.Puesto);
        setValue("lugarTrabajo", vacante.lugarTrabajo);
        setValue("Razon_Social", vacante.Razon_Social);
        setValue("tipoSueldo", vacante.tipoSueldo);
        setValue("Ciudad", vacante.Ciudad);
        setValue("Estado", vacante.Estado);
        setValue("JefeInmediato", vacante.JefeInmediato);
        setValue("Modalidad", vacante.Modalidad);
        setValue("frecuenciaPago", vacante.frecuenciaPago);
        setValue("Sueldo", vacante.Sueldo);
        setValue("Estatus_Proceso", vacante.Estatus_Proceso);
      }
      await getRegistrosPatronales();
    }
    loadRegistros();
  }, []);
  const marcasUnicas = [
    ...new Set(registrosPatronales.map((marca) => marca.Marca)),
  ];
  const {
    sucursalesFiltradas,
    zonaDireccion,
    Puesto,
    lugarTrabajo,
    razonSocial,
    tipoSueldo,
    Ciudad,
    Estado,
  } = filtrarOpciones(registrosPatronales, watch);

  return (
    <div className="flex justify-center">
      <div className="bg-secundary-100 p-4 w-[700px]">
        <div className="p-4">
          <h1 className="font-semibold uppercase tracking-[5px] mb-4">
            Agregar vacante
          </h1>
        </div>
        <form className="grid grid-cols-2 gap-4" onSubmit={onSubmit}>
          {/* Fecha_Vacante */}
          <div>
            <input
              {...register("Fecha_Vacante", { required: true })}
              type="date"
              className="py-3 px-8  bg-secundary-900 w-full rounded-lg outline-none"
            />
          </div>
          {/* REclutador_Asignado */}
          <div>
            <select
              {...register("Reclutador_Asignado", { required: true })}
              type="text"
              className="py-3 px-8  bg-secundary-900 w-full rounded-lg outline-none"
            >
              <option value="">Reclutador_Asignado</option>
              <option value="Adrian Sanchez">Adrian Sanchez</option>
            </select>
          </div>
          {/* Tipo_Contratacion */}
          <div>
            <select
              {...register("Tipo_Contratacion", { required: true })}
              type="text"
              className="py-3 px-8  bg-secundary-900 w-full rounded-lg outline-none"
            >
              <option value="">Tipo_Contratacion</option>
              <option value="REPOSICION DE PERSONAL">
                REPOSICION DE PERSONAL
              </option>
              <option value="NUEVA CREACION">NUEVA CREACION</option>
              <option value="VACANTE PROYECTADA">VACANTE PROYECTADA</option>
            </select>
          </div>
          {/* Horario */}
          <div>
            <select
              {...register("Horario", { required: true })}
              type="text"
              className="py-3 px-8  bg-secundary-900 w-full rounded-lg outline-none"
            >
              <option value="">Horario</option>
              <option value="LUNES A VIERNES DE 08:30 AM A 18:30 PM SABADOS 09:00 AM A 14:00 PM">
                LUNES A VIERNES DE 08:30 AM A 18:30 PM SABADOS 09:00 AM A 14:00
                PM
              </option>
              <option value="LUNES A VIERNES DE 09:00 AM A 18:00 PM">
                LUNES A VIERNES DE 09:00 AM A 18:00 PM
              </option>
              <option
                value="LUNES A VIERNES DE 09:00 AM A 18:00 PM SABADOS 09:00 AM A 14:00 PM
              ROTATIVO"
              >
                LUNES A VIERNES DE 09:00 AM A 18:00 PM SABADOS 09:00 AM A 14:00
                PM ROTATIVO
              </option>
            </select>
          </div>
          {/* Marca */}
          <div className="col-span-2">
            <select
              {...register("Marca", { required: true })}
              type="text"
              className="py-3 px-8  bg-secundary-900 w-full rounded-lg outline-none"
            >
              <option value="">Marca</option>
              {marcasUnicas.map((marca, index) => (
                <option key={index} value={marca}>
                  {marca}
                </option>
              ))}
            </select>
          </div>
          {/* Sucursal_Departamento */}
          <div className="col-span-2">
            <select
              {...register("Sucursal_Departamento", { required: true })}
              type="text"
              className="py-3 px-8  bg-secundary-900 w-full rounded-lg outline-none"
            >
              <option value="">Sucursal_Departamento</option>
              {[
                ...new Set(
                  sucursalesFiltradas.map(
                    (registroPatronal) => registroPatronal.sucursalDepartamento
                  )
                ),
              ].map((registroPatronal, index) => (
                <option key={index} value={registroPatronal}>
                  {registroPatronal}
                </option>
              ))}
            </select>
          </div>
          {/* Zona_Direccion */}
          <div className="col-span-2">
            <select
              {...register("Zona_Direccion", { required: true })}
              type="text"
              className="py-3 px-8  bg-secundary-900 w-full rounded-lg outline-none"
            >
              <option value="">Zona_Direccion</option>
              {[
                ...new Set(
                  zonaDireccion.map(
                    (registroPatronal) => registroPatronal.Direccion
                  )
                ),
              ].map((registroPatronal, index) => (
                <option key={index} value={registroPatronal}>
                  {registroPatronal}
                </option>
              ))}
            </select>
          </div>
          {/* Puesto */}
          <div className="col-span-2">
            <select
              {...register("Puesto", { required: true })}
              type="text"
              className="py-3 px-8  bg-secundary-900 w-full rounded-lg outline-none"
            >
              <option value="">Puesto</option>
              {[
                ...new Set(
                  Puesto.map((registroPatronal) => registroPatronal.Puesto)
                ),
              ].map((registroPatronal, index) => (
                <option key={index} value={registroPatronal}>
                  {registroPatronal}
                </option>
              ))}
            </select>
          </div>
          {/* lugarTrabajo*/}
          <div className="col-span-2">
            <select
              {...register("lugarTrabajo", { required: true })}
              type="text"
              className="py-3 px-8  bg-secundary-900 w-full rounded-lg outline-none"
            >
              <option value="">lugarTrabajo</option>
              {[
                ...new Set(
                  lugarTrabajo.map(
                    (registroPatronal) => registroPatronal.lugarTrabajo
                  )
                ),
              ].map((registroPatronal, index) => (
                <option key={index} value={registroPatronal}>
                  {registroPatronal}
                </option>
              ))}
            </select>
          </div>
          {/* Razon_Social*/}
          <div className="col-span-2">
            <select
              {...register("Razon_Social", { required: true })}
              type="text"
              className="py-3 px-8  bg-secundary-900 w-full rounded-lg outline-none"
            >
              <option value="">Razon_Social</option>
              {[
                ...new Set(
                  razonSocial.map(
                    (registroPatronal) => registroPatronal.razonSocial
                  )
                ),
              ].map((registroPatronal, index) => (
                <option key={index} value={registroPatronal}>
                  {registroPatronal}
                </option>
              ))}
            </select>
          </div>
          {/* tipoSueldo*/}
          <div className="col-span-2">
            <select
              {...register("tipoSueldo", { required: true })}
              type="text"
              className="py-3 px-8  bg-secundary-900 w-full rounded-lg outline-none"
            >
              <option value="">tipoSueldo</option>
              {[
                ...new Set(
                  tipoSueldo.map(
                    (registroPatronal) => registroPatronal.tipoSueldo
                  )
                ),
              ].map((registroPatronal, index) => (
                <option key={index} value={registroPatronal}>
                  {registroPatronal}
                </option>
              ))}
            </select>
          </div>
          {/* Ciudad*/}
          <div className="col-span-2">
            <select
              {...register("Ciudad", { required: true })}
              type="text"
              className="py-3 px-8  bg-secundary-900 w-full rounded-lg outline-none"
            >
              <option value="">Ciudad</option>
              {[
                ...new Set(
                  Ciudad.map((registroPatronal) => registroPatronal.Ciudad)
                ),
              ].map((registroPatronal, index) => (
                <option key={index} value={registroPatronal}>
                  {registroPatronal}
                </option>
              ))}
            </select>
          </div>
          {/*Estado*/}
          <div className="col-span-2">
            <select
              {...register("Estado", { required: true })}
              type="text"
              className="py-3 px-8  bg-secundary-900 w-full rounded-lg outline-none"
            >
              <option value="">Estado</option>
              {[
                ...new Set(
                  Estado.map((registroPatronal) => registroPatronal.Estado)
                ),
              ].map((registroPatronal, index) => (
                <option key={index} value={registroPatronal}>
                  {registroPatronal}
                </option>
              ))}
            </select>
          </div>
          {/*JefeInmediato*/}
          <div>
            <select
              {...register("JefeInmediato", { required: true })}
              type="text"
              className="py-3 px-8  bg-secundary-900 w-full rounded-lg outline-none"
            >
              <option value="">JefeInmediato</option>
              <option value="SHEILA BANDA MUÑOZ">SHEILA BANDA MUÑOZ</option>
            </select>
          </div>
          {/*Modalidad*/}
          <div>
            <select
              {...register("Modalidad", { required: true })}
              type="text"
              className="py-3 px-8  bg-secundary-900 w-full rounded-lg outline-none"
            >
              <option value="">Modalidad</option>
              <option value="HIBRIDO">HIBRIDO</option>
              <option value="PRESENCIAL">PRESENCIAL</option>
              <option value="HOME OFFICE">HOME OFFICE</option>
            </select>
          </div>
          {/*frecuenciaPago*/}
          <div>
            <select
              {...register("frecuenciaPago", { required: true })}
              type="text"
              className="py-3 px-8  bg-secundary-900 w-full rounded-lg outline-none"
            >
              <option value="">frecuenciaPago</option>
              <option value="QUINCENAL">QUINCENAL</option>
              <option value="SEMANAL">SEMANAL</option>
            </select>
          </div>
          {/*Sueldo*/}
          <div>
            <input
              {...register("Sueldo", { required: true })}
              type="number"
              className="py-3 px-8  bg-secundary-900 w-full rounded-lg outline-none"
              placeholder="Sueldo"
            />
          </div>
          {/*Estatus_Proceso*/}
          <div className="col-span-2">
            <select
              {...register("Estatus_Proceso", { required: true })}
              type="text"
              className="py-3 px-8  bg-secundary-900 w-full rounded-lg outline-none"
            >
              <option value="">Estatus</option>
              <option value="SIN CANDIDATOS">SIN CANDIDATOS</option>
              <option value="ENTREVISTA RH">ENTREVISTA RH</option>
              <option value="ENTREVISTA CLIENTE">ENTREVISTA CLIENTE</option>
              <option value="EN PROCESO">EN PROCESO</option>
              <option value="POR INGRESAR">POR INGRESAR</option>
              <option value="CANCELADA">CANCELADA</option>
            </select>
          </div>
          <button
            className="col-span-2 py-3 pl-8 pr-4 bg-primary hover:bg-blue-500 transition-colors w-full rounded-lg outline-none text-white uppercase font-bold"
            type="submit"
          >
            Crear Vacante
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddVacante;
