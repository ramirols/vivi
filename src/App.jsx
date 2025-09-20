import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Inicio from './pages/Inicio'
import ParaTi from './pages/ParaTi'

import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/para-ti" element={<ParaTi />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App