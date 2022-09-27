import {
  Button,
  Form,
  Input,
  DatePicker,
  AutoComplete,
  InputNumber,
  Row,
  Col,
  Card,
} from "antd";
import moment from "moment";
import React, { useEffect, useState } from "react";

const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];

const formItemLayout = {
  labelCol: {
    xs: {
      span: 12,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 4,
    },
    sm: {
      span: 20,
    },
  },
};

const FormularioInfante = ({Infante}) => {
  const [form] = Form.useForm();
  const [tutor, setTutor] = useState([]);

  useEffect(() => {
    const obtenerTutores = async () => {
      try {
        const url = "https://fakeapi-json.herokuapp.com/tutores";
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        setTutor(resultado);
      } catch (error) {
        console.log(error);
      }
    };
    obtenerTutores();
  }, []);

  const options = tutor.map((t) => ({
    value: `${t.dni} - ${t.nombre} ${t.apellido}`,
  }));

  const onFinish = async (values) => {
    try {
      console.log(values)
      let infante={
        nombre: values.nombre,
        apellido: values.apellido,
        dni: values.dni,
        edad: values.edad,
        fechaNac: values.fechaNac ? moment(values.fechaNac).format("YYYY-MM-DD") : null,
        tutor: values.tutor,
        diagnostico: [
          {
            fecha: values.fecha,
            peso: values.peso,
            altura: values.altura,
          },
          
        ]
      };
      const url = "https://fakeapi-json.herokuapp.com/infantes";
      const respuesta = await fetch(url, {
        method: "POST",
        body: JSON.stringify(infante),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const resultado = await respuesta.json();
      console.log(resultado);
    } catch (error) {}
  };





  const onReset = () => {
    form.resetFields();
  };

  const obtenerFecha = () => {
    let date = new Date();
    return date.toISOString().split("T")[0];
  };

  return (
    <Form
      {...formItemLayout}
      form={form}
      name="control-hooks"
      onFinish={onFinish}
      initialValues={{
        fecha: `${obtenerFecha()}`,
      }}
    >
      <Form.Item
        name="fecha"
        label="Fecha"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input disabled={true} />
      </Form.Item>
      <Row>
        <Col flex="auto">
          <h3 style={{ textAlign: "center" }}>Datos Personales</h3>
          <Form.Item
            name="nombre"
            label="Nombre"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="apellido"
            label="Apellido"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="dni"
            label="DNI"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="tutor"
            label="Tutor"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <AutoComplete
              options={options}
              style={{
                width: 300,
              }}
              placeholder="input here"
              filterOption={(inputValue, option) =>
                option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !==
                -1
              }
            ></AutoComplete>
          </Form.Item>

          <Form.Item name="edad" label="Edad" rules={[{}]}>
            <Input />
          </Form.Item>
          <Form.Item name="fechaNac" label="Fecha de Nacimiento">
            <DatePicker
              
              
            />
          </Form.Item>
        </Col>

        <Col flex="700px">
          <h3 style={{ textAlign: "center" }}>Datos Antropometricos</h3>
          <Form.Item
            name="peso"
            label="Peso"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <InputNumber />
          </Form.Item>
          <Form.Item
            name="altura"
            label="Altura"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <InputNumber />
          </Form.Item>
          <Form.Item
            name="circuferencia"
            label="Circunferencia Cintura"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <InputNumber />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Registrar infante
        </Button>
        <Button htmlType="button" onClick={onReset}>
          Reiniciar Formulario
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormularioInfante;
