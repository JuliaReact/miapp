import { useState } from "react";
import "./App.css";

function App() {
  const [nombre, setNombre] = useState("mundo");

  const saludar = () => {
    console.log("ejacuta las funcion");
    setNombre("cuchi");
  };

  return (
    <div>
      <div>
        <h1>Mi app</h1>
        <p>hola {nombre}</p>
      </div>
      <button type="button" onClick={() => saludar()}>
        cambiar saludo
      </button>
    </div>
  );
}

export default App;
