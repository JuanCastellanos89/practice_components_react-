import { useState } from 'react'
import './App.css'
import { MyFirstComponent } from './components/MyFirstComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <header clasName="App-header">
        < MyFirstComponent />
      </header>
    </div>
  )
}

export default App
