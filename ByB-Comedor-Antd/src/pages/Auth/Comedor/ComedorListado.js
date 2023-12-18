import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, Row, Space, Table } from "antd";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PageHeaderLayout from "../../../components/PageHeaderLayout/PageHeaderLayout";
import { setKeyTable } from "../../../utils/utils";
import { comedorListarService } from "../../../services/comedorService";
import ModalAgregarComedor from "./ModalAgregarComedor";

const filtrosDefault = {
  esInfante: null,
  comedorId: null,
  palabrasABuscar: null,
  columnaAOrdenar: null,
  pageIndex: 1,
  pageSize: 10,
};

function ComedorListado() {
  const [filtros, setFiltros] = useState({});
  const [loading, setLoading] = useState(false);
  const [comedorList, setComedorList] = useState([]);
  const [comedorFormModal, setComedorFormModal] = useState();

  const user = JSON.parse(localStorage.getItem("user"));
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const comedorBuscar = async (filtro) => {
    const response = await comedorListarService(filtro);
    if (response.data) {
      setComedorList(setKeyTable(response.data));
    }
    setFiltros(filtro);
  };

  const init = async () => {
    setLoading(true);
    await comedorBuscar(Object.assign({}, filtrosDefault));
    setLoading(false);
  };

  useEffect(() => {
    init();
  }, []);

  const columns = [
    {
      title: "Id",
      render: (row) => (
        <div>
          <div>
            {row.comedorId}
          </div>
        </div>
      ),
    },
    {
      title: "Descripción",
      render: (row) => (
        <div>
          {row.descripcion}
        </div>
      ),
    },
    {
      title: "Título",
      render: (row) => (
        <div>
          <div>{row.titulo}</div>
        </div>
      ),
    },
    {
        title: "Dirección",
        render: (row) => (
          <div>
            <div>{row.direccionCalle} {row.direccionNumero}</div>
          </div>
        ),
      },
    {
      title: "Acciones",
      accessor: "Acciones",
      width: "20%",
      render: (row) => (
        <div>
          <Space align="start" direction="horizontal">
              <Button
                type="default"
                icon={<EditOutlined />}
              >
                Editar
              </Button>
            <Button
              type="default"
              icon={<DeleteOutlined />}
            >
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
    comedorBuscar(filtros);
  };

  const handleSubmitFilter = (values) => {
    filtros.palabrasABuscar = values.palabrasABuscar;
    comedorBuscar(filtros);
  };

  const handleCleanFilters = () => {
    comedorBuscar(Object.assign({}, filtrosDefault));
    form.resetFields();
  };

  const handleCloseModal = (comedorId) => {
    setComedorFormModal(null);
    if (comedorId) {
      filtros.pageIndex = 1;
      comedorBuscar(filtros);
    }
  };

  return (
    <PageHeaderLayout
      title={"Comedor"}
      breadCrumbList={[{ label: "Inicio", link: "/" }, { label: "Comedor" }]}
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
        </Row>
        <Row gutter={16}>
          <Col xs={12}>
            <Space>
              <Button onClick={() => handleCleanFilters()}>
                Limpiar Filtros
              </Button>
              <Button onClick={form.submit}>
                Filtrar
              </Button>
              <ModalAgregarComedor/>
            </Space>
          </Col>
        </Row>
      </Form>
      <Table
        key={"tabla-comedor"}
        bordered={true}
        columns={columns}
        dataSource={comedorList}
        onChange={onChangeTable}
        pagination={{
          pageSize: filtros?.pageSize,
          current: filtros?.pageIndex,
          total: comedorList.length > 0 ? comedorList[0].totalFilas : 0,
          showTotal: (total, range) => `${range[0]}-${range[1]} de ${total}`,
          showSizeChanger: true,
        }}
      />

      {/* {tutorFormModal && (
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
      )} */}
    </PageHeaderLayout>
  );
}

export default ComedorListado;
