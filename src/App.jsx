import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Page1 from "./pages/Page1";

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
      <div>
        <Link to="/">Home</Link>{` | `}  
        <Link to="/page">Page1</Link> 

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/page" Component={Page1} />
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
