import React from "react";
import { useParams } from "react-router-dom";
import Contactos from "../contactos.json";
import Imagenes from "../../Imagenes";
import "./ChatUsuario.css";



function ChatUsuario({ mensajes: NuevosMensajes }) {

  const { id } = useParams();
  const contacto = Contactos.find((contacto) => contacto.id === Number(id));
  const { visto, entregado, noEntregado } = Imagenes;
  const imagenPerfil = Imagenes[contacto.image];

const todosLosMensajes = [...contacto.mensajes, ...NuevosMensajes];

  return (
    <div className="mensaje-container">
      <div className="header">
        <img src={imagenPerfil} className="imagenperfil" alt="foto" />
        <p className="nombreperfil">{contacto.nombre}</p>

      </div>
      {todosLosMensajes.map((mensaje, index) => (
        <div key={index}>
          <div className={`mensaje ${mensaje.autor}`}>
            <p className="mensaje-texto">
              <strong>{mensaje.autor}</strong>
            </p>
            <p className="mensaje-texto">{mensaje.texto}</p>
            <div className="mensaje-info">
              {mensaje.hora}
              <img
                className="estado"
                src={mensaje.estado === "visto"
                  ? visto
                  : mensaje.estado === "entregado"
                    ? entregado
                    : noEntregado}
                alt={mensaje.estado} />
            </div>
          </div>
        </div>

      ))}
      
  

    </div >
  );
}

export default ChatUsuario;
