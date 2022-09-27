import React from "react";
import { Line } from "@ant-design/charts";

const Grafico = ({ arrayDatos, setArrayDatos }) => {
  const data = arrayDatos.map((item) => {
    return {
      fecha: item.fecha,
      peso: item.peso,
    };
  });

  const config = {
    data,

    xField: "fecha",
    yField: "peso",
    seriesField: "type",
    point: {
      size: 5,
      shape: "diamond",
    },
  };

  return <Line {...config} />;
};

export default Grafico;
