import { useState } from 'react'
import './App.css'
import { MyFirstComponent } from './components/MyFirstComponent'
import { SecondComponent } from './components/SecondComponent'
import { Child } from './components/Child'
import { ThirdComponent } from './components/ThirdComponent'


function App() {
  const [name, setName] = useState("Laura caro");

  return (
    <div className='App'>
      <header clasName="App-header">
        <h1>Fundamentos de React</h1>
        <hr className='white-hr'/>
        < ThirdComponent 
          name="Juan"
          last_name="Castellanos"
          age="35"
        />
        <hr className='white-hr'/>
        <Child
          name={name}
          setName={setName}
        />
        <hr className='white-hr'/>
      </header>
    </div>
  )
}

export default App
