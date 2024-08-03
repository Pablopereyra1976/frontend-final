

import React from 'react';
import './NuevoMensajeContactos.css'

import { BsFillChatLeftTextFill, BsTelephone  } from "react-icons/bs";
import { RiChatSmile3Line } from "react-icons/ri";
import { GrGroup } from "react-icons/gr";


 function NuevoMensajeContactos() {


    return (
        <div className="contact-footer">
            <div className="accesos"><BsFillChatLeftTextFill className='icon' />Chats</div>
            <div className="accesos"><RiChatSmile3Line className='icon'/>Novedades</div>
            <div className="accesos"><GrGroup className='icon'/>Comunidades</div>
            <div className="accesos"><BsTelephone className='icon'/>Llamadas</div>
            
            
        </div>
    );
};

export default NuevoMensajeContactos;
