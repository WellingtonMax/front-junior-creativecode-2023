import React from "react";
import { Table, Space, Button } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

const ContactTable = ({ contacts, deleteContact, editContact }) => {
  const columns = [
    {
      title: "Nome",
      dataIndex: "name",
      key: "name",
      render: (text) => <a href="/">{text}</a>,
    },
    {
      title: "Telefone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "E-mail",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Ação",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <Button
            type="primary"
            icon={<EditOutlined />}
            onClick={() => editContact(record)}
          >
            Editar
          </Button>
          <Button
            type="danger"
            icon={<DeleteOutlined />}
            onClick={() => deleteContact(record)}
          >
            Excluir
          </Button>
        </Space>
      ),
    },
  ];

  return <Table columns={columns} dataSource={contacts} rowKey="id" />;
};

export default ContactTable;