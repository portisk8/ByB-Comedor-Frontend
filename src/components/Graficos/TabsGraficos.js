import { Tabs } from 'antd';
import React from 'react';
import Grafico from './Grafico'
import DemoColumn from './DemoColumn'
const { TabPane } = Tabs;

const onChange = (key) => {
  console.log(key);
};

<<<<<<< HEAD
const TabsGraficos = ({arrayDatos, setArrayDatos}) => (
  <Tabs defaultActiveKey="1" onChange={onChange}>
    <TabPane tab="Peso" key="1">
      <Grafico arrayDatos={arrayDatos} setArrayDatos={setArrayDatos} />
=======
const TabsGraficos = () => (
  <Tabs defaultActiveKey="1" onChange={onChange}>
    <TabPane tab="Peso" key="1">
      <Grafico/>
>>>>>>> eb79f3364b0833823cf7ce7c95b77d55ea086ccb
    </TabPane>
    
    <TabPane tab="IMC" key="2">
    <DemoColumn/>
    </TabPane>
  </Tabs>
);

export default TabsGraficos;