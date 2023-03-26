import { Button, Modal } from "antd";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Grafico from "./Graficos/Grafico";

const ModalTabla = ({record }) => {
  const [visible, setVisible] = useState(false);
  const navigate=useNavigate()

 

  const handleModal = () => {
    setVisible(true);
    navigate(`/infantes/${record.id}`)
  };


  return (
    <>
      <Button type="link" onClick={() => handleModal()}>
        Ver Informacion
      </Button>
      <Modal
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={1000}
      >
        <h2>Datos Personales</h2>
        <p>Nombre: recor </p>
        <p>DNI: 43343434</p>
        <p>Fecha de Nacimiento: 18 de Junio 1997</p>
        <p>Edad: 24 años</p>
        <h2>Datos Antropometricos</h2>
        <p>Peso: 60 KG</p>
        <p>Altura: 164cm</p>
        <p>Diametro Cintura: 70 CM</p>
        <h2>Grafica</h2>
        <Grafico />
        <Button type="link">Ver Historial del Infante</Button>
      </Modal>
    </>
  );
};

export default ModalTabla;
