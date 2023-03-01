import React from 'react'
import AreaDeTrabajo from "./componentes/AreaDeTrabajo.jsx";
import HeaderSup from "./componentes/HeaderSup.jsx";
import NavBar from "./componentes/NavBar.jsx";
import {Route, Routes} from "react-router-dom";
import Tareas from "./componentes/Tareas.jsx";
import {useState} from "react";
import Perfil from "./componentes/Perfil.jsx";
import Calendar from "./componentes/Calendar.jsx";

function App() {

    const [task, setTask] = useState({
        nombreTarea: "",
        prioridadTarea: "",
        tiempoTarea: "",
        descricpionTarea: "",
    });


    const [item, setItem] = useState([]);
    const [llave, setLlave] = useState(true);
    return (
        <div className="min-h-screen grid grid-cols-1 lg:grid-cols-6">      {/*Pagina principal*/}
            <NavBar llave={llave} setLlave={setLlave} />
            <div className="col-span-5">
                <HeaderSup llave={llave} item={item} setItem={setItem} />
                <Routes>
                    {llave ? <Route path="/" element={<AreaDeTrabajo />}/> :
                        <Route path="/" element={<Perfil item={item}/>}/>}

                    <Route path="tareas"
                           element={<Tareas task={task} item={item} setItem={setItem} setTask={setTask}/>}/>
                    <Route path="horario"
                           element={<Calendar item={item} setItem={setItem} />}/>
                </Routes>
            </div>
        </div>
    )
}

export default App
