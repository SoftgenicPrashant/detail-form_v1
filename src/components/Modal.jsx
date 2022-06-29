import React from "react";
import "../css/Modal.css";
import "../css/tickets.css";

const Modal = (props) => {
  const onClose = (e) => {
    props.onClose && props.onClose(e);
  };

  if (!props.show) {
    return null;
  } else {
    return (
      <div className="modal-container">
        <h2>Form submitted succesfully</h2>
        {/* <p className="modal-name">{"Name: " + props.formData.name}</p> */}
        <p className="modal-region">{"Region: " + props.formData.region}</p>
        {props.formData.tickets.map((ticket, index) => {
          return (
            <div className="ticket-card" key={index}>
              <div className="top">
                <p>{ticket.name}</p>
              </div>
              <div className="middle">
                <p>{ticket.value}</p>
              </div>
            </div>
          );
        })}

        <div>{props.children}</div>
        <button
          style={{ maxWidth: "150px", color: "white" }}
          className="toggle-button"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    );
  }
};

export default Modal;
