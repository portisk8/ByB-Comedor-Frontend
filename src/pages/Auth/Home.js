import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PageHeaderLayout from "../../components/PageHeaderLayout/PageHeaderLayout";
import { Button, Card, Space, Row, Col } from "antd";
import { PlusCircleTwoTone } from "@ant-design/icons";
import ModalInfante from "../../components/ModalInfante";
import ModalTutor from "../../components/ModalTutor";
import TablaDatos from "../../components/TablaDatos";
import Grafico from "../../components/Grafico";
import DemoColumn from "../../components/DemoColumn";
import Buscador from "../../components/Buscador";


function Home() {
  const navigate = useNavigate();
  return (
    <PageHeaderLayout title={"Inicio"}>
      <div className="site-card-wrapper">
        <Row gutter={16}>
          <Col span={16}>
            <Card bordered={false}>
              <ModalInfante />
            </Card>
          </Col>
          <Col span={1}>
            <Card bordered={false}>
              <ModalTutor />
            </Card>
          </Col>
          
        </Row>

        <Row>
        <Col span={10} >
            <Card bordered={false}>
             
            </Card>
          </Col>
          <Col span={10} >
            <Card bordered={false}>
              
            </Card>
          </Col>

        </Row>

        <Row>
        <Col span={24} >
            <Card bordered={false}>
              
              <TablaDatos/>
            </Card>
          </Col>

        </Row>
      </div>
      
    </PageHeaderLayout>
  );
}

export default Home;
