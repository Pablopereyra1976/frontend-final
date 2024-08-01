import React from "react";
import { CiCamera   } from "react-icons/ci";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoMdSearch } from "react-icons/io";
import "./ContactoHeader.css";

function ContactoHeader() {
  return (
    
<div className="contact-header">
<div className='logo'> WhatsApp</div> <div className="iconos"><CiCamera /><IoMdSearch /><BsThreeDotsVertical /></div>
</div>
  );
}
export default ContactoHeader;
