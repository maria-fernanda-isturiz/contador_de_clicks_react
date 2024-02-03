import logo from './logo.svg';
import './App.css';
import FCClogo from './Imagenes/FCClogo.jpeg';
import {Boton} from './Componentes/Boton';
import {Contador} from './Componentes/Contador';
import { useState } from 'react';

function App() {

  const [numClicks, setNumClicks] = useState(0)

  const manejarClick = () => {
    setNumClicks(numClicks + 1);
  }

  const reinciarContador = () => {
    setNumClicks(0);
  }
  return (
    <div className="App">
      <div className='fcc-logo-contenedor'>
        <img 
        className='fcc-logo'
        src={FCClogo}
        alt='Logo FCC'/>
      </div>
      <div className='contenedor-contador'>
        <Contador numClicks={numClicks}/>
        <Boton 
          texto = 'Click'
          esBotonDeClick = {true}
          manejarClick = {manejarClick}/>
        <Boton 
          texto = 'Reinicio'
          esBotonDeClick = {false}
          manejarClick = {reinciarContador}/>
      </div>
    </div>
  );
}

export default App;
