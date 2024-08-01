import React from "react";
import "./ContactoScreem.css";
import ContactoHeader from "../../Components/Contactos/Contactoheader/ContactoHeader";

import NuevoMensajeContacto from "../../Components/Contactos/MensajeFormContactos/NuevoMensajeContactos";
import ListaMensajeContacto from "../../Components/Contactos/ListaMensajeContacto/ListaMensajeContacto";

function ContactoScreem() {
  return (
    <div className="contacto-screen">
      <ContactoHeader />
      <ListaMensajeContacto />
      <NuevoMensajeContacto />
    </div>
  );
}
export { ContactoScreem };
