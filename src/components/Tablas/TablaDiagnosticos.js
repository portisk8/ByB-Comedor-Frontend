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

const TablaDiagnosticos = ({ arrayDatos, setArrayDatos }) => {
  const dateFormat = 'YYYY-MM-DD'
  const [Datos, setDatos] = useState({});
  
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();
  const { id } = useParams();

  useEffect(() => {
    const obtenerDiagnosticos = async () => {
      try {
        const url = `https://fakeapi-json.herokuapp.com/infantes/${id}`;
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        setDatos(resultado);
        setArrayDatos(resultado.diagnostico);
      } catch (error) {
        console.log(error);
      }
    };
    obtenerDiagnosticos();
  }, [id]);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const onFinish = async (values) => {
    try {
      const url = `https://fakeapi-json.herokuapp.com/infantes/${id}`;
      const respuesta = await fetch(url, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          diagnostico: [
            ...arrayDatos,
            {
              fecha: values.fecha ? values.fecha.format(dateFormat) : null,
              peso: values.peso,
              altura: values.altura,
            },
          ],
        }),
      });
      const resultado = await respuesta.json();
      console.log(resultado);
      setArrayDatos(resultado.diagnostico);
      setVisible(false);
    } catch (error) {
      console.log(error);
    }
  };

  const columns = [
    {
      title: "Fecha",
      dataIndex: "fecha",
      key: "fecha",
    },
    {
      title: "Peso",
      dataIndex: "peso",
      key: "diagnostico",
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

  const dataSource = arrayDatos.map((d) => ({
    key: d.id,
    fecha: d.fecha,
    peso: d.peso,
    altura: d.altura,
    imc: d.peso / ((d.altura * d.altura)/10000),
  }));

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Agregar Diagnostico
      </Button>
      <Table columns={columns} dataSource={dataSource} />
      <Modal
        title="Agregar Diagnostico"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <Form form={form} onFinish={onFinish}>
          <Form.Item
            label="Fecha"
            name="fecha"
            rules={[{ required: true, message: "Ingrese la fecha" }]}
            
          >
            <DatePicker />
          </Form.Item>
          <Form.Item label="Peso" name="peso">
            <InputNumber />
          </Form.Item>
          <Form.Item label="Altura" name="altura">
            <InputNumber />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Agregar
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default TablaDiagnosticos;
