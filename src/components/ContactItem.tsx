import { Contact } from "../types";
import React, { useState } from "react";
import Modal from "../UI/Modal/Modal.tsx";

interface ContactItemProps {
  contact: Contact;
}

const ContactItem: React.FC<ContactItemProps> = ({contact}) => {
  const [modal, setModal] = useState(false);

  const onCloseModal = () => {
    setModal(false);
  };

  return (
    <>
      <div className="card mb-4 shadow-sm" onClick={() => setModal(true)}>
        <div className="card-body d-flex justify-content-between">
          <img src={contact.photo} alt={contact.name} style={{maxWidth: "200px"}} className="rounded"/>
          <h2 className="card-title mt-2">{contact.name}</h2>
        </div>
      </div>

      {modal && (
        <Modal contact={contact} onClose={onCloseModal}/>
      )}
    </>
  );
};

export default ContactItem;