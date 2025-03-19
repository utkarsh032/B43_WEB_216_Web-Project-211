import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<div>Tracker</div>} />
      </Routes>
    </>
  )
}

export default App
