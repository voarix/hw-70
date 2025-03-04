import * as React from "react";
import { useEffect, useState } from "react";
import { Contact, ContactMutation } from "../types";

interface Props {
  onSubmitAdd: (newContact: Contact) => void;
  myContact?: Contact;
  idContact?: string;
  isEdit?: boolean;
}

const initialForm: ContactMutation = {
  name: "",
  phone: "",
  email: "",
  photo: ""
};

const ContactForm: React.FC<Props> = ({onSubmitAdd, idContact, isEdit = false, myContact}) => {
  const [form, setForm] = useState<ContactMutation>(initialForm);
  const [imagePhotoUrl, setImagePhotoUrl] = useState("");

  useEffect(() => {
    if (isEdit && idContact && myContact) {
      setForm(myContact);
    }
  }, [idContact, myContact, isEdit]);

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {value, name} = e.target;
    setForm(prevState => ({...prevState, [name]: value}));

    if(name === 'photo'){
      setImagePhotoUrl(value);
    }
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.name.trim() && form.phone.trim() && form.email.trim() && form.photo.trim()) {
      onSubmitAdd({...form, id: idContact || Math.random().toString()});
    } else {
      alert("Заполните все поля");
    }
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <h4>{isEdit ? "Edit" : "Add new"} contact</h4>
        <hr/>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            value={form.name}
            onChange={inputChangeHandler}
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            name="phone"
            className="form-control"
            value={form.phone}
            onChange={inputChangeHandler}/>
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            className="form-control"
            value={form.email}
            onChange={inputChangeHandler}
          />
        </div>

        <div className="form-group">
          <label htmlFor="photo">Photo</label>
          <input
            type="text"
            id="photo"
            name="photo"
            className="form-control"
            value={form.photo}
            onChange={inputChangeHandler}
          />
        </div>

        {imagePhotoUrl && (
          <div className="mb-3 mt-3">
            <img
              src={imagePhotoUrl}
              alt={form.photo}
              className="img-fluid rounded "
              style={{ maxWidth: "200px", maxHeight: "200px" }}
            />
          </div>
        )}

        <button type="submit" className="btn btn-primary mt-4">
          <span className="me-2">{isEdit ? "Edit" : "Add"}</span>
        </button>
      </form>
    </>

  );
};

export default ContactForm;