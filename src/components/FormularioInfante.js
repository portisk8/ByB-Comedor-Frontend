import { Button, Form, Input, Select,DatePicker } from 'antd';
import React, { useEffect, useState } from 'react';
import Buscador from './Buscador';

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


const FormularioInfante = () => {
    const [form] = Form.useForm();
    const [filterTable, setFilterTable] = useState(null);
    const [tutor, setTutor] = useState([])

    useEffect(() => {
      const obtenerTutores=async()=>{
        try {
          const url='http://localhost:4000/tutores'
          const respuesta=await fetch(url)
          const resultado=await respuesta.json()
          setTutor(resultado)
          
        } catch (error) {
          console.log(error)
        }


      }
      obtenerTutores()
    },[])
    
    const onSearch = (value) =>{
      const filterData = tutor.filter((o) => Object.keys(o).some((k) => String(o[k])
      .toLowerCase()
      .includes(value.toLowerCase())));
    console.log(filterData);
    
    };
   
  
    const onFinish = async (values) => {
      try {
        const url='http://localhost:4000/infantes'
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
  
   
  return (
    <Form {...layout} form={form} name="control-hooks" onFinish={onFinish} initialValues={{
      nombre: '',
      apellido: '',
      dni: '',
      domicilio:'',
      tutor:'',
      edad:'',
      fechaNac:''
    }}>
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
    <Form.Item name="tutor" label="Tutor">
    <Buscador/>
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
      <DatePicker />

      
    </Form.Item>

      <h3>Datos Antropometricos</h3>



 
    <Form.Item {...tailLayout}>
      <Button type="primary" htmlType="submit">
        Registrar infante
      </Button>
      <Button htmlType="button" onClick={onReset}>
        Reiniciar Formulario
      </Button>
     
    </Form.Item>
  </Form>
  )
}

export default FormularioInfante