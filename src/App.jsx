import { useState } from 'react'
import './App.css'
import Logo from './components/Logo'
import Form from './components/Form'
import Stats from './components/Stats'
import PackingList from './components/PackingList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'> 
        <Logo/>
        <Form />
        <PackingList />
        <Stats />
    </div>
  )
}

export default App
