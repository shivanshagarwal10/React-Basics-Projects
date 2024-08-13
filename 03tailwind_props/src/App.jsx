import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/card'

function App() {
  const [count, setCount] = useState(0)
  let Obj = {
    username: shivansh,
    age: 20
  }
  let newArr = [1, 2, 3]

  return (
    <>
    <Card channel ="chaipeocodingkaro"/>
    <Card/>

    </>
  )
}

export default App
