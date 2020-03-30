import React, { useState } from 'react';


function App() {
  // Primeira forma de declarar o HOOK
  const [numero, setNumero] = useState()
  const [segundoNumero, setSegundoNumero] = useState()
  const [resultado, setResultado] = useState()

  //SEGUNDA FORMA DE DECLARAR HOOKS

  // const[state, setState] = useState({
  //   numero:0,
  //   segundoNumero:0,
  //   resultado:0
  // })

  const somar = () => {
    const numeroInt = parseInt(numero)
    const segNumInt = parseInt(segundoNumero)
    setResultado(numeroInt + segNumInt)
  }



  return (
    <div>
      Número 1: <br></br>
      <input type="text" value={numero} onChange={(e) => setNumero(e.target.value)}></input>
      <br></br>
      <br></br>
      Número 2: <br></br>
      <input type="text" value={segundoNumero} onChange={(e) => setSegundoNumero(e.target.value)}></input>
      <br></br>
      <br></br>
      Resultado: <br></br>
      <input type="text" value={resultado} ></input>
      <br></br>
      <button onClick={somar}>Somar</button>
    </div>
  );
}

export default App;
