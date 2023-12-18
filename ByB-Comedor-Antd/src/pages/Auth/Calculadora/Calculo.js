import React, { useState } from 'react';
import { Button, Col, Input, Row } from 'antd';
import PageHeaderLayout from "../../../components/PageHeaderLayout/PageHeaderLayout";


const Calculo = () => {
  const [numeroDeChicos, setNumeroDeChicos] = useState(0);
  const [cantidadDePorciones, setCantidadDePorciones] = useState(0);
  const [cantidadDeLitros, setCantidadDeLitros] = useState(0);

  const handleInputChange = (e) => {
    const valor = e.target.value;
    setNumeroDeChicos(valor);
  };

  const calcularPorciones = () => {
    // Calcula la cantidad de porciones (cada porción equivale a 5 chicos)
    const porciones = Math.ceil(numeroDeChicos / 5);
    setCantidadDePorciones(porciones);
    const litros = Math.ceil(porciones * 2);
    setCantidadDeLitros(litros);
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
            La cantidad de porciones necesarias es: <strong>{cantidadDePorciones}</strong>
          </p>
          <p>
            La cantidad de litros de agua necesarios son: <strong>{cantidadDeLitros}</strong>
          </p>
        </div>
      </Col>
    </Row>
    </PageHeaderLayout>
  );
};

export default Calculo;

