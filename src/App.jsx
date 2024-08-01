import React from "react";
import { Routes, Route } from "react-router-dom";
import { ChatScreem } from "./Screems/ChatScreem/ChatScreem";
import { ContactoScreem } from "./Screems/ContactoScreem/ContactoScreem";
import { ChatContactosScreem } from "./Screems/ChatContactoScreem/ChatContactosScreem";
import { InfoContacto } from "./Components/InfoContactos/InfoContacto";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ContactoScreem />} />
        <Route path="/contactosId/:id" element={<ChatContactosScreem />} />
        <Route path="/chat" element={<ChatScreem />} />
        <Route path="/info/:id" element={<InfoContacto />} />
      </Routes>
    </div>
  );
}

export default App;
