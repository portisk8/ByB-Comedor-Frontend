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
    <TabPane tab="Tab 1" key="1">
      <Grafico/>
    </TabPane>
    
    <TabPane tab="Tab 2" key="2">
    <DemoColumn/>
    </TabPane>
  </Tabs>
);

export default TabsGraficos;