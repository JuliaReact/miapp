import { useState } from "react";
import "./App.css";
import Formulario from "./componentes/formulario";

function App() {
  const [titulo, setTitulo] = useState("La pagina de Cuchi");

  return (
    <div className="superGeneral">
      <Formulario miTitulo={titulo} />
    </div>
  );
}

export default App;
