import React, { useState } from 'react';
import { Button, Col, Form, Input, Row, Select, Space, Table, Tag, Modal } from "antd";
import ComedorFormModal from './ComedorFormModal';
const ModalAgregarComedor = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Agregar comedor
      </Button>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
    <ComedorFormModal/>
      </Modal>
    </>
  );
};
export default ModalAgregarComedor;