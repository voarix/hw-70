import { useAppSelector } from "../app/hooks.ts";
import { selectContacts } from "../store/contactsSlice.ts";
import ContactItem from "../components/ContactItem.tsx";

const Home = () => {
  const contacts = useAppSelector(selectContacts);

  return (
    <div className="container">
      {contacts.length > 0 && (
        contacts.map((contact, index) => (
          <ContactItem contact={contact} key={contact.id+index} />
        ))
      )}
    </div>
  );
};

export default Home;