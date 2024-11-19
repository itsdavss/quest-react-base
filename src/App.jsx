import './App.css'
import ColorfulUppercaseText from './components/ColorfulUppercaseText/ColorfulUppercaseText'
import Button from './components/Button/button'

function App() {

  return (
    <>
      <div>
        <ColorfulUppercaseText color="green" text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et, in harum!" />

        <Button label="Baixar CV" />
      </div>
    </>
  )
}

export default App
