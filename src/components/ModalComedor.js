import { Button, Modal } from "antd";
import React, { useState } from "react";
import ListaComedores from "./ListaComedores";

const ModalComedor = () => {
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
      <Button type="primary" onClick={showModal}>
        Seleccionar Comedor
      </Button>
      <Modal
        title="Seleccionar Comedor"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <ListaComedores />
      </Modal>
    </>
  );
};

export default ModalComedor;
