import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Contactos from "../../Components/contactos.json";
import ChatUsuario from "../../Components/Chatusuarios/ChatUsuario"
import NuevoMensajeForm from "../../Components/Chat/MensajeForm/NuevoMensajeForm";


localStorage.clear();

function ChatContactosScreem() {
  
  const { id }  = useParams(); 
  const contacto = Contactos.find((c) => c.id === Number(id));
const [mensajes, setMensajes] = useState([]);

useEffect(() => {
  console.log('ID del contacto:', id);
  const almacenarMensajes = localStorage.getItem(`mensaje_${id}`);
  if (almacenarMensajes) {
    setMensajes(JSON.parse(almacenarMensajes));
    console.log('mensajes recuperados:', JSON.parse(almacenarMensajes));
  }
}, [id]);



  const handleAddMensaje = (mensaje) => {
    const NuevoMensajes = [...mensajes, {autor: "yo", texto: mensaje, estado: "visto"}];
    setMensajes(NuevoMensajes);

    console.log('guardando mensajes en localstorage: ', NuevoMensajes);


    localStorage.setItem('mensaje_${id}', JSON.stringify(NuevoMensajes));
    
  };

  return (

    <div className="chat-screen">
      <ChatUsuario mensajes={mensajes}/>
      <NuevoMensajeForm contacto={contacto} onAddMensaje={handleAddMensaje} />
    </div>
  );
}
export { ChatContactosScreem };
