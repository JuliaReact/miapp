import { useState } from "react";
import "./App.css";
//import Formulario from "./componentes/formulario";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [titulo, setTitulo] = useState("La pagina de Cuchi");

  return (
    <div className="App">
      <Routes></Routes>
    </div>
  );
}

export default App;
