import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Clase1 from './components/Clase1';
import Clase5Form from './components/Clase5Form';
import Clase2 from './components/Clase2';
import PachuHeader from './components/pachu/header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <PachuHeader/>
    <Clase2></Clase2>
    <br />
    <Clase1></Clase1>
    <Clase5Form></Clase5Form>
    
    </>
  )
}

export default App
