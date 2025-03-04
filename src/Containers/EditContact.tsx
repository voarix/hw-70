import ContactForm from "../components/ContactForm.tsx";
import { useNavigate, useParams } from "react-router-dom";
import { Contact } from "../types";
import { useAppDispatch, useAppSelector } from "../app/hooks.ts";
import { editContact, selectContacts } from "../store/contactsSlice.ts";

const EditContact = () => {
  const {idContact} = useParams();
  const contacts = useAppSelector(selectContacts);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmitEdit = (contact: Contact) => {
    dispatch(editContact(contact));
    navigate("/");
  };

  const myContactArr = contacts.filter((contact) => contact.id === idContact);

  return (
    <div>
      {myContactArr.length > 0 ? (
        <ContactForm isEdit idContact={idContact} onSubmitAdd={onSubmitEdit} myContact={myContactArr[0]} />
      ) : <h1>Contact not found</h1>}

    </div>
  );
};

export default EditContact;