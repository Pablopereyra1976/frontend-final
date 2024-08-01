import React from "react";
import MOOK_MENSAJES from "../../../Components/Mensajes.json";
import  Imagenes   from "../../../Imagenes";
import "./mensaje.css";

function Mensajes() {
  const mensaje = MOOK_MENSAJES;
  const {visto, entregado, noEntregado} = Imagenes
  return (
    <div className="mensaje-container">
      {MOOK_MENSAJES.map((mensaje) => (
        <div key={mensaje.id} className={`mensaje ${mensaje.autor}`}>
          <p className="mensaje-texto">
            <strong>{mensaje.autor}</strong>
          </p>
          <p className="mensaje-texto">{mensaje.texto}</p>
          <div className="mensaje-info">
            {mensaje.hora}
            <img
              className="estado"
              src={
                mensaje.estado === "visto"
                  ? visto
                  : mensaje.estado === "entregado"
                  ? entregado
                  : noEntregado
              }
              alt={mensaje.estado}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
export default Mensajes;
