import React from 'react';
import ChatHeader from '../../Components/Chat/ChatHeaderInfo/ChatHeader';
import ListamensajesChat from '../../Components/Chat/ListaMensajes/ListaMensajes';
import NuevoMensajeForm from '../../Components/Chat/MensajeForm/NuevoMensajeForm';
import './ChatScreem.css';





 function ChatScreem() {
  return (
    <div className='chat-screen'>
        <ChatHeader/>
        <ListamensajesChat />
        <NuevoMensajeForm />
    </div>
  )
}
export {ChatScreem}