import logo from './logo.svg';
import './App.css';
import Imgmeme from './Componentes/Imgmeme';
import Cookies from './Componentes/Cookies';


//import './Componentes/Usuarios'
//import Acceder from './Componentes/Acceder';
//import Usuarios from './Componentes/Usuarios';

//import React from 'react'
/*
export default function App() {
  return (
    <div className='App'>
      <Usuarios nombre= 'Juan Carlos' edad='50'/>
    </div>
  )
}
*//*
export default function App() {
  return (
    <div className='App'>
      <Acceder tieneAcceso={false} nombre="Luis"/>
    </div>
  )
}*/

export default function App() {
  return (
    <div className="App">

      <Cookies/>
      <Imgmeme/>
      
    </div>
  )
}



