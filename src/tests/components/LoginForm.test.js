import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import LoginForm from '../../components/LoginForm';
import 'matchmedia-polyfill';


describe('LoginForm', () => {
  const setUsername = jest.fn();

  const renderComponent = () =>
    render(
      <Router history={createMemoryHistory()}>
        <LoginForm setUsername={setUsername} />
      </Router>
    );

  test('renders login form', () => {
    renderComponent();
    const usernameInput = screen.getByPlaceholderText('Nome de usuário');
    const passwordInput = screen.getByPlaceholderText('Senha');
    const submitButton = screen.getByText('Entrar');

    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  test('submit button is disabled if form is not filled out', () => {
    renderComponent();
    const submitButton = screen.getByText('Entrar');
    expect(submitButton).toBeDisabled();
  });

  test('submit button is enabled when form is filled out', () => {
    renderComponent();
    const usernameInput = screen.getByPlaceholderText('Nome de usuário');
    const passwordInput = screen.getByPlaceholderText('Senha');
    const submitButton = screen.getByText('Entrar');

    fireEvent.change(usernameInput, { target: { value: 'username' } });
    fireEvent.change(passwordInput, { target: { value: 'password' } });

    expect(submitButton).toBeEnabled();
  });

  test('submitting valid login credentials calls setUsername and redirects to contacts page', () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <LoginForm setUsername={setUsername} />
      </Router>
    );

    const usernameInput = screen.getByPlaceholderText('Nome de usuário');
    const passwordInput = screen.getByPlaceholderText('Senha');
    const submitButton = screen.getByText('Entrar');

    fireEvent.change(usernameInput, { target: { value: process.env.REACT_APP_USERNAME } });
    fireEvent.change(passwordInput, { target: { value: process.env.REACT_APP_PASSWORD } });
    fireEvent.click(submitButton);

    expect(setUsername).toHaveBeenCalledWith(process.env.REACT_APP_USERNAME);
    expect(history.location.pathname).toBe('/contacts');
  });

  test('submitting invalid login credentials displays error message and does not redirect', () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <LoginForm setUsername={setUsername} />
      </Router>
    );

    const usernameInput = screen.getByPlaceholderText('Nome de usuário');
    const passwordInput = screen.getByPlaceholderText('Senha');
    const submitButton = screen.getByText('Entrar');

    fireEvent.change(usernameInput, { target: { value: 'invalid-username' } });
    fireEvent.change(passwordInput, { target: { value: 'invalid-password' } });
    fireEvent.click(submitButton);

    expect(setUsername).not.toHaveBeenCalled();
    expect(history.location.pathname).not.toBe('/contacts');
    expect(screen.getByText('Credenciais inválidas. Por favor, tente novamente.')).toBeInTheDocument();
  });
});
