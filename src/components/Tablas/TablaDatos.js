import { Modal, Table, Button, Space } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Grafico from "../Graficos/Grafico";
import ModalTabla from "../ModalTabla";

const TablaDatos = () => {
  const [Data, setData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const obtenerTutores = async () => {
      try {
<<<<<<< HEAD
        const url = "https://fakeapi-json.herokuapp.com/infantes";
=======
        const url = "http://localhost:4000/infantes";
>>>>>>> eb79f3364b0833823cf7ce7c95b77d55ea086ccb
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        setData(resultado);
      } catch (error) {
        console.log(error);
      }
    };
    obtenerTutores();
  }, []);
<<<<<<< HEAD
 
  const eliminar = async (id) => {
    try {
      const url = `https://fakeapi-json.herokuapp.com/infantes/${id}`;
=======
  //funcion eliminar
  const eliminar = async (id) => {
    try {
      const url = `http://localhost:4000/infantes/${id}`;
>>>>>>> eb79f3364b0833823cf7ce7c95b77d55ea086ccb
      const respuesta = await fetch(url, {
        method: "DELETE",
      });
      const resultado = await respuesta.json();
      setData(resultado);
    } catch (error) {
      console.log(error);
    }
<<<<<<< HEAD
  };


=======
  }
  //funcion editar
  const editar = async (id) => {
    try {
      const url = `http://localhost:4000/infantes/${id}`;
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      setData(resultado);
    } catch (error) {
      console.log(error);
    }
  }
  
>>>>>>> eb79f3364b0833823cf7ce7c95b77d55ea086ccb

  const columns = [
    {
      title: "Fecha de Carga",
      dataIndex: "fecha",
      key: "fecha",
    },
    {
      title: "Nombre y Apellido",
      dataIndex: "nombre",
      key: "nombre",
    },
    {
      title: "DNI",
      dataIndex: "dni",
      key: "dni",
    },
    {
      title: "Tutor",
      dataIndex: "tutor",
      key: "tutor",
    },
    {
      title: "Acciones",
      dataIndex: "acciones",
      key: "acciones",
      render: (_, record) => (
        <Space size="middle">
          <Button
            onClick={() => navigate(`infantes/${record.id}`)}
            type="primary"
          >
            Ver Mas informacion
          </Button>
<<<<<<< HEAD

=======
          //boton eliminar
>>>>>>> eb79f3364b0833823cf7ce7c95b77d55ea086ccb
          <Button type="danger" onClick={() => eliminar(record.id)}>
            Eliminar
          </Button>

<<<<<<< HEAD
          


          
=======

         
>>>>>>> eb79f3364b0833823cf7ce7c95b77d55ea086ccb
        </Space>
      ),
    },
  ];

  const dataSource = Data.map((item) => ({
    id: item.id,
<<<<<<< HEAD
    fecha: item.diagnostico[0].fecha,
=======
    fecha: item.fechaCarga,
>>>>>>> eb79f3364b0833823cf7ce7c95b77d55ea086ccb
    nombre: `${item.nombre} ${item.apellido}`,
    dni: item.dni,
    tutor: item.tutor,
  }));

  return (
    <div>
      <h4>Middle size table</h4>
      <Table columns={columns} dataSource={dataSource} size="large" />
    </div>
  );
};

export default TablaDatos;
