export const filtrarVacantes = (vacantes, watch) => {
  return vacantes.filter((vacante) => {
    // Verificar si watch("Puesto") está definido y no es nulo
    return watch("Puesto")
      ? vacante.Puesto.includes(watch("Puesto").toUpperCase())
      : true;
  });
};

export const fechaFormateadaHoy = () => {
  return new Date().toISOString().split("T")[0];
};

export const filtrarVacanteDias = (vacante, watch) => {
  return vacante.filter((vacante) => {
    // Verificar si watch("Fecha_1") y watch("Fecha_2") están definidos y no son nulos
    const fechaCondition =
      watch("Fecha_1") &&
      watch("Fecha_2") &&
      vacante.Fecha_Asignacion >= watch("Fecha_1") &&
      vacante.Fecha_Asignacion <= watch("Fecha_2");

    // Verificar si watch("Puesto") está definido y no es nulo
    const puestoCondition = !watch("Puesto")
      ? true
      : vacante.Puesto.includes(watch("Puesto").toUpperCase());

    // Retornar true solo si al menos una de las condiciones se cumple
    return fechaCondition && puestoCondition;
  });
};

export const formatearFechas = (fecha) => {
  const opciones = { day: "2-digit", month: "2-digit", year: "numeric" };
  const fechaFormateada = new Date(fecha).toLocaleDateString(
    undefined,
    opciones
  );
  return fechaFormateada;
};
