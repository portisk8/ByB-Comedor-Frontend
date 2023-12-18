import React, { useState } from 'react';
import { Button, Col, Input, Row } from 'antd';
import PageHeaderLayout from "../../../components/PageHeaderLayout/PageHeaderLayout";


const Calculo = () => {
  const [numeroDeChicos, setNumeroDeChicos] = useState(0);
  const [cantidadDeGramos, setCantidadDeGramos] = useState(0);
  const [cantidadDeLitrosPasta, setCantidadDeLitrosPasta] = useState(0);
  const [cantidadDeLitrosGuiso, setCantidadDeLitrosGuiso] = useState(0);


  const handleInputChange = (e) => {
    const valor = e.target.value;
    setNumeroDeChicos(valor);
  };

  const calcularPorciones = () => {
    // Calcula la cantidad de porciones (cada porción equivale a 5 chicos)
    const gramos = Math.ceil(numeroDeChicos * 75);
    setCantidadDeGramos(gramos);
    const litrosPasta = Math.ceil(gramos * 2);
    const litrosGuiso = Math.ceil(gramos * 3);
    setCantidadDeLitrosPasta(litrosPasta);
    setCantidadDeLitrosGuiso(litrosGuiso);
  };

  return (
    <PageHeaderLayout
    title={"Calculadora de Porciones por persona"}
    breadCrumbList={[{ label: "Inicio", link: "/" }, { label: "Calculadora" }]}
    >
    <Row gutter={16} justify="center">
      <Col xs={24} md={12}>
        <div style={{ textAlign: 'center', backgroundColor: '#f0f0f0', padding: '16px', borderRadius: '8px' }}>
    
          <Input
            size="large"
            placeholder="Ingrese el número de chicos"
            type="number"
            value={numeroDeChicos}
            onChange={handleInputChange}
            style={{ marginBottom: '16px' }}
          />
          <Button type="default" size="large" onClick={calcularPorciones}>
            Calcular
          </Button>
          <p style={{ marginTop: '16px'}}>
            La cantidad de gramos necesarios son: <strong>{cantidadDeGramos} gr</strong>
          </p>
          <p>
            Para una consistencia de Pasta se necesitan <strong>{cantidadDeLitrosPasta} ml</strong>  de agua
          </p>
          <p>
            Para una consistencia de Guiso se necesitan <strong>{cantidadDeLitrosGuiso} ml</strong> ml de agua
          </p>
        </div>
      </Col>
    </Row>
    </PageHeaderLayout>
  );
};

export default Calculo;

