// hooks
import {useState} from 'react';
import './App.css'
import Header from './components/Header'


function App() {

  const[contador, setContador] = useState (0)

  //let contador = 0;

  function handleButtonCount(){
   // contador = contador + 1;
   // console.log(contador);
    //contador ++;

  setContador(contador+1);
  }

  function handleButtonClick(){
    alert('Clicou no Botão')
  }

  return (
    <>
    <Header title="Senac São Paulo"/>
      <h2>Campinas</h2>
      <button onClick={handleButtonClick}>Clique aqui</button>
      <Header title={contador}/>
      <button onClick={handleButtonCount}>Count</button>
    </>
  )
}

export default App
