import { Contact } from "../../types";
import React from "react";
import { useNavigate } from "react-router-dom";

interface ModalProps {
  contact: Contact;
  onClose: React.MouseEventHandler;
}

const Modal: React.FC<ModalProps> = ({contact, onClose}) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="modal-backdrop show" onClick={onClose}></div>

      <div className="modal fade show d-block" tabIndex={-1} role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title">{contact.name}</h3>
              <button
                type="button"
                className="btn-close"
                onClick={onClose}
              ></button>
            </div>
            <div className="modal-body text-center d-flex justify-content-between">
              <div className="mb-3">
                <img
                  src={contact.photo}
                  alt={contact.name}
                  className="rounded"
                  style={{ maxWidth: '200px' }}
                />
              </div>
              <div className="d-flex flex-column align-items-center">
                <h5>{contact.phone}</h5>
                <h5>{contact.email}</h5>
              </div>
            </div>
            <div className="modal-footer d-flex justify-content-between">
              <button className="btn btn-secondary" onClick={() => navigate(`/edit/${contact.id}`)}>
                Edit
              </button>
              <button className="btn btn-danger">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;