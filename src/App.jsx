import React from 'react'
import AreaDeTrabajo from "./componentes/AreaDeTrabajo.jsx";
import HeaderSup from "./componentes/HeaderSup.jsx";
import NavBar from "./componentes/NavBar.jsx";
import {Route, Routes} from "react-router-dom";
import Tareas from "./componentes/Tareas.jsx";
import {useState} from "react";
import Perfil from "./componentes/Perfil.jsx";

function App() {

    const [product, setProduct] = useState({
        nombreTarea: "",
        prioridadTarea: "",
        tiempoTarea: "",
        descricpionTarea: "",
    });
    const [item, setItem] = useState([]);
    const x = false;
    return (
        <div className="min-h-screen grid grid-cols-1 lg:grid-cols-6">      {/*Pagina principal*/}
            <NavBar x={x}/>
            <div className="col-span-5">
                <HeaderSup x={x} item={item} setItem={setItem} />
                <Routes>
                    {x ? <Route path="/" element={<AreaDeTrabajo product={product} item={item} setItem={setItem} setProduct={setProduct} />}/> :
                        <Route path="/" element={<Perfil item={item}/>}/>}

                    <Route path="tareas"
                           element={<Tareas product={product} item={item} setItem={setItem} setProduct={setProduct}/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default App
