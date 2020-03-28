import React from 'react';

function App(props) {

  const modificarNome = (event)=>{
    console.log(event.target.value)
  }
  const criaComboBox = () => {
    const opcoes = ["Fulano", "Ciclano"]
    const compboBoxOpcoes = opcoes.map(opcao => <option>{opcao}</option>)

    return (
      <select>
        {compboBoxOpcoes}
      </select>
    )
  }

  const MeuComboBox = () => criaComboBox()

  return (
    <>
      <input
        type="text"
        placeholder="Digite seu texto aqui"
        onChange={modificarNome}
      />
      <h1>{props.nome}</h1>
      <h2>Outro Componente</h2>
      <MeuComboBox />
      <hr></hr>
      <h3>PROPS</h3>
      <label>{props.nome} - Idade: {props.idade}</label>
    </>
  )
} 


export default App
