import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import ContactForm from "../components/ContactForm";
import ContactList from "../components/ContactList";
import { Form } from "antd";
import "./ContactPage.css"

const ContactPage = () => {
  const [contacts, setContacts] = useState([]);
  const [editingContact, setEditingContact] = useState(null);
  const [form] = Form.useForm();

  useEffect(() => {
    const savedContacts = localStorage.getItem("contacts");
    if (savedContacts) {
      setContacts(JSON.parse(savedContacts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const onFinish = (values) => {
    if (editingContact) {
      setContacts(
        contacts.map((contact) =>
          contact.id === editingContact.id ? { ...contact, ...values } : contact
        )
      );
    } else {
      const newContact = {
        id: uuidv4(),
        name: values.name,
        phone: values.phone,
        email: values.email,
      };
      setContacts([...contacts, newContact]);
    }
    setEditingContact(null);
    form.resetFields();
  };

  const deleteContact = (contactToDelete) => {
    setContacts(
      contacts.filter((contact) => contact.id !== contactToDelete.id)
    );
  };

  const editContact = (contactToEdit) => {
    setEditingContact(contactToEdit);
  };

  return (
    <div className="contact-page">
      <h1>Contatos</h1>
      <div className="contact-form-container">
        <ContactForm contact={editingContact} onFinish={onFinish} form={form} />
      </div>
      <div className="contact-list-container">
        <ContactList
          contacts={contacts}
          deleteContact={deleteContact}
          editContact={editContact}
        />
      </div>
    </div>
  );
};

export default ContactPage;