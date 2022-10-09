import './App.css'
import BoxForm from './components/BoxForm'
import Box from './components/Box'

function App() {
  const [boxStyle, setBoxStyle] = useState("")

  const createNewBox = ( newBox ) => {
    setBoxStyle( newBox )
  }
  return (
    <div className="App">
      <BoxForm onNewBox={ createNewBox }/>
      <Box boxStyle={ boxStyle }/>
    </div>
  )
}

export default App;
