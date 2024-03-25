import { useState } from 'react';
import React from 'react'
import './App.css';



function App() {
  const [nombre, setnombre] = useState('hola universo')
  
  const saludar= () =>{
    setnombre("cuchi") 
  
  }
  return (
    <div >
      <h1>Mi app</h1>
      <p> {nombre} </p>
      <button type='button' onClick={() => saludar()}>cambiar saludo</button>
     
    </div>
  );
}

export default App;
