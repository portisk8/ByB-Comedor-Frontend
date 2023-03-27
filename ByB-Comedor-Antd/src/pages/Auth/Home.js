import {
  EditOutlined,
  EllipsisOutlined,
  LeftOutlined,
  RightOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Button, Card, Carousel, Col, Row, Space } from "antd";
import React, { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Slider from "react-slick";
import CarouselMobile from "../../components/CarouselCustom/CarouselMobile";
import PageHeaderLayout from "../../components/PageHeaderLayout/PageHeaderLayout";
import { useWindowSize } from "../../utils/Hooks/useWindowSize";
import InfanteFormModal from "./Infantes/InfanteFormModal";
import InfanteListado from "./Infantes/InfanteListado";
import TutorFormModal from "./Tutor/TutorFormModal";

const { Meta } = Card;

function Home() {
  const [tutorFormModal, setTutorFormModal] = useState(false);
  const [infanteFormModal, setInfanteFormModal] = useState(false);

  const navigate = useNavigate();
  const carouselRef = useRef(null);
  const windowsSize = useWindowSize();

  return (
    <PageHeaderLayout
      title={"Listado de infantes"}
      breadCrumbList={[{ label: "Inicio" }]}
    >
      <Row gutter={16}>
        <Col xs={24}>
          <Space>
            <Button type="primary" onClick={() => setInfanteFormModal(true)}>
              Agregar Infante
            </Button>
            <Button type="primary" onClick={() => setTutorFormModal(true)}>
              Agregar Tutor
            </Button>
          </Space>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col xs={24}>
          <InfanteListado />
        </Col>
      </Row>
      {tutorFormModal && (
        <TutorFormModal onClose={(personaId) => setTutorFormModal(false)} />
      )}
      {infanteFormModal && (
        <InfanteFormModal onClose={(personaId) => setInfanteFormModal(false)} />
      )}
    </PageHeaderLayout>
  );
}

export default Home;
