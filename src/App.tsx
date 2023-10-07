import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './screens/Home'
import { Outlet } from 'react-router-dom'
import Login from './screens/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Login /> */}
    <Outlet />
    </>
  )
}

export default App
