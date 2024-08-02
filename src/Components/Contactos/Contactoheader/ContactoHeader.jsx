import React from "react";
import { useState } from "react";
import { CiCamera } from "react-icons/ci";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoMdSearch } from "react-icons/io";
import "./ContactoHeader.css";

function ContactoHeader() {
  const [buscarContacto, setBuscarContacto] = useState("");

  const handleBuscarContacto = (event) => {
    setBuscarContacto(event.target.value);
  };

  return (
    <div className="contact-header">
      <div className="logo"> WhatsApp</div>
      
      <div className="iconos">
        <CiCamera />
        <IoMdSearch />
        <BsThreeDotsVertical />
      </div>
    </div>
  );
}
export default ContactoHeader;
