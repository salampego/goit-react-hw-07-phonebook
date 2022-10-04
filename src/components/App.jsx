import './App.css';

import { ContactForm } from './ContactForm/contactForm';
import { Filter } from './Filter/filter';
import { ContactList } from './ContactList/contactList';

export function App() {
  return (
    <div className="container">
      <div className="form-container">
        <h1>Phonebook</h1>
        <ContactForm />
      </div>
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
