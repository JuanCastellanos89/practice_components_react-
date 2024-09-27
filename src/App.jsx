import { useState } from 'react'
import './App.css'
import { MyFirstComponent } from './components/MyFirstComponent'
import { SecondComponent } from './components/SecondComponent'
import { Child } from './components/Child'
import { ThirdComponent } from './components/ThirdComponent'
import { FourComponent } from './components/FourComponent'


function App() {
  const [name, setName] = useState("Laura caro");

  return (
    <div className='App'>
      <header clasName="App-header">
        <hr className='white-hr'/>
        <FourComponent/>
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
