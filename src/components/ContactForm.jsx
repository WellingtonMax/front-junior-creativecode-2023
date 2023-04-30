import React, { useEffect } from "react";
import { Form, Input, Button, Row, Col } from "antd";

const ContactForm = ({ contact, onFinish, form }) => {
  useEffect(() => {
    if (contact) {
      form.setFieldsValue(contact);
    } else {
      form.resetFields();
    }
  }, [contact, form]);

  return (
    <Form form={form} onFinish={onFinish} layout="vertical">
      <Row gutter={16}>
        <Col span={8}>
          <Form.Item
            label="Nome"
            name="name"
            rules={[{ required: true, message: "Por favor, insira o nome!" }]}
          >
            <Input className="input-field" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Telefone"
            name="phone"
            rules={[{ required: true, message: "Por favor, insira o telefone!" }]}
          >
            <Input className="input-field" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="E-mail"
            name="email"
            rules={[{ required: true, message: "Por favor, insira o e-mail!" }]}
          >
            <Input className="input-field" />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={24} className="ant-col ant-col-control">
          <Form.Item>
            <Button type="primary" htmlType="submit">
              {contact ? "Editar" : "Adicionar"}
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default ContactForm;

