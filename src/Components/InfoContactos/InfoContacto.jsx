
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Imagenes from "../../Imagenes";
import Contactos from "../contactos.json";
import "./InfoContacto.css";



function InfoContacto() {


  const { id } = useParams();
  const navigate = useNavigate();
  const [contacto, setContacto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

 

  useEffect(() => {

const timer = setTimeout(() => {
    const contacto = Contactos.find((contacto) => contacto.id === Number(id));
    
    if (contacto) {
      setContacto(contacto);
     
    }else{
      setError("Error al obtener los datos");
    }
    setLoading(false);
      
    }
  ,1000);
  
  return() => clearTimeout(timer);

  }, [id]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!contacto) {
    return <div>No se encontró el contacto</div>;
  }

  const imagenPerfil = Imagenes[contacto.image];

  return (
    <div className="info-contacto-container">
      <div className="info-header">
        <img src={imagenPerfil} className="imagenperfilinfo" alt="foto de perfil" />
      </div>
      <div className="info-nombreapellido">
        <h1>{contacto.nombre}</h1>
        <h1>{contacto.apellido}</h1>
      </div>
      <div className="info-detalles">
        <br />
        <p>
          <strong>Teléfono: </strong> {contacto.numero}
        </p>
        <br />
        <p>
          <strong>Email: </strong> {contacto.email}
        </p>
        <br />
        <p>
          <strong>Dirección: </strong> {contacto.direccion}
        </p>
      </div>
      <button className="volver" onClick={() => navigate(-1)}>Volver</button>
    </div>
  );
}

export default InfoContacto ;
