import { Button, Modal, Card } from "antd";
import React, { useState } from "react";
import { UsergroupAddOutlined } from "@ant-design/icons";
import FormularioInfante from "./FormularioInfante";
import FormularioTutor from "./FormularioTutor/FormularioTutor";

const ModalInfante = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Card onClick={showModal} bordered={false} className="btn-home">
        <h1 style={{ color: "white" }}>
          <UsergroupAddOutlined style={{ fontSize: "20px" }} /> Agregar
          Infante
        </h1>
      </Card>

      <Modal
        title="Formulario Infante"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <FormularioInfante />
      </Modal>
    </>
  );
};

export default ModalInfante;
