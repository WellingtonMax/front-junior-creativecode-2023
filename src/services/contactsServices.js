export const getContacts = () => {
    return JSON.parse(localStorage.getItem("contacts")) || [];
  };
  
  export const saveContacts = (contacts) => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  };
  
  export const deleteContact = (contacts, contact) => {
    const updatedContacts = contacts.filter((c) => c.id !== contact.id);
    saveContacts(updatedContacts);
    return updatedContacts;
  };