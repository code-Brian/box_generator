import {useState} from 'react'
import './App.css'
import BoxForm from './components/BoxForm'
import Box from './components/Box'

function App() {
  const [boxColors, setBoxColors] = useState([])

  return (
    <div className="App">
      <BoxForm boxColors={ boxColors } setBoxColors={ setBoxColors }/>
      <Box boxColors={ boxColors }/>
    </div>
  )
}

export default App;
