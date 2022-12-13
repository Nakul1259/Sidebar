import React from "react";
import { useGlobalContext } from "./context";
import { FaTimes } from "react-icons/fa";

function Modal() {
  const { isModalOpen, closeModal } = useGlobalContext();
  return (
    <div className={`${isModalOpen ? "modal show-modal" : "modal"}`}>
      <div className="modal-container">
        <h2>Modal Content</h2>
        <button className="close-modal-button" onClick={closeModal}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
}

export default Modal;
