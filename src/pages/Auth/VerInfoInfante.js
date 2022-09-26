import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Card, Space, Row, Col } from "antd";
import TabsGraficos from "../../components/Graficos/TabsGraficos";
import TablaDatos from "../../components/Tablas/TablaDatos";
import TablaDiagnostico from "../../components/Tablas/TablaDiagnosticos";

const VerInfoInfante = () => {
  const [Infante, setInfante] = useState({});
<<<<<<< HEAD
  const [arrayDatos, setArrayDatos] = useState([]);
=======
>>>>>>> eb79f3364b0833823cf7ce7c95b77d55ea086ccb
  const { id } = useParams();
  useEffect(() => {
    const obtenerTutores = async () => {
      try {
<<<<<<< HEAD
        const url = `https://fakeapi-json.herokuapp.com/infantes/${id}`;
=======
        const url = `http://localhost:4000/infantes/${id}`;
>>>>>>> eb79f3364b0833823cf7ce7c95b77d55ea086ccb
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
        <h2>
          {Infante.nombre} {Infante.apellido}
        </h2>
        <h3>Datos Personales</h3>
        <p>DNI: {Infante.dni}</p>
        <p>Edad: {Infante.edad} años</p>
        <p>Fecha de Nacimiento: {Infante.fechaNac}</p>

        <h3>Datos de Diagnostico</h3>
<<<<<<< HEAD
        <TablaDiagnostico Infante={Infante} arrayDatos={arrayDatos} setArrayDatos={setArrayDatos} />
        <h3>Graficos Percentiles</h3>
        <TabsGraficos arrayDatos={arrayDatos} setArrayDatos={setArrayDatos} />
=======
        <TablaDiagnostico Infante={Infante}/>
        <h3>Graficos Percentiles</h3>
        <TabsGraficos />
>>>>>>> eb79f3364b0833823cf7ce7c95b77d55ea086ccb
      </Card>
    </>
  );
};

export default VerInfoInfante;
