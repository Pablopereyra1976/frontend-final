import React, { useState } from "react";
import ListaContactos from "../../Components/Contactos/ListaContactos/ListaContactos";
import Contactos from "../../contactos.json";

function BuscarContactos({ contactos }) {
  const [buscar, setBuscar] = useState("");

  const filtrarContactos = Contactos.filter(contacto =>
    `${contacto.nombre} ${contacto.apellido}`.toLowerCase().includes(buscar.toLowerCase())
  );

  return (
    <div className="search-contacts">
      <input
        type="text"
        value={buscar}
        onChange={(e) => setBuscar(e.target.value)}
        placeholder="Buscar contactos..."
        className="search-input"
      />
      <ListaContactos contactos={filtrarContactos} />
    </div>
  );
}

export default BuscarContactos;
