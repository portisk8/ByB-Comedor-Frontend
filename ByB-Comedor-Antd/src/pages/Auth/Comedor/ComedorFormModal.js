import React from 'react';
import { Form, Input, Button } from 'antd';
const MyFormItemContext = React.createContext([]);
function toArr(str) {
  return Array.isArray(str) ? str : [str];
}
const MyFormItemGroup = ({ prefix, children }) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatPath = React.useMemo(() => [...prefixPath, ...toArr(prefix)], [prefixPath, prefix]);
  return <MyFormItemContext.Provider value={concatPath}>{children}</MyFormItemContext.Provider>;
};
const MyFormItem = ({ name, ...props }) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatName = name !== undefined ? [...prefixPath, ...toArr(name)] : undefined;
  return <Form.Item name={concatName} {...props} />;
};
const ComedorFormModal = () => {
  const onFinish = (value) => {
    console.log(value);
  };
  return (
    <Form name="form_item_path" layout="vertical" onFinish={onFinish}>
      <MyFormItemGroup prefix={['comedor']}>
        <MyFormItemGroup prefix={['nombre']}>
          <MyFormItem name="nombre" label="Nombre del comedor">
            <Input />
          </MyFormItem>
          <MyFormItem name="direccion" label="Dirección">
            <Input />
          </MyFormItem>
        </MyFormItemGroup>
      </MyFormItemGroup>

      <Button type="primary" htmlType="submit">
        Guardar
      </Button>
    </Form>
  );
};
export default ComedorFormModal;