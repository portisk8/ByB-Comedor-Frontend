import {
  Button,
  Col,
  DatePicker,
  Divider,
  Form,
  Input,
  InputNumber,
  message,
  Modal,
  Row,
  Select,
} from "antd";
import dayjs from "dayjs";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {
  documentoTipoListarService,
  sexoTipoListarService,
} from "../../../services/comunService";
import { personaGuardarService } from "../../../services/personaService";

function TutorFormModal({ personaId, onClose }) {
  const [loading, setLoading] = useState(false);
  const [persona, setPersona] = useState();
  const [documentoTipoList, setDocumentoTipoList] = useState([]);
  const [sexoTipoList, setSexoTipoList] = useState([]);
  const [showFechaNacimiento, setShowFechaNacimiento] = useState(true);

  const user = JSON.parse(localStorage.getItem("user"));
  const [form] = Form.useForm();

  const sexoTipoListar = async () => {
    const response = await sexoTipoListarService();
    if (response.data) setSexoTipoList(response.data);
  };
  const documentoTipoListar = async () => {
    const response = await documentoTipoListarService();
    if (response.data) setDocumentoTipoList(response.data);
  };

  const init = async () => {
    setLoading(true);
    await sexoTipoListar();
    await documentoTipoListar();
    setLoading(false);
  };

  useEffect(() => {
    init();
  }, []);

  const handleSubmitForm = async (values) => {
    console.log(values);
    values.comedorId = user.comedorId;
    const response = await personaGuardarService(values);
    if (response.data?.success) {
      message.success(response.data.message);
      onClose(response.data.id);
    } else {
      message.error(response.data.message || "Error");
    }
  };

  const handleValidateFechaNacimiento = (rule, value) => {
    if (!value || value == 0) return Promise.resolve();
    const actual = dayjs();
    const edad = actual.diff(value, "year");

    try {
      if (edad < 18) {
        throw new Error("La persona debe ser mayor de 18 años.");
      } else {
        Promise.resolve();
      }
    } catch (err) {
      return Promise.reject(err);
    }
  };
  const handleValidateEdad = (rule, value) => {
    if (!value || value == 0) return Promise.resolve();

    try {
      if (value < 18) {
        throw new Error("La persona debe ser mayor de 18 años.");
      } else {
        Promise.resolve();
      }
    } catch (err) {
      return Promise.reject(err);
    }
  };

  return (
    <Modal
      open={true}
      title={
        <div>
          Tutor
          <Divider style={{ marginTop: 10, marginBottom: 5 }} />
        </div>
      }
      onCancel={() => onClose()}
      footer={[
        <Button onClick={() => onClose()}>Cancelar</Button>,
        <Button type="primary" onClick={form.submit}>
          Guardar
        </Button>,
      ]}
    >
      <Form form={form} onFinish={handleSubmitForm} layout="vertical">
        <Row gutter={16}>
          <Col xs={24} lg={12}>
            <Form.Item
              label={"Nombre"}
              name={"nombre"}
              rules={[{ required: true, message: "Campo requerido" }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col xs={24} lg={12}>
            <Form.Item label={"Apellido"} name={"apellido"}>
              <Input />
            </Form.Item>
          </Col>
          <Col xs={24} lg={12}>
            <Form.Item
              label={"Documento"}
              name={"documentoTipoId"}
              rules={[{ required: true, message: "Campo requerido" }]}
            >
              <Select placeholder="Seleccione">
                {documentoTipoList.map((item, ix) => (
                  <Select.Option
                    key={`documentoTipoId-${item.documentoTipoId}`}
                    value={item.documentoTipoId}
                  >
                    {item.descripcion}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
          <Col xs={24} lg={12}>
            <Form.Item
              label={"Número"}
              name={"documento"}
              rules={[{ required: true, message: "Campo requerido" }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col xs={24} lg={12}>
            <Form.Item
              label={"Sexo"}
              name={"sexoTipoId"}
              rules={[{ required: true, message: "Campo requerido" }]}
            >
              <Select placeholder="Seleccione">
                {sexoTipoList.map((item, ix) => (
                  <Select.Option
                    key={`sexoTipoId-${item.sexoTipoId}`}
                    value={item.sexoTipoId}
                  >
                    {item.descripcion}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
          <Col xs={24} lg={12}>
            {showFechaNacimiento && (
              <Form.Item
                label={"Fecha de Nacimiento"}
                name={"fechaNacimiento"}
                rules={[
                  { required: showFechaNacimiento, message: "Campo requerido" },
                  {
                    validator: async (rule, value) =>
                      handleValidateFechaNacimiento(rule, value),
                  },
                ]}
              >
                <DatePicker style={{ width: "100%" }} />
              </Form.Item>
            )}
            {!showFechaNacimiento && (
              <Form.Item
                label={"Edad"}
                name={"edad"}
                rules={[
                  {
                    required: !showFechaNacimiento,
                    message: "Campo requerido",
                  },
                  {
                    validator: async (rule, value) =>
                      handleValidateEdad(rule, value),
                  },
                ]}
              >
                <InputNumber
                  controls={false}
                  min={0}
                  style={{ width: "100%" }}
                />
              </Form.Item>
            )}

            <div style={{ marginTop: -20, textAlign: "right", width: "100%" }}>
              <a onClick={() => setShowFechaNacimiento(!showFechaNacimiento)}>
                {showFechaNacimiento ? "Edad" : "Fecha de Nacimiento"}
              </a>
            </div>
          </Col>
          <Col xs={24} lg={12}>
            <Form.Item label={"Dirección"} name={"direccionCalle"}>
              <Input />
            </Form.Item>
          </Col>
          <Col xs={24} lg={12}>
            <Form.Item label={"Teléfono"} name={"telefonoNumero"}>
              <Input />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
}

export default TutorFormModal;
