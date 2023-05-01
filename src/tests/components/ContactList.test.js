import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import ContactList from "../../components/ContactList";
import 'matchmedia-polyfill';


describe("ContactList", () => {
  const contacts = [
    {
      id: 1,
      name: "João Carlos",
      phone: "123-456-7890",
      email: "joao.doe@example.com",
    },
    {
      id: 2,
      name: "Jaíne Maria",
      phone: "234-567-8901",
      email: "jaine.doe@example.com",
    },
  ];

  const deleteContact = jest.fn();
  const editContact = jest.fn();

  const renderComponent = () =>
    render(
      <ContactList
        contacts={contacts}
        deleteContact={deleteContact}
        editContact={editContact}
      />
    );

  test("renders contact list", () => {
    renderComponent();
    const rows = screen.getAllByRole("row");
    expect(rows).toHaveLength(contacts.length + 1);
  });

  test("edit button triggers editContact function", () => {
    renderComponent();
    const editButtons = screen.getAllByText("Editar");
    fireEvent.click(editButtons[0]);
    expect(editContact).toHaveBeenCalledTimes(1);
    expect(editContact).toHaveBeenCalledWith(contacts[0]);
  });

  test("delete button triggers deleteContact function", () => {
    renderComponent();
    const deleteButtons = screen.getAllByText("Excluir");
    fireEvent.click(deleteButtons[0]);
    expect(deleteContact).toHaveBeenCalledTimes(1);
    expect(deleteContact).toHaveBeenCalledWith(contacts[0]);
  });
});
