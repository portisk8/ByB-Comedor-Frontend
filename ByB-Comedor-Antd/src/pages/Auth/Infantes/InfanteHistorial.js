import { Button, Card, Col, Row, Space, Table } from "antd";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageHeaderLayout from "../../../components/PageHeaderLayout/PageHeaderLayout";
import {
  personaHistorialBuscarService,
  personaObtenerService,
} from "../../../services/personaService";
import { formatNumber } from "../../../utils/utils";
import HistorialChartTab from "./HistorialChartTab";

const filtrosDefault = {
  personaId: null,
  fechaDesde: null,
  fechaHasta: null,

  palabrasABuscar: null,
  columnaAOrdenar: null,
  pageIndex: 1,
  pageSize: 10,
};

function InfanteHistorial() {
  const [filtros, setFiltros] = useState({});
  const [loading, setLoading] = useState(false);
  const [persona, setPersona] = useState();
  const [historialList, setHistorialList] = useState([]);

  let { personaId } = useParams();

  const personaObtener = async () => {
    const response = await personaObtenerService(personaId);
    if (response.data) setPersona(response.data);
  };

  const personaHistorialBuscar = async (filtro) => {
    filtro.personaId = personaId;
    const response = await personaHistorialBuscarService(filtro);
    if (response.data) setHistorialList(response.data);
    setFiltros(filtro);
  };

  const init = async () => {
    setLoading(true);
    await personaObtener();
    await personaHistorialBuscar(Object.assign({}, filtrosDefault));

    setLoading(false);
  };

  useEffect(() => {
    init();
  }, []);

  const columns = [
    {
      title: "Fecha",
      render: (row) => (
        <div>{dayjs(row.fechaDeCarga).format("DD/MM/YYYY")}</div>
      ),
    },
    {
      title: "Peso",
      render: (row) => <div>{formatNumber(row.peso)} Kg.</div>,
    },
    {
      title: "Altura",
      render: (row) => <div>{formatNumber(row.altura)} m.</div>,
    },
    {
      title: "IMC",
      render: (row) => (
        <div>
          <div>{formatNumber(row.imc)}</div>
          <div>{row.imcDescripcion}</div>
        </div>
      ),
    },
    {
      title: "Acciones",
      accessor: "Acciones",
      align: "center",
      width: "20%",
      render: (row) => (
        <div className="text-center ">
          <Space>
            <Button danger type="primary">
              Eliminar
            </Button>
          </Space>
        </div>
      ),
    },
  ];

  const onChangeTable = (e) => {
    filtros.pageIndex = e.current;
    filtros.pageSize = e.pageSize;
    personaHistorialBuscar(filtros);
  };

  const handleSubmitFilter = (values) => {
    personaHistorialBuscar({ filtros, ...values });
  };

  const handleCleanFilters = () => {
    personaHistorialBuscar(Object.assign({}, filtrosDefault));
  };

  return (
    <PageHeaderLayout
      title={`${persona?.nombre} ${persona?.apellido}`}
      breadCrumbList={[
        { label: "Inicio", link: "/" },
        { label: "Infante" },
        { label: `${persona?.nombre} ${persona?.apellido}` },
        { label: "Hisotiral" },
      ]}
    >
      <div style={{ paddingTop: 10 }}>
        {persona && (
          <Card title={"Datos personales"} bordered={true} loading={loading}>
            {persona.documentoDescripcion && (
              <p>
                {persona.documentoDescripcion}: {persona.documentoNumero}
              </p>
            )}
            <p>Edad: {persona.edad} años</p>
            {persona.personaIdTutor && (
              <p>
                Tutor: {persona.personaTutorNombre}{" "}
                {persona.personaTutorApellido}
              </p>
            )}
            {persona.fechaNacimiento && (
              <p>
                Fecha de Nacimiento:{" "}
                {dayjs(persona.fechaNacimiento).format("DD/MM/YYYY")}
              </p>
            )}
          </Card>
        )}
        <Row gutter={16}>
          <Col xs={24}>
            <Table
              key={"tabla-historial-infante"}
              bordered={true}
              columns={columns}
              dataSource={historialList}
              onChange={onChangeTable}
              pagination={{
                pageSize: filtros?.pageSize,
                current: filtros?.pageIndex,
                total:
                  historialList.length > 0 ? historialList[0].totalFilas : 0,
                showTotal: (total, range) =>
                  `${range[0]}-${range[1]} de ${total}`,
                showSizeChanger: true,
              }}
            />
          </Col>
        </Row>
        <Row gutter={16}>
          <Col xs={24}>
            <HistorialChartTab historialList={historialList} />
          </Col>
        </Row>
      </div>
    </PageHeaderLayout>
  );
}

export default InfanteHistorial;
