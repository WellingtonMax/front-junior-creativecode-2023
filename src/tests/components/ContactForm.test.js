import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { Form } from "antd";
import ContactForm from "../../components/ContactForm";

describe("ContactForm", () => {
  const form = Form.useForm()[0];

  test("renders without crashing", () => {
    const onFinish = jest.fn();
    render(<ContactForm onFinish={onFinish} form={form} />);
    expect(screen.getByText("Adicionar")).toBeInTheDocument();
  });

  test("submit button is disabled if form is not filled out", () => {
    const onFinish = jest.fn();
    render(<ContactForm onFinish={onFinish} form={form} />);
    const submitButton = screen.getByText("Adicionar");
    fireEvent.click(submitButton);
    expect(onFinish).not.toBeCalled();
  });

  test("submit button is enabled and onFinish is called when form is filled out", () => {
    const onFinish = jest.fn();
    render(<ContactForm onFinish={onFinish} form={form} />);

    const nameInput = screen.getByLabelText("Nome");
    const phoneInput = screen.getByLabelText("Telefone");
    const emailInput = screen.getByLabelText("E-mail");

    fireEvent.change(nameInput, { target: { value: "João Carlos" } });
    fireEvent.change(phoneInput, { target: { value: "123456789" } });
    fireEvent.change(emailInput, { target: { value: "joão@example.com" } });

    const submitButton = screen.getByText("Adicionar");
    fireEvent.click(submitButton);
    expect(onFinish).toHaveBeenCalled();
  });

  test("displays validation messages if form fields are empty", async () => {
    const onFinish = jest.fn();
    render(<ContactForm onFinish={onFinish} form={form} />);
    const submitButton = screen.getByText("Adicionar");
    fireEvent.click(submitButton);

    await screen.findAllByText(/Por favor, insira/);

    expect(onFinish).not.toBeCalled();
  });
});

