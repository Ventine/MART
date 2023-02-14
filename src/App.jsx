import { TfiViewGrid, TfiCheckBox, TfiCalendar, TfiSaveAlt, TfiPowerOff, TfiMenu, TfiClose, TfiBell , TfiAngleDown, TfiSearch,
    TfiFlickrAlt, TfiSignal, TfiTime, TfiBasketball, TfiBook} from "react-icons/tfi";
import React from 'react'
import {useState} from "react";
import InicioSesion from "./componentes/InicioSesion.jsx";
import Registrarse from "./componentes/Registrarse.jsx";
import Premium from "./componentes/Premium.jsx";
import AreaDeTrabajo from "./componentes/AreaDeTrabajo.jsx";
import HeaderSup from "./componentes/HeaderSup.jsx";
import NavBar from "./componentes/NavBar.jsx";
import {Route, Routes} from "react-router-dom";
import Tareas from "./componentes/Tareas.jsx";
function App() {
    const [sidebar, setSidebar] = useState(false);
    const handleSidebar = () =>{
        setSidebar(!sidebar)
    }
  return (
     <div className="min-h-screen grid grid-cols-1 lg:grid-cols-6">      {/*Pagina principal*/}
        {/*Menu derecho*/}
        <div className={`w-[62%] fixed lg:static top-0 z-50 bg-white  ${sidebar ? "-left-0" : "-left-full"} lg:w-full md:w-[45%] 
        w-full h-full col-span-1 p-6 border-r transition-all`}>
            <div className="flex flex-col justify-between h-[480px]">
                <NavBar />
            </div>
        </div>
        <button onClick={handleSidebar} className="block lg:hidden fixed bottom-4 right-4 bg-lime-600 p-2 text-white
        rounded-full text-2xl z-40">{sidebar ? <TfiClose /> : <TfiMenu />}</button>
        <div className="col-span-5">
            <HeaderSup />
            <Routes>
                <Route path="/" element={<AreaDeTrabajo /> } />
                <Route path="tareas" element={<Tareas /> } />
            </Routes>
        </div>
    </div>
  )
}

export default App
