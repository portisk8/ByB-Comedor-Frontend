import { Button, Modal, Card, Col, Row } from 'antd';
import React, { useState } from 'react';
import { UserAddOutlined } from "@ant-design/icons";
import FormularioTutor from "../Tutores/FormularioTutor"



const ModalTutor = () => {
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
  
  <Card  onClick={showModal} bordered={false} className='btn-home'>
        
        <h1 style={{color: 'white'}}><UserAddOutlined style={{ fontSize: '20px' }} /> Agregar Tutor</h1>
        </Card>
     
      
      <Modal title="Formulario Tutor" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <FormularioTutor/>

        
      </Modal>

      
    </>
  );
};

export default ModalTutor;