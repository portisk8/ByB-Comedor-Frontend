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
        const url = "http://localhost:4000/infantes";
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        setData(resultado);
      } catch (error) {
        console.log(error);
      }
    };
    obtenerTutores();
  }, []);

  const eliminar = async (id) => {
    try {
      const url = `http://localhost:4000/infantes/${id}`;
      const respuesta = await fetch(url, {
        method: "DELETE",
      });
      const resultado = await respuesta.json();
      setData(resultado);
    } catch (error) {
      console.log(error);
    }
  };

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
          <Button type="danger" onClick={() => eliminar(record.id)}>
            Eliminar
          </Button>
        </Space>
      ),
    },
  ];

  const dataSource = Data.map((item) => ({
    id: item.id,
    fecha: item.diagnostico[0].fecha,
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
