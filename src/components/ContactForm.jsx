import React, { useEffect } from "react";
import { Form, Input, Button } from "antd";

const ContactForm = ({ contact, onFinish, form }) => {
  useEffect(() => {
    if (contact) {
      form.setFieldsValue(contact);
    } else {
      form.resetFields();
    }
  }, [contact, form]);

  return (
    <Form form={form} onFinish={onFinish}>
      <Form.Item
        label="Nome"
        name="name"
        rules={[{ required: true, message: "Por favor, insira o nome!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Telefone"
        name="phone"
        rules={[{ required: true, message: "Por favor, insira o telefone!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="E-mail"
        name="email"
        rules={[{ required: true, message: "Por favor, insira o e-mail!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          {contact ? "Editar" : "Adicionar"}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ContactForm;
