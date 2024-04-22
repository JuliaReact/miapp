import React, { useState } from "react";
import Titulo from "./titulo";
import Pintanombre from "./pintanombre";
import "../css/estilos.css";

const Formulario = ({ miTitulo }) => {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");

  return (
    <div className="principal">
      <Titulo miTitulo={miTitulo} />
      <div className="general">
        <form className="encuadre">
          <p className="tnom">NOMBRE</p>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          <p className="telef">TELEFONO</p>
          <input
            type="text"
            id="telefono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />
        </form>
      </div>
      <Pintanombre nombre={nombre} telefono={telefono} />
    </div>
  );
};

export default Formulario;
