import React from "react";
import "./ChatHeader.css";
import Imagenes  from "../../../Imagenes";
import { FaEllipsisVertical } from "react-icons/fa6";


function ChatHeader() {
  const {fotoperfil} = Imagenes
  return (
    <div className="chat-header">
      <img src={ fotoperfil } alt="foto" />
      <div className="contact-info">
        <div className="contact-name">Pedro</div>
        <div className="contact-status">Online</div>
      </div>
      <div className="container-icon">
        <h1 className="icon"><FaEllipsisVertical /></h1>
      </div>
    </div>
  );
}
export default ChatHeader;
