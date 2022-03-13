import ContactForm from "../components/ContactForm";
import ContactList from "../components/ContactList";
import Filter from "../components/Filter";

export default function App() {
  return (
    <>
      <div className="container">
        <h1 style={{ fontSize: "25px" }}>Phonebook</h1>
        <ContactForm />
        <h2 style={{ fontSize: "25px", marginTop: "20px" }}>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </>
  );
}
