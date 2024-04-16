import { useState } from "react";
import "./App.css";

function App() {
  const [nombre, setNombre] = useState("mundo");
  return (
    <div>
      <h1>Mi app</h1>
      <p>hola {nombre}</p>
    </div>
  );
}

export default App;
