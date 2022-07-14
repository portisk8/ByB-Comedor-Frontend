import { Form, Input, InputNumber, Popconfirm, Table, Typography, Modal } from "antd";
import { EditFilled, DeleteFilled, EyeFilled } from "@ant-design/icons";
import React, { useState,useEffect } from "react";





const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === "number" ? <InputNumber /> : <Input />;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

const TablaDatos = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState();
  const [editingKey, setEditingKey] = useState("");
  const [tutor, setTutor] = useState([])

useEffect(() => {
  const obtenerTutores=async()=>{
    try {
      const url='http://localhost:4000/infantes'
      const respuesta=await fetch(url)
      const resultado=await respuesta.json()
      setData(resultado)
      
    } catch (error) {
      console.log(error)
    }


  }
  obtenerTutores()
},[])

  const isEditing = (record) => record.key === editingKey;

  const edit = (record) => {
    form.setFieldsValue({
      dni: "",
      nombre: "",
      apellido: "",
      tutor: "",
      ...record,
    });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey("");
  };

  const save = async (key) => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex((item) => key === item.key);

      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        setData(newData);
        setEditingKey("");
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey("");
      }
    } catch (errInfo) {
      console.log("Validate Failed:", errInfo);
    }
  };
 
    const handleDelete = (key) => {
       
        const newData = data.filter((item) => item.key !== key);
        setData(newData);
  };

  const columns = [
    {
      title: "DNI",
      dataIndex: "dni",
      width: "25%",
      editable: true,
    },
    {
      title: "Nombre",
      dataIndex: "nombre",
      width: "25%",
      editable: true,
    },
    {
      title: "Apellido",
      dataIndex: "apellido",
      width: "20%",
      editable: true,
    },

    {
      title: "Tutor",
      dataIndex: "tutor",
      width: "30%%",
      editable: true,
    },
    {
      title: "operation",
      dataIndex: "operation",
      render: (_, record) => {
        const editable = isEditing(record);

        return editable ? (
          <span>
            <Typography.Link
              onClick={() => save(record.key)}
              style={{
                marginRight: 8,
              }}
            >
              Save
            </Typography.Link>
            <Popconfirm title="Cancelar Edicion?" onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <>
            <EditFilled
              disabled={editingKey !== ""}
              onClick={() => edit(record)}
              style={{ ontSize:'20px',color: "Blue", marginLeft: 20 }}
            />
             
            
            <Popconfirm title="Seguro que desea borrar?" onConfirm={()=> handleDelete(record.key)}>
            <DeleteFilled 
              style={{ ontSize:'20px',color: "red", marginLeft: 20 }}/>
              </Popconfirm>

              <EyeFilled style={{ fontSize:'20px', color: "green", marginLeft: 20 }} />
          </>
        );
      },
    },
  ];
  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.dataIndex === "age" ? "number" : "text",
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });
  return (
    <Form form={form} component={false}>
      <Table
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        bordered
        dataSource={data}
        columns={mergedColumns}
        rowClassName="editable-row"
        pagination={{
          onChange: cancel,
        }}
      />
    </Form>
  );
};

export default TablaDatos;
