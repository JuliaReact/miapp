import React, { useState } from 'react'
import Titulo from './titulo'

const Formulario = ({miTitulo}) => {
    const [nombre, setnombre] = useState('')
    return (
        <div>
            <Titulo miTitulo={miTitulo}/>
            <div>
                <h1>FORMULARIO DE DATOS</h1>
                <form>
                    <input type='text' id='nombre' value={nombre} onChange={e=>setnombre(e.target.value)}></input>
                    
                </form>
            </div>
        </div>
    );
}

export default Formulario;