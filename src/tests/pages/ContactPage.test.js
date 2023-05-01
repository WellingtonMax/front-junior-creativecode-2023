import React from "react";
import { shallow } from "enzyme";
import ContactPage from "../../pages/ContactPage";
import ContactForm from "../../components/ContactForm";
import ContactList from "../../components/ContactList";
import 'matchmedia-polyfill';


describe("ContactPage", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ContactPage />);
  });

  it("should render a ContactForm component", () => {
    expect(wrapper.find(ContactForm)).toHaveLength(1);
  });

  it("should render a ContactList component", () => {
    expect(wrapper.find(ContactList)).toHaveLength(1);
  });

  it("should add a new contact when ContactForm onFinish is called", () => {
    const newContact = {
      id: "123",
      name: "João Carlos",
      phone: "1234567890",
      email: "joaocarlos@example.com",
    };

    const contactForm = wrapper.find(ContactForm);
    contactForm.prop("onFinish")(newContact);

    const updatedContactList = wrapper.find(ContactList).prop("contacts");
    expect(updatedContactList).toContainEqual(newContact);
  });

  it("should edit a contact when ContactForm onFinish is called with editingContact", () => {
    const existingContact = {
      id: "123",
      name: "João Carlos",
      phone: "1234567890",
      email: "joaocarlos@example.com",
    };
    const editedContact = {
      ...existingContact,
      name: "Jaíne Maria",
      email: "jainemaria@example.com",
    };

    wrapper.setState({ contacts: [existingContact], editingContact: existingContact });

    const contactForm = wrapper.find(ContactForm);
    contactForm.prop("onFinish")(editedContact);

    const updatedContactList = wrapper.find(ContactList).prop("contacts");
    expect(updatedContactList).toContainEqual(editedContact);
  });

  it("should delete a contact when ContactList deleteContact is called", () => {
    const existingContact = {
      id: "123",
      name: "João Carlos",
      phone: "1234567890",
      email: "joaocarlos@example.com",
    };

    wrapper.setState({ contacts: [existingContact] });

    const contactList = wrapper.find(ContactList);
    contactList.prop("deleteContact")(existingContact);

    const updatedContactList = wrapper.find(ContactList).prop("contacts");
    expect(updatedContactList).not.toContainEqual(existingContact);
  });
});
