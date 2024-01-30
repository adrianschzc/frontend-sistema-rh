// filterUtils.js
export function filtrarOpciones(registrosPatronales, watch) {
  const sucursalesFiltradas = [
    ...new Set(
      registrosPatronales.filter((opcion) => opcion.Marca === watch("Marca"))
    ),
  ];
  const zonaDireccion = [
    ...new Set(
      sucursalesFiltradas.filter(
        (opcion) =>
          opcion.sucursalDepartamento === watch("Sucursal_Departamento")
      )
    ),
  ];
  const Puesto = [
    ...new Set(
      zonaDireccion.filter(
        (opcion) => opcion.Direccion === watch("Zona_Direccion")
      )
    ),
  ];
  const lugarTrabajo = [
    ...new Set(Puesto.filter((opcion) => opcion.Puesto === watch("Puesto"))),
  ];
  const razonSocial = [
    ...new Set(
      lugarTrabajo.filter(
        (opcion) => opcion.lugarTrabajo === watch("lugarTrabajo")
      )
    ),
  ];
  const tipoSueldo = [
    ...new Set(
      razonSocial.filter(
        (opcion) => opcion.razonSocial === watch("Razon_Social")
      )
    ),
  ];
  const Ciudad = [
    ...new Set(
      tipoSueldo.filter((opcion) => opcion.tipoSueldo === watch("tipoSueldo"))
    ),
  ];
  const Estado = [
    ...new Set(Ciudad.filter((opcion) => opcion.Ciudad === watch("Ciudad"))),
  ];

  return {
    sucursalesFiltradas,
    zonaDireccion,
    Puesto,
    lugarTrabajo,
    razonSocial,
    tipoSueldo,
    Ciudad,
    Estado,
  };
}
