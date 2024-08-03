import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Contactos from "../../contactos.json";
import "./NuevoMensajeForm.css";


 function NuevoMensajeForm({ contacto, onAddMensaje }) {
  const [mensaje, setMensaje] = useState("");
  
  const navigate = useNavigate();
const contactoInfo =  contacto ?Contactos.find(c => c.id === contacto.id) : null;


useEffect(() => {
  console.log('contacto prop: ', contacto);
}, [contacto]);



  const handleInfoContacto = () => {
    
    if(contactoInfo && contacto?.id){
    navigate(`/info/${contacto.id}`);
    } else {
      console.error("el contacto no esta definido o no tiene im ID");
    }
  };

const handleChange = (event) => {
  setMensaje(event.target.value);
};

const handleSubmit = (event) => {
  event.preventDefault();
  if(mensaje.trim() !== "") {
    onAddMensaje(mensaje);
    console.log("mensaje enviado", mensaje);

  setMensaje("");
  }
};



  return (

        <div>
          <form onSubmit={handleSubmit}>
      <div className="input-container">
        <input type="text" placeholder="Escribe aqui" value={mensaje} onChange={handleChange} />
        <button className="enviar" type="submit">Enviar</button>
      </div>
    </form>
      <div className="input-container">
        <button  onClick={handleInfoContacto}>
          Info Contacto
        </button>
        <button  onClick={() => navigate(-1)}>
          Volver
        </button>
      </div>

    </div>
  );
}
export default NuevoMensajeForm ;
