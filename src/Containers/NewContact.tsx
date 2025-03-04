import { Contact } from "../types";
import { useAppDispatch } from "../app/hooks.ts";
import ContactForm from "../components/ContactForm.tsx";
import { addContact } from "../store/contactsSlice.ts";
import { useNavigate } from "react-router-dom";

const NewContact = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmitAddNewPost = (newContact: Contact) => {
    dispatch(addContact(newContact));
    navigate("/");
  };

  return (
    <div className="container">
      <ContactForm onSubmitAdd={onSubmitAddNewPost} />
    </div>
  );
};

export default NewContact;