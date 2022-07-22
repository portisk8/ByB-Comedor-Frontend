import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FormularioInfante from '../../components/Infantes/FormularioInfante'

const EditarInfoInfante = () => {


    
  return (
    <>
    <h1>Cargar Nuevos Datos </h1>

    <FormularioInfante/>
    </>
  )
}

export default EditarInfoInfante