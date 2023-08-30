import React from 'react'
import Home from "./componentes/Home.jsx";
import HeaderSup from "./componentes/HeaderSup.jsx";
import NavBar from "./componentes/NavBar.jsx";
import {Route, Routes, BrowserRouter as Router} from "react-router-dom";
import Tareas from "./componentes/Tareas.jsx";
import {useState} from "react";
import Calendar from "./componentes/Calendar.jsx";

//Une todos los componentes, archivo que carga la pagina
function App() {

    const [task, setTask] = useState({
        nombreTarea: "",
        prioridadTarea: "",
        tiempoTarea: "",
        descricpionTarea: "",
    });


    const [item, setItem] = useState([]);
    return (
        <div className="min-h-screen grid grid-cols-1 lg:grid-cols-6">
            <NavBar />
            <div className="col-span-5">
                <HeaderSup />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/tareas"
                        element={<Tareas task={task} item={item} setItem={setItem} setTask={setTask} />}
                    />
                    <Route
                        path="/horario"
                        element={<Calendar item={item} setItem={setItem} />}
                    />
                </Routes>
            </div>
        </div>
    )
}

export default App
