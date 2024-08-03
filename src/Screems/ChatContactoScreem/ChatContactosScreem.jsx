import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Contactos from "../../Components/contactos.json";
import ChatUsuario from "../../Components/Chatusuarios/ChatUsuario"
import NuevoMensajeForm from "../../Components/Chat/MensajeForm/NuevoMensajeForm";






function ChatContactosScreem() {
  
  const { id }  = useParams(); 
  const contacto = Contactos.find((c) => c.id === id);
const [mensajes, setMensajes] = useState([]);

  const handleAddMensaje = (mensaje) => {
    setMensajes((prevMensajes) => [...prevMensajes, {autor: "yo", texto: mensaje, estado: "visto"}]);
  }

  return (

    <div className="chat-screen">
      <ChatUsuario mensajes={mensajes}/>
      <NuevoMensajeForm contacto={contacto} onAddMensaje={handleAddMensaje} />
    </div>
  );
}
export { ChatContactosScreem };
