import { useState } from 'react'
import './App.css'
import { MyFirstComponent } from './components/MyFirstComponent'
import { SecondComponent } from './components/SecondComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <header clasName="App-header">
        < SecondComponent />
      </header>
    </div>
  )
}

export default App
