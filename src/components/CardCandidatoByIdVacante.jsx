function CardCandidatoByIdVacante ({candidato}){
return <div className="bg-secundary-900 flex justify-between gap-4 rounded-lg p-4 mb-2">
    <div className="">
    <h1 className="">{candidato.Nombre + " " + candidato.Apellido_Paterno}</h1>
    <span>{candidato.Telefono}</span>
    </div>
    <div className="flex items-center p-4">
        <h3 className="text-xs">{candidato.EstatusRH}</h3>
    </div>
</div>
}
export default CardCandidatoByIdVacante