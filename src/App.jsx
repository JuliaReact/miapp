import { useState } from "react";
import "./App.css";
import Formulario from "./componentes/formulario";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
//import Pintanombre from "./componentes/pintanombre";
import Saludar from "./componentes/saludar";

function App() {
  const [titulo, setTitulo] = useState("La pagina de Cuchi");

  return (
    <div className="App">
      <Routes>
        <Switch>
          <Route exact patch="/formulario" component={Formulario} />
          <Route exact patch="/saludar" component={Saludar} />
        </Switch>
      </Routes>
    </div>
  );
}

export default App;
