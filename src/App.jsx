import React from 'react'
import Home from "./componentes/Home.jsx";
import HeaderSup from "./componentes/HeaderSup.jsx";
import NavBar from "./componentes/NavBar.jsx";
import { Route, Routes } from "react-router-dom";
import Tareas from "./componentes/Tareas.jsx";
import Calendar from "./componentes/Calendar.jsx";

function App() {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-6">
      <NavBar />
      <div className="col-span-5">
        <HeaderSup />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tareas" element={<Tareas />} />
          <Route path="/horario" element={<Calendar />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
