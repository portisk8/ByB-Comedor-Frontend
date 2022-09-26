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

<<<<<<< HEAD
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
=======
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
>>>>>>> eb79f3364b0833823cf7ce7c95b77d55ea086ccb
    } catch (error) {
      console.log(error);
    }
  };
<<<<<<< HEAD

  const columns = [
    {
      title: "Fecha",
      dataIndex: "fecha",
      key: "fecha",
=======
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
>>>>>>> eb79f3364b0833823cf7ce7c95b77d55ea086ccb
    },
    {
      title: "Peso",
      dataIndex: "peso",
<<<<<<< HEAD
      key: "diagnostico",
=======
      key: "peso",
>>>>>>> eb79f3364b0833823cf7ce7c95b77d55ea086ccb
    },
    {
      title: "Altura",
      dataIndex: "altura",
      key: "altura",
    },
<<<<<<< HEAD

=======
>>>>>>> eb79f3364b0833823cf7ce7c95b77d55ea086ccb
    {
      title: "IMC",
      dataIndex: "imc",
      key: "imc",
<<<<<<< HEAD

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
=======
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
>>>>>>> eb79f3364b0833823cf7ce7c95b77d55ea086ccb
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default TablaDiagnosticos;
