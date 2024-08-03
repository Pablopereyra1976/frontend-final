import React, { useState } from "react";
import ListaContactos from "../../Components/Contactos/ListaContactos/ListaContactos";
import Contactos from "../../contactos.json";
import "./BuscarContacto.css";

function BuscarContactos({ contactos }) {
  const [buscar, setBuscar] = useState("");

  const filtrarContactos = Contactos.filter(contacto =>
    `${contacto.nombre} ${contacto.apellido}`.toLowerCase().includes(buscar.toLowerCase())
  );

  return (
    <div className="buscar-cont">
      <input
        type="text"
        value={buscar}
        onChange={(e) => setBuscar(e.target.value)}
        placeholder="Buscar contactos..."
        className="buscar"
      />
      <ListaContactos contactos={filtrarContactos} />
    </div>
  );
}

export default BuscarContactos;