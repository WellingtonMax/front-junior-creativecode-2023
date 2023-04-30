// LoginPage.jsx

import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useAuth } from '../services/authService';
import "./LoginPage.css";

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const { handleLogin } = useAuth();
  const navigate = useNavigate();

  const onFinish = async (values) => {
    setLoading(true);
    try {
      await handleLogin(values.username, values.password);
      navigate('/contacts');
    } catch (error) {
      message.error("Invalid username or password");
    }
    setLoading(false);
  };

  return (
    <div className="login-page">
      <div className="login-form-container">
        <h1>Login</h1>
        <Form onFinish={onFinish}>
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder="Password" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading}>
              Log in
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;
