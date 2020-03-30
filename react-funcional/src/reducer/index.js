import React, { useState } from 'react';
import useStore from '../reducer/somaReducer'


function ReducerHook() {
  // Primeira forma de declarar o HOOK
  const [numero, setNumero] = useState(0)
  const [segundoNumero, setSegundoNumero] = useState(0)
  const [store, dispatch] = useStore()
 

  //SEGUNDA FORMA DE DECLARAR HOOKS

  // const[state, setState] = useState({
  //   numero:0,
  //   segundoNumero:0,
  //   resultado:0
  // })

  const somar = () => {
    const numeroInt = parseInt(numero)
    const segNumInt = parseInt(segundoNumero)
    console.log("dispachando a action")
    dispatch({
        type:'SOMA',
        payload: numeroInt + segNumInt
    })
  }

  const subtrair = ()=>{
      const numeroInt = parseInt(numero)
      const segNumInt = parseInt(segundoNumero)

      dispatch({
          type:'SUBTRAIR',
          payload: numeroInt - segNumInt
      })
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
      <input type="text" value={store.resultado} ></input>
      <br></br>
      <button onClick={somar}>Somar</button>
      <button onClick={subtrair}>Subtrair</button>
    </div>
  );
}

export default ReducerHook;
