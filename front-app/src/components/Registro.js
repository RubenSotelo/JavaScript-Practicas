import React, { useState } from "react";
import './registro.css'

let nextId = 0;

export const Registro = () => {
  const [name, setName] = useState('');
  const [artists, setArtists] = useState([]);
  
  const agregar = (nameNuevo) =>{
    setName(nameNuevo)
  }

  const insertar = () =>{
    let valor = Number.parseFloat(name)
    let resultado = ""
    if(valor < 69)
      resultado = "F"
    else if( valor < 70 && valor >= 69)
        resultado = "D"
    else if(valor < 80 && valor >= 70)
      resultado = "C"
    else if(valor < 90 && valor >= 80)
      resultado = "B"
    else if(valor >= 90)
      resultado = "A"
    setArtists([...artists,resultado])
  }

  return (
    <div className="alternating-colors">
      <h1>CALIFICACIONES</h1>
      <input onChange={e => agregar(e.target.value)}/>
      <button onClick={insertar}>Calificar</button>
      <ol>
        {artists.map(artist => (
          <li key={nextId++}>{artist}</li>
        ))}
      </ol>
    </div>
  );
};
