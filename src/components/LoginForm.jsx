import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Input, Button, message } from 'antd';

const LoginForm = ({ setUsername }) => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    setLoading(true);

    if (process.env.REACT_APP_USERNAME === values.username && process.env.REACT_APP_PASSWORD === values.password) {
      setUsername(values.username);
      setLoading(false);
      history.push('/contacts'); // Redireciona para a página de contatos após o login bem-sucedido
    } else {
      message.error('Credenciais inválidas. Por favor, tente novamente.');
      setLoading(false);
    }
  };

  return (
    <Form onFinish={onFinish}>
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Por favor, insira seu nome de usuário!',
          },
        ]}
      >
        <Input placeholder="Nome de usuário" />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Por favor, insira sua senha!',
          },
        ]}
      >
        <Input.Password placeholder="Senha" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" loading={loading}>
          Entrar
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;