import {
  EditOutlined,
  EllipsisOutlined,
  LeftOutlined,
  RightOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Button, Card, Carousel, Col, Row } from "antd";
import React, { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Slider from "react-slick";
import CarouselMobile from "../../components/CarouselCustom/CarouselMobile";
import PageHeaderLayout from "../../components/PageHeaderLayout/PageHeaderLayout";
import { useWindowSize } from "../../utils/Hooks/useWindowSize";
import InfanteListado from "./Infantes/InfanteListado";

const { Meta } = Card;

function Home() {
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
          <InfanteListado />
        </Col>
      </Row>
    </PageHeaderLayout>
  );
}

export default Home;
