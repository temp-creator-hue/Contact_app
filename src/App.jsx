
import { useState } from "react";
import ContactForm from "./components/contactForm";
import UserList from "./components/userList";
import "./App.css";

function App() {
  const [contacts, setContacts] = useState([]);

  // Function to add a new contact
  const addContact = (newContact) => {
    setContacts([...contacts, { ...newContact, id: Date.now() }]);
  };

  return (
    <div className="app-container">
      <header className="header">
        <h1>Contact Manager</h1>
        <p>Manage your contacts in one place.</p>
      </header>

      <main>
        <ContactForm onAddContact={addContact} />

        <section className="contacts-section">
          <h2>My Contacts</h2>
          <p className="contact-count">
            Total Contacts: {contacts.length}
          </p>

          <UserList contacts={contacts} />
        </section>
      </main>
    </div>
  );
}

export default App;
