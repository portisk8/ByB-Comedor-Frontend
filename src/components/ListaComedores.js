import { Avatar, List } from "antd";
import React from "react";
const data = [
  {
    title: "Comedor San Expedito",
  },
  {
    title: "Merendero Lapiz y Papel",
  },
  {
    title: "Merendero San Juan",
  },
];

const ListaComedores = () => (
  <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item) => (
      <List.Item>
        <List.Item.Meta
          title={<a href="#">{item.title}</a>}
          description="Click para seleccionar el comedor"
        />
      </List.Item>
    )}
  />
);

export default ListaComedores;
