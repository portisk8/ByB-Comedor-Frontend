import { Tabs } from 'antd';
import React from 'react';
import Grafico from './Grafico'
import DemoColumn from './DemoColumn'
const { TabPane } = Tabs;

const onChange = (key) => {
  console.log(key);
};

const TabsGraficos = () => (
  <Tabs defaultActiveKey="1" onChange={onChange}>
    <TabPane tab="Peso" key="1">
      <Grafico/>
    </TabPane>
    
    <TabPane tab="IMC" key="2">
    <DemoColumn/>
    </TabPane>
  </Tabs>
);

export default TabsGraficos;