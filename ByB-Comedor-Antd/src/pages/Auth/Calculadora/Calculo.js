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
      <br></br>
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
          <br></br>
          <div style={{ marginTop: '32px', textAlign: 'center' }}>
              <h2 style={{fontSize: '20px', fontWeight: 'bold'}}>Receta por porción</h2>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr>
                    <th style={{ border: '1px solid #dddddd', padding: '8px' }}>Alimento</th>
                    <th style={{ border: '1px solid #dddddd', padding: '8px' }}>Cantidad en gramos (gr)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ border: '1px solid #dddddd', padding: '8px' }}>Apio</td>
                    <td style={{ border: '1px solid #dddddd', padding: '8px' }}>1</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid #dddddd', padding: '8px' }}>Cebolla deshidratada</td>
                    <td style={{ border: '1px solid #dddddd', padding: '8px' }}>1</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid #dddddd', padding: '8px' }}>Espinaca deshidratada</td>
                    <td style={{ border: '1px solid #dddddd', padding: '8px' }}>2</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid #dddddd', padding: '8px' }}>Perejil</td>
                    <td style={{ border: '1px solid #dddddd', padding: '8px' }}>0.5</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid #dddddd', padding: '8px' }}>Puerro</td>
                    <td style={{ border: '1px solid #dddddd', padding: '8px' }}>0.5</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid #dddddd', padding: '8px' }}>Tomate</td>
                    <td style={{ border: '1px solid #dddddd', padding: '8px' }}>5</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid #dddddd', padding: '8px' }}>Zanahoria deshidratada</td>
                    <td style={{ border: '1px solid #dddddd', padding: '8px' }}>1</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid #dddddd', padding: '8px' }}>Zapallo</td>
                    <td style={{ border: '1px solid #dddddd', padding: '8px' }}>10</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid #dddddd', padding: '8px' }}>Arroz parboil</td>
                    <td style={{ border: '1px solid #dddddd', padding: '8px' }}>13.5</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid #dddddd', padding: '8px' }}>Arvejas secas</td>
                    <td style={{ border: '1px solid #dddddd', padding: '8px' }}>7.5</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid #dddddd', padding: '8px' }}>Garbanzos</td>
                    <td style={{ border: '1px solid #dddddd', padding: '8px' }}>10</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid #dddddd', padding: '8px' }}>Lenteja</td>
                    <td style={{ border: '1px solid #dddddd', padding: '8px' }}>18</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid #dddddd', padding: '8px' }}>Trigo sarraceno</td>
                    <td style={{ border: '1px solid #dddddd', padding: '8px' }}>5</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <br></br>
          <br></br>
        </Col>
      </Row>
    </PageHeaderLayout>
  );
};

export default Calculo;

