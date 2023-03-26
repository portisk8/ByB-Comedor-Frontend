import { Button, Form, Input, Space, Table } from "antd";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { personaBuscarService } from "../../../services/personaService";
import { setKeyTable } from "../../../utils/utils";

const filtrosDefault = {
  esInfante: true,
  comedorId: null,
  palabrasABuscar: null,
  columnaAOrdenar: null,
  pageIndex: 1,
  pageSize: 10,
};

function InfanteListado() {
  const [filtros, setFiltros] = useState({});
  const [loading, setLoading] = useState(false);
  const [personaList, setPersonaList] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));
  const [form] = Form.useForm();

  const personaBuscar = async (filtro) => {
    filtro.comedorId = user.comedorId;
    const response = await personaBuscarService(filtro);
    if (response.data) {
      setPersonaList(setKeyTable(response.data));
    }
    setFiltros(filtro);
  };

  const init = async () => {
    await personaBuscar(Object.assign({}, filtrosDefault));
  };

  useEffect(() => {
    init();
  }, []);

  const columns = [
    {
      title: "Nombre y Apellido",
      render: (row) => (
        <div>
          {row.nombre} {row.apellido}
        </div>
      ),
    },
    {
      title: "Tutor",
      render: (row) => (
        <div>
          {row.personaTutorNombre} {row.personaTutorApellido}
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
            <Button type="primary">Mas información</Button>
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
    personaBuscar(filtros);
  };

  const handleSubmitFilter = (values) => {
    filtros.palabrasABuscar = values.palabrasABuscar;
    personaBuscar(filtros);
  };

  const handleCleanFilters = () => {
    personaBuscar(Object.assign({}, filtrosDefault));
  };

  return (
    <>
      {/* <Form form={form} onFinish={handleSubmitFilter}>
        <Form.Item name={"palabrasABuscar"}>
          <Input.Search
            placeholder="input search text"
            // onSearch={onSearch}
            style={{ width: 200 }}
          />
        </Form.Item>
      </Form> */}
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
    </>
  );
}

export default InfanteListado;
