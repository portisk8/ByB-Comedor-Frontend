import { BookOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, Row, Select, Space, Table, Tag } from "antd";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PageHeaderLayout from "../../../components/PageHeaderLayout/PageHeaderLayout";
import { personaBuscarService } from "../../../services/personaService";
import { setKeyTable } from "../../../utils/utils";
import InfanteFormModal from "../Infantes/InfanteFormModal";
import TutorFormModal from "../Tutor/TutorFormModal";

const filtrosDefault = {
  esInfante: null,
  comedorId: null,
  palabrasABuscar: null,
  columnaAOrdenar: null,
  pageIndex: 1,
  pageSize: 10,
};

function PesonaListado() {
  const [filtros, setFiltros] = useState({});
  const [loading, setLoading] = useState(false);
  const [personaList, setPersonaList] = useState([]);
  const [tutorFormModal, setTutorFormModal] = useState();
  const [infanteFormModal, setInfanteFormModal] = useState();

  const user = JSON.parse(localStorage.getItem("user"));
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const personaBuscar = async (filtro) => {
    filtro.comedorId = user.comedorId;
    const response = await personaBuscarService(filtro);
    if (response.data) {
      setPersonaList(setKeyTable(response.data));
    }
    setFiltros(filtro);
  };

  const init = async () => {
    setLoading(true);
    await personaBuscar(Object.assign({}, filtrosDefault));
    setLoading(false);
  };

  useEffect(() => {
    init();
  }, []);

  const columns = [
    {
      title: "Nombre y Apellido",
      render: (row) => (
        <div>
          <div>
            {row.nombre} {row.apellido}
          </div>
          <div>
            {row.esInfante ? (
              <Tag
                color={"#52c41a"}
                style={{ paddingLeft: 5, paddingRight: 5 }}
              >
                Infante
              </Tag>
            ) : (
              <Tag
                color={"#1677ff"}
                style={{ paddingLeft: 5, paddingRight: 5 }}
              >
                Tutor
              </Tag>
            )}
          </div>
        </div>
      ),
    },
    {
      title: "Tutor a cargo",
      render: (row) => (
        <div>
          {row.personaTutorNombre} {row.personaTutorApellido}
        </div>
      ),
    },
    {
      title: "Fecha de Nacimiento / Edad",
      render: (row) => (
        <div>
          {row.fechaNacimiento && (
            <div>
              Fecha de nacimiento:{" "}
              {dayjs(row.fechaNacimiento).format("DD/MM/YYYY")}
            </div>
          )}
          <div>Edad: {row.edad}</div>
        </div>
      ),
    },
    {
      title: "Acciones",
      accessor: "Acciones",
      width: "20%",
      render: (row) => (
        <div>
          <Space align="start" direction="horizontal" r>
            {row.esInfante && (
              <Button
                type="primary"
                onClick={() => navigate(`/infante/${row.personaId}/historial`)}
                icon={<BookOutlined />}
              >
                Historial
              </Button>
            )}
            <Button
              type="default"
              icon={<EditOutlined />}
              onClick={() => {
                if (row.esInfante)
                  setInfanteFormModal({ personaId: row.personaId });
                if (!row.esInfante)
                  setTutorFormModal({ personaId: row.personaId });
              }}
            >
              Editar
            </Button>
            {/* <Button danger type="primary">
              Eliminar
            </Button> */}
          </Space>
        </div>
      ),
    },
  ];

  const onChangeTable = (e) => {
    filtros.pageIndex = e.current;
    filtros.pageSize = e.pageSize;
    personaBuscar(filtros);
  };

  const handleSubmitFilter = (values) => {
    filtros.comedorId = user.comedorId;
    filtros.palabrasABuscar = values.palabrasABuscar;
    switch (values.esInfante) {
      case 0:
        filtros.esInfante = null;
        break;
      case 1:
        filtros.esInfante = true;
        break;
      case 2:
        filtros.esInfante = false;
        break;

      default:
        break;
    }
    personaBuscar(filtros);
  };

  const handleCleanFilters = () => {
    personaBuscar(Object.assign({}, filtrosDefault));
    form.resetFields();
  };

  const handleCloseModal = (personaId) => {
    setTutorFormModal(null);
    setInfanteFormModal(null);
    if (personaId) {
      filtros.pageIndex = 1;
      personaBuscar(filtros);
    }
  };

  return (
    <PageHeaderLayout
      title={"Personas"}
      breadCrumbList={[{ label: "Inicio", link: "/" }, { label: "Personas" }]}
    >
      <Form
        form={form}
        onFinish={handleSubmitFilter}
        layout={"vertical"}
        style={{ paddingTop: 15, marginBottom: 15 }}
      >
        <Row gutter={16}>
          <Col xs={24} md={12}>
            <Form.Item label={"Buscar por palabras"} name={"palabrasABuscar"}>
              <Input.Search
                placeholder="Ingrese palabra a buscar"
                // onSearch={onSearch}
                style={{ width: "100%" }}
              />
            </Form.Item>
          </Col>
          <Col xs={24} md={6}>
            <Form.Item
              label={"Tutor/Infante"}
              name={"esInfante"}
              initialValue={0}
            >
              <Select placeholder="Seleccione">
                <Select.Option key={`esInfante-0`} value={0}>
                  TODOS
                </Select.Option>
                <Select.Option key={`esInfante-1`} value={1}>
                  Infante
                </Select.Option>
                <Select.Option key={`esInfante-2`} value={2}>
                  Tutor
                </Select.Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col xs={12}>
            <Space>
              <Button onClick={() => handleCleanFilters()}>
                Limpiar Filtros
              </Button>
              <Button type="primary" onClick={form.submit}>
                Filtrar
              </Button>
              <Button type="primary" onClick={() => setInfanteFormModal({})}>
                Agregar Infante
              </Button>
              <Button type="primary" onClick={() => setTutorFormModal({})}>
                Agregar Tutor
              </Button>
            </Space>
          </Col>
        </Row>
      </Form>
      <Table
        key={"tabla-infante"}
        bordered={true}
        columns={columns}
        dataSource={personaList}
        onChange={onChangeTable}
        pagination={{
          pageSize: filtros?.pageSize,
          current: filtros?.pageIndex,
          total: personaList.length > 0 ? personaList[0].totalFilas : 0,
          showTotal: (total, range) => `${range[0]}-${range[1]} de ${total}`,
          showSizeChanger: true,
        }}
      />

      {tutorFormModal && (
        <TutorFormModal
          onClose={(personaId) => handleCloseModal(personaId)}
          personaId={tutorFormModal.personaId}
        />
      )}
      {infanteFormModal && (
        <InfanteFormModal
          onClose={(personaId) => handleCloseModal(personaId)}
          personaId={infanteFormModal.personaId}
        />
      )}
    </PageHeaderLayout>
  );
}

export default PesonaListado;
