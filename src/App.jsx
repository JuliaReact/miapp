import { useState } from "react";
import "./App.css";
import Formulario from "./componentes/formulario";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//import Pintanombre from "./componentes/pintanombre";
import Saludar from "./componentes/saludar";
import Home from "./componentes/home";

function App() {
  const [titulo, setTitulo] = useState("La pagina de Cuchi");

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact patch="/" element={<Home />} />
          <Route exact patch="/formulario" element={<Formulario />} />
          <Route exact patch="/saludar" element={<Saludar />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
