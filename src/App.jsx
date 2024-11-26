import './App.css'
import StyledText from './components/StyledText/index'
import AlertButton from './components/AlertButton/index'

function App() {

  return (
    <>
      <div>
        <StyledText color="green" text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et, in harum!" />

        <AlertButton label="Baixar CV" />
      </div>
    </>
  )
}

export default App
