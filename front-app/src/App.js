import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [estilo, setEstilo] = useState('estilo1')
  const [btn, setBtn] = useState('btn1')
  const [text, setText] = useState('')
  const [numero, setNumero] = useState(0)

  const cambiarEstilo = (nuevoNombre) =>{
    setEstilo("estilo"+nuevoNombre)
    setBtn("btn"+nuevoNombre)
  }
  const obtenerDato = (dato)=>{
    setNumero(Number.parseInt(dato))
  }

  const calcularPar = ()=>{
    let resultado = numero % 2
    if(resultado === 0)
      setText("Es Par")
    else
      setText("Es Inpar")

  }

  return (
    <div className={estilo}>
      <header>
        <input type='text' id='numero' onChange={e => obtenerDato(e.target.value)}></input>
        <button className={btn} onClick={calcularPar}>Calcular</button>
        <h1>{text}</h1>
        <button className={btn} id='1' onClick={e => cambiarEstilo(e.target.id)}>Estilo1</button>
        <button className={btn} id='2' onClick={e => cambiarEstilo(e.target.id)}>Estilo2</button>
        <button className={btn} id='3' onClick={e => cambiarEstilo(e.target.id)}>Estilo3</button>
      </header>
    </div>
  );
}

export default App;
