import React, { useState } from "react";
import MOOK_MENSAJES from "../../contactos.json";
import Imagenes from "../../../Imagenes";
import "./MensajeContactos.css";
import { Link } from "react-router-dom";

function MensajeContactos2() {
  const [buscar, setBuscar] = useState("");

  const filtrarContactos = MOOK_MENSAJES.filter((contacto) =>
    `${contacto.nombre} ${contacto.apellido}`
      .toLowerCase()
      .includes(buscar.toLowerCase())
  );

  return (
    <div className="container">
      <input
        type="text"
        value={buscar}
        onChange={(e) => setBuscar(e.target.value)}
        placeholder="Buscar contactos..."
        className="buscar"
      />
      {filtrarContactos.map((contacto) => {
        const ultimoMensaje =
          contacto.mensajes.length > 0
            ? contacto.mensajes[contacto.mensajes.length - 1]
            : null;

        return (
          <Link
            key={contacto.id}
            to={`/contactosId/${contacto.id}`}
            className="link"
          >
            <div className="contacto-container">
              <img src={Imagenes[contacto.image]} alt="image" />
              <div className="mensaje-nombre-container">
                <p className="mensaje-nombre">
                  <strong>{contacto.nombre}</strong>
                </p>
                {ultimoMensaje && (
                  <div className={`mensaje-detalle `}>
                    <p className="mensaje-texto-cont">{ultimoMensaje.texto}</p>
                  </div>
                )}
              </div>
              <div className="mensaje-info">{contacto.ultima_conexion}</div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default MensajeContactos2;
