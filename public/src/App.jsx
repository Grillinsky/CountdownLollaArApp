import React from 'react'
import Lolla from '../src/Components/Lolla'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Lolla />} />
      </Routes>
    </>
  )
}

export default App
