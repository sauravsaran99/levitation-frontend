import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'

// const apiKey = process.env.REACT_APP_MY_API_KEY;  // Retrieve the environment variable 
// console.log('API Key:', apiKey);

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
