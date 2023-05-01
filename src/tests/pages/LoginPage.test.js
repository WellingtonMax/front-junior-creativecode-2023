import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import LoginPage from "../../pages/LoginPage";

test("renders login page", () => {
  render(<LoginPage />);
  expect(screen.getByText("Login")).toBeInTheDocument();
});

test("submit button is disabled if form is not filled out", () => {
  render(<LoginPage />);
  const submitButton = screen.getByText("Log in");
  fireEvent.click(submitButton);
  expect(submitButton).toBeDisabled();
});

test("displays validation messages if form fields are empty", async () => {
  render(<LoginPage />);
  const submitButton = screen.getByText("Log in");
  fireEvent.click(submitButton);
  const usernameError = await screen.findByText("Please input your username!");
  const passwordError = await screen.findByText("Please input your password!");
  expect(usernameError).toBeInTheDocument();
  expect(passwordError).toBeInTheDocument();
});

test("calls handleLogin function when form is submitted with valid credentials", async () => {
  const handleLogin = jest.fn();
  render(<LoginPage handleLogin={handleLogin} />);
  fireEvent.change(screen.getByLabelText("Username"), {
    target: { value: "user@example.com" },
  });
  fireEvent.change(screen.getByLabelText("Password"), {
    target: { value: "password" },
  });
  fireEvent.click(screen.getByText("Log in"));
  expect(handleLogin).toHaveBeenCalledTimes(1);
  expect(handleLogin).toHaveBeenCalledWith("user@example.com", "password");
});

test("displays error message if handleLogin function throws an error", async () => {
  const handleLogin = jest.fn(() => {
    throw new Error();
  });
  render(<LoginPage handleLogin={handleLogin} />);
  fireEvent.change(screen.getByLabelText("Username"), {
    target: { value: "user@example.com" },
  });
  fireEvent.change(screen.getByLabelText("Password"), {
    target: { value: "password" },
  });
  fireEvent.click(screen.getByText("Log in"));
  const errorMessage = await screen.findByText("Invalid username or password");
  expect(errorMessage).toBeInTheDocument();
});

