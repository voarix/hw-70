import * as React from "react";
import { useState } from "react";
import { Contact, ContactMutation } from "../types";

interface Props {
  onSubmitAdd: (newContact: Contact) => void;
  idContact?: string;
  isEdit?: boolean;
}

const initialForm: ContactMutation = {
  name: "",
  phone: "",
  email: "",
  photo: ""
};

const DishForm: React.FC<Props> = ({onSubmitAdd, idContact, isEdit = false}) => {
  const [form, setForm] = useState<ContactMutation>(initialForm);

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {value, name} = e.target;
    setForm(prevState => ({...prevState, [name]: value}));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmitAdd({...form, id: Math.random().toString()});
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

        <button type="submit" className="btn btn-primary mt-4">
          <span className="me-2">{isEdit ? "Edit" : "Add"}</span>
        </button>
      </form>
    </>

  );
};

export default DishForm;