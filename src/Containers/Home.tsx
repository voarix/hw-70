import { useAppSelector } from "../app/hooks.ts";
import { selectContacts } from "../store/contactsSlice.ts";

const Home = () => {
  const contacts = useAppSelector(selectContacts);

  return (
    <div className="container">
      {contacts.length > 0 && (
        contacts.map((contact, index) => (
          <div key={contact.id + index}>{contact.name}</div>
        ))
      )}
    </div>
  );
};

export default Home;