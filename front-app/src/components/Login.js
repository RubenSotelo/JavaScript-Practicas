import React, { useState } from "react";

let Id = 0;
export const Login = () => {
  const [valor,setValor] = useState()
  const [calificaciones,setCalificaciones] = useState([])

  const agregar = () =>{
    setCalificaciones(valor)
  }

  return (<div>
    <input value={valor} placeholder="Calificacion" onChange={(e) => setValor(e.target.value)}/>
    <button onClick={agregar}>Click</button>
    <ul>
      {calificaciones.map(calificacion =>(
        <li key={Id++}>{calificacion}</li>
      ))}
    </ul>
  </div>)

};
