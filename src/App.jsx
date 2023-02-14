import React from 'react'
import AreaDeTrabajo from "./componentes/AreaDeTrabajo.jsx";
import HeaderSup from "./componentes/HeaderSup.jsx";
import NavBar from "./componentes/NavBar.jsx";
import {Route, Routes} from "react-router-dom";
import Tareas from "./componentes/Tareas.jsx";
import {useState} from "react";

function App() {

    const [product, setProduct] = useState({
        nombreTarea: "",
        prioridadTarea: "",
        tiempoTarea: "",
        descricpionTarea: "",
    });
    const [item, setItem] = useState([]);

    return (
        <div className="min-h-screen grid grid-cols-1 lg:grid-cols-6">      {/*Pagina principal*/}
            <NavBar/>
            <div className="col-span-5">
                <HeaderSup/>
                <Routes>
                    <Route path="/" element={<AreaDeTrabajo/>}/>
                    <Route path="tareas" element={<Tareas product={product} item={item} setItem={setItem} setProduct={setProduct} />}/>
                    console
                </Routes>
            </div>
        </div>
    )
}

export default App
