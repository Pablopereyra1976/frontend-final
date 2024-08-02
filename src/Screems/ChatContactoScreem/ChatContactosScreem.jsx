import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Contactos from "../../Components/contactos.json";
import ChatUsuario from "../../Components/Chatusuarios/ChatUsuario"
import NuevoMensajeForm from "../../Components/Chat/MensajeForm/NuevoMensajeForm";






function ChatContactosScreem() {
  
  const { id } = useParams();
  const contacto = Contactos.find((c) => c.id === Number(id));
const [mensajes, setMensajes] = useState(contacto ? contacto.mensajes : [])

  const handleAddMensaje = (mensaje) => {
    setMensajes((prevMensajes) => [...prevMensajes, {autor: "yo", texto: mensaje, estado: "visto"}]);
  }

  return (

    <div className="chat-screen">
      <ChatUsuario />
      <NuevoMensajeForm contacto={contacto} onAddMensaje={handleAddMensaje} />
    </div>
  );
}
export { ChatContactosScreem };
