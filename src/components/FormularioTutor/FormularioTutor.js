import { Button, Form, Input, Select, DatePicker } from "antd";
import FormItem from "antd/lib/form/FormItem";
import React from "react";
import ModalInfante from "../ModalInfante";
const { Option } = Select;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const FormularioTutor = () => {
  const [form] = Form.useForm();

  const onGenderChange = (value) => {
    switch (value) {
      case "male":
        form.setFieldsValue({
          note: "Hi, man!",
        });
        return;

      case "female":
        form.setFieldsValue({
          note: "Hi, lady!",
        });
        return;

      case "other":
        form.setFieldsValue({
          note: "Hi there!",
        });
    }
  };

  const onFinish = async (values) => {
    try {
      const url='http://localhost:4000/tutores'
      const respuesta=await fetch(url,{
        method: 'POST',
        body: JSON.stringify(values),
        headers:{
          'Content-Type': 'application/json'
        }
      })

      const resultado=await respuesta.json()
      console.log(resultado)
    } catch (error) {
      
    }
  };

  const onReset = () => {
    form.resetFields();
  };

  
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="54">+54</Option>
        
      </Select>
    </Form.Item>
  );

  return (
    <Form {...layout} form={form} name="control-hooks" onFinish={onFinish} initialValues={{
      nombre: '',
      apellido: '',
      dni: '',
      domicilio:'',
      telefono:''
    }} >
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
        name="domicilio"
        label="Domicilio"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
     

      <Form.Item
        name="phone"
        label="Phone Number"
        rules={[
          {
            required: true,
            message: 'Please input your phone number!',
          },
        ]}
      >
        <Input
          addonBefore={prefixSelector}
          style={{
            width: '100%',
          }}
        />
      </Form.Item>


     

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Registrar Tutor
        </Button>
        <Button htmlType="button" onClick={onReset}>
          Reiniciar Formulario
        </Button>
        
      </Form.Item>
    </Form>
  );
};

export default FormularioTutor;
