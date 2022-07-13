import { Button, Form, Input, Select } from 'antd';
import React from 'react';

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

const { Search } = Input;
const onSearch = (value) => console.log(value);

const FormularioInfante = () => {
    const [form] = Form.useForm();

    const onGenderChange = (value) => {
      switch (value) {
        case 'male':
          form.setFieldsValue({
            note: 'Hi, man!',
          });
          return;
  
        case 'female':
          form.setFieldsValue({
            note: 'Hi, lady!',
          });
          return;
  
        case 'other':
          form.setFieldsValue({
            note: 'Hi there!',
          });
      }
    };
  
    const onFinish = (values) => {
      console.log(values);
    };
  
    const onReset = () => {
      form.resetFields();
    };
  
    const onFill = () => {
      form.setFieldsValue({
        note: 'Hello world!',
        gender: 'male',
      });
    };
  return (
    <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
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
    <Form.Item label="Tutor">
    <Search placeholder="input search text" onSearch={onSearch} enterButton />
      </Form.Item>
    <Form.Item
      name="edad"
      label="Edad"
      rules={[
        {
          required: true,
        },
      ]}
    >
      <Input />
      
    </Form.Item>
    <Form.Item
      name="fechaNac"
      label="Fecha de Nacimiento"
      rules={[
        {
          required: true,
        },
      ]}
    >
      <Input />
      
    </Form.Item>

      <h2>Datos Antropometricos</h2>



 
    <Form.Item {...tailLayout}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
      <Button htmlType="button" onClick={onReset}>
        Reset
      </Button>
      <Button type="link" htmlType="button" onClick={onFill}>
        Fill form
      </Button>
    </Form.Item>
  </Form>
  )
}

export default FormularioInfante