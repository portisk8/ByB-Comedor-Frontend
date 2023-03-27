import {
  Button,
  Col,
  Form,
  Input,
  InputNumber,
  message,
  Modal,
  Row,
} from "antd";
import React from "react";
import { personaHistorialGuardarService } from "../../../services/personaService";

function PersonaHistorialFormModal({ personaId, onClose }) {
  const [form] = Form.useForm();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleSubmitForm = async (values) => {
    console.log(values);
    values.comedorId = user.comedorId;
    values.personaId = personaId;
    const response = await personaHistorialGuardarService(values);
    if (response.data?.success) {
      message.success(response.data.message);
      onClose(true);
    } else {
      message.error(response.data.message || "Error");
    }
  };

  return (
    <Modal
      open={true}
      title="Nuevo diagnóstico"
      onCancel={() => onClose()}
      footer={[
        <Button onClick={() => onClose()}>Cancelar</Button>,
        <Button type="primary" onClick={form.submit}>
          Guardar
        </Button>,
      ]}
    >
      <Form form={form} onFinish={handleSubmitForm} layout={"vertical"}>
        <Row gutter={16}>
          <Col xs={24} md={8}>
            <Form.Item name={"peso"} label="Peso (Kilogramos)">
              <InputNumber min={0} controls={false} />
            </Form.Item>
          </Col>
          <Col xs={24} md={8}>
            <Form.Item name={"altura"} label="Altura (metros)">
              <InputNumber min={0} controls={false} />
            </Form.Item>
          </Col>
          <Col xs={24} md={8}>
            <Form.Item
              name={"cinturaCircunferencia"}
              label="Cintura circinferencia"
            >
              <InputNumber min={0} controls={false} />
            </Form.Item>
          </Col>
          <Col xs={24}>
            <Form.Item name={"diagnostico"} label="Diagnóstico">
              <Input.TextArea rows={8} />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
}

export default PersonaHistorialFormModal;
