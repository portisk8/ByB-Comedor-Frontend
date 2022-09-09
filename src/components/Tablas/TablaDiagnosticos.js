import {
  Space,
  Table,
  Tag,
  Form,
  InputNumber,
  DatePicker,
  Button,
  Modal,
  Input,
} from "antd";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const TablaDiagnosticos = () => {
  const [Datos, setDatos] = useState([]);
  const [DatosDiag, setDatosDiag] = useState([]);
  const { id } = useParams();
  const handleModal = () => {
    setVisible(true);
  };

  const onFinish = async (values) => {
    try {
      console.log(values);
      const url = `http://localhost:4000/infantes/${id}/diagnosticos`;
      const respuesta = await fetch(url, {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const resultado = await respuesta.json();
      console.log(resultado);
    } catch (error) {}
  };

  //obtener los datos de la base de datos
  const obtenerDatos = async () => {
    try {
      const url = `http://localhost:4000/infantes/${id}`;
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      setDatos(resultado);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatosDiagnostico = async () => {
    try {
      const url = `http://localhost:4000/diagnosticos/${id}`;
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      setDatosDiag(resultado);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    obtenerDatosDiagnostico();
  }, []);

  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();

  const columns = [
    {
      title: "Fecha de Medicion",
      dataIndex: "fechaMed",
      key: "fechaMed",
    },
    {
      title: "Peso",
      dataIndex: "peso",
      key: "peso",
    },
    {
      title: "Altura",
      dataIndex: "altura",
      key: "altura",
    },
    {
      title: "IMC",
      dataIndex: "imc",
      key: "imc",
    },
  ];
  const data = [
   {
      key: "1",
      fechaMed: "2020-01-01",
      peso: "50",
      altura: "1.80",
      imc: "50",
    
   }

  ];
  
 
  return (
    <>
      <Space direction="vertical" size={20}>
        <Table columns={columns} dataSource={data} />
      </Space>

      <Button type="link" onClick={() => handleModal()}>
        Ver Informacion
      </Button>
      <Modal
        title="Agregar Diagnostico"
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
      >
        <Form
          form={form}
          name="control-hooks"
          onFinish={onFinish}
          initialValues={{
            nombre: `${Datos.nombre} ${Datos.apellido}`,
            id: `${Datos.id}`,
          }}
        >
          <Form.Item name="id" label="id">
            <Input disabled />
          </Form.Item>
          <Form.Item label="Fecha de Medicion">
            <DatePicker />
          </Form.Item>
          <Form.Item label="Nombre" name="nombre" disabled>
            <Input disabled />
          </Form.Item>
          <Form.Item label="Peso" name="peso">
            <InputNumber />
          </Form.Item>
          <Form.Item label="Altura">
            <InputNumber />
          </Form.Item>
          <Form.Item label="IMC">
            <InputNumber />
          </Form.Item>
          //boton enviar datos
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Enviar
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default TablaDiagnosticos;
