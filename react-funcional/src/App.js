import React, { useState, useEffect } from 'react';


function App() {
  // Primeira forma de declarar o HOOK
  const [numero, setNumero] = useState(0)
  const [segundoNumero, setSegundoNumero] = useState(0)
  const [resultado, setResultado] = useState(0)

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

  /*pode ser utilizado como comonendDidMount()
  useEfect tem dois parâmetros, o primeiro é uma
  função, o segundo é opcional, que é um array
  o array serve para passar as variáveis de estado
  toda vez que ela for modificado, o useEffect será
  executado novamente.
  se não for passado o array como segundo parâmetro,
  ele será executado toda vez que qualquer variável for modificada
  */
  useEffect(()=>{
    console.log('variável número ', numero)
  },[numero])



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
