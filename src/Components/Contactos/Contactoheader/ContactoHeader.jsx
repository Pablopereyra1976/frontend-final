import React from "react";
import { CiCamera   } from "react-icons/ci";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoMdSearch } from "react-icons/io";
import "./ContactoHeader.css";

function ContactoHeader() {
  return (
    /*<div>
      <div className="contacto-header">
        <h2 className="title">WhatsaApp</h2>
        <div className="camara">
          <FiCamera />
        </div>
        <div className="contacto-icon">
          <FaEllipsisV />
        </div>
      </div>
      <button className="contacto-btn" onClick={() => window.location.reload()}>
        <FaMagnifyingGlass className="icon-glass" />
        Buscar...
      </button>
    </div>*/

<div className="contact-header">
<div className='logo'> WhatsApp</div> <div className="iconos"><CiCamera /><IoMdSearch /><BsThreeDotsVertical /></div>
</div>
  );
}
export default ContactoHeader;
