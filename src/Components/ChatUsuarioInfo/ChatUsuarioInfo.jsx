import React from "react";
import { useParams } from "react-router-dom";
import Contactos from "../contactos.json";


function ChatUsuarioInfo() {
  const { id } = useParams();
  const contacto = Contactos.find((contacto) => contacto.id === Number(id));
  const mensaje = Contactos;


  return (
    <div className="mensaje-container">
      {contacto.mensajes.map((mensaje) => (
        <div>
          <img src={contacto.Imagenes} alt="" />
          <p className="mensaje-texto">
            <strong>{mensaje.autor}</strong>
          </p>
        </div>
      ))}
    </div>
  );
}

export default ChatUsuarioInfo;
