import { useState } from 'react';
import React from 'react'
import './App.css';
import Formulario from './componentes/formulario';


function App() {
  const[titulo, setTitulo]= useState('LA PAGINA DE CUCHI')
  return (
    <div >
         <Formulario miTitulo={titulo}/>
    </div>
  );

}

export default App;
