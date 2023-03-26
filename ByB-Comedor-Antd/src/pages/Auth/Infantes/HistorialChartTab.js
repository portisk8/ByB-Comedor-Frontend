import { Line } from "@ant-design/charts";
import { Tabs } from "antd";
import dayjs from "dayjs";
import React from "react";

function HistorialChartTab({ historialList }) {
  const dataPeso = historialList.map((item) => {
    return {
      fecha: dayjs(item.fechaDeCarga).format("DD/MM/YYYY"),
      value: item.peso,
    };
  });
  const dataAltura = historialList.map((item) => {
    return {
      fecha: dayjs(item.fechaDeCarga).format("DD/MM/YYYY"),
      value: item.altura,
    };
  });
  const dataIMC = historialList.map((item) => {
    return {
      fecha: dayjs(item.fechaDeCarga).format("DD/MM/YYYY"),
      value: item.imc,
    };
  });

  return (
    <Tabs defaultActiveKey="1">
      <Tabs.TabPane key={"1"} tab={"Peso"}>
        <div>
          <Line
            data={dataPeso}
            xField={"fecha"}
            yField={"value"}
            point={{
              size: 5,
              shape: "diamond",
              style: {
                fill: "white",
                stroke: "#5B8FF9",
                lineWidth: 2,
              },
            }}
          />
        </div>
      </Tabs.TabPane>
      <Tabs.TabPane key={"2"} tab={"Altura"}>
        <div>
          <Line
            data={dataAltura}
            xField={"fecha"}
            yField={"value"}
            point={{
              size: 5,
              shape: "diamond",
              style: {
                fill: "white",
                stroke: "#5B8FF9",
                lineWidth: 2,
              },
            }}
          />
        </div>
      </Tabs.TabPane>
      <Tabs.TabPane key={"3"} tab={"IMC"}>
        <div>
          <Line
            data={dataIMC}
            xField={"fecha"}
            yField={"value"}
            point={{
              size: 5,
              shape: "diamond",
              style: {
                fill: "white",
                stroke: "#5B8FF9",
                lineWidth: 2,
              },
            }}
          />
        </div>
      </Tabs.TabPane>
    </Tabs>
  );
}

export default HistorialChartTab;
