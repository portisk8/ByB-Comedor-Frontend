import { Space, Table, Tag } from "antd";
import React from "react";
const columns = [
  {
    title: "Fecha de Medicion",
    dataIndex: "fechaMed",
    key: "fechaMed",
  },
  {
    title: "Peso",
    dataIndex: "peso",
    key: "peso",
  },
  {
    title: "Altura",
    dataIndex: "altura",
    key: "altura",
  },
  {
    title: "IMC",
    dataIndex: "imc",
    key: "imc",
  },
 
];
const data = [
  {
    key: "1",
    fechaMed: "19-08-2022",
    peso: "60 KG" ,
    altura: "160 CM",
    imc: "22.3",
  },
  {
    key: "2",
    fechaMed: "19-07-2022",
    peso: "60 KG" ,
    altura: "160 CM",
    imc: "22.3",
  },
  {
    key: "1",
    fechaMed: "19-06-2022",
    peso: "60 KG" ,
    altura: "160 CM",
    imc: "22.3",
  },
];

const TablaDiagnostico = () => <Table columns={columns} dataSource={data} />;

export default TablaDiagnostico;
