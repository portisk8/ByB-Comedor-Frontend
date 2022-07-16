import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Card, Space, Row, Col } from "antd";
import TabsGraficos from "../../components/Graficos/TabsGraficos";


const VerInfoInfante = () => {
  const [Infante, setInfante] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const obtenerTutores = async () => {
      try {
        const url = `http://localhost:4000/infantes/${id}`;
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        setInfante(resultado);
      } catch (error) {
        console.log(error);
      }
    };
    obtenerTutores();
  }, []);

  return (
    <>
     
      <Card>
        <h2>{Infante.nombre} {Infante.apellido}</h2>
        <h3>Datos Personales</h3>
        <p>DNI: {Infante.dni}</p>
        <p>Edad: {Infante.edad} años</p>
        <p>Fecha de Nacimiento: {Infante.fechaNac}</p>
        <h3>Datos Antropometricos</h3>
        <p>Peso: 60 Kg</p>
        <p>Altura: 164 CM</p>
        <p>Circunferencia Cintura: 90 CM</p>

        <TabsGraficos/>
      </Card>
      
    </>
  );
};

export default VerInfoInfante;
