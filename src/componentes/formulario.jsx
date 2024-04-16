import React, { useState } from "react";

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  return (
    <div>
      <form>
        <p className="tnom">nombre</p>
        <input
          type="text"
          id="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <p className="tlf">telefono</p>
        <input
          type="text"
          id="telefono"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Formulario;
