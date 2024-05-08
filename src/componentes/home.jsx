import React from "react";
import { Link, NavLink } from "react";

const Home = () => {
  return (
    <div>
      Soy el Home
      <NavLink to="/formulario" className="botton-general">
        <button type="button">Formulario</button>
      </NavLink>
      <Link to="/saludar" className="boton-general">
        <button type="button">hola</button>;
      </Link>
    </div>
  );
};

export default Home;
