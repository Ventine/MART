import { TfiViewGrid, TfiCheckBox, TfiCalendar, TfiSaveAlt, TfiPowerOff, TfiMenu, TfiClose } from "react-icons/tfi";
import React from 'react'
import {useState} from "react";
function App() {
    const [sidebar, setSidebar] = useState(false);
    const handleSidebar = () =>{
        setSidebar(!sidebar)
    }
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-6">
        <div className={`fixed w-[80%] lg:w-full md:w-[50%] lg:static top-0 z-50 bg-white ${sidebar ? "-left-0" : "-left-full"} left-full w-full h-fulll overflow-y-scroll col-span-1 
        p-6 border-r transition-all`}>
            <div className="text-center p-6">
                <h1 className="font-bold tracking-[5px] text-lime-800">MART</h1>
            </div>
            <div className="flex flex-col justify-between h-[490px]">
                <nav>
                    <ul>
                        <li>
                            <a href="#home" className="flex items-center gap-1.5 hover:bg-lime-600 p-3 text-gray-400 hover:text-white rounded-lg
                        transition-colors font-semibold">
                                <TfiViewGrid />
                                Tablero
                            </a>
                        </li>
                        <li>
                            <a href="#home" className="flex items-center gap-2 hover:bg-lime-600 p-4 text-gray-400 hover:text-white rounded-lg
                        transition-colors font-semibold">
                                <TfiCheckBox />
                                Tareas
                            </a>
                        </li>
                        <li>
                            <a href="#home" className="flex items-center gap-2 hover:bg-lime-600 p-4 text-gray-400 hover:text-white rounded-lg
                        transition-colors font-semibold">
                                <TfiCalendar />
                                Horario
                            </a>
                        </li>
                        <li>
                            <a href="#home" className="flex items-center gap-2 hover:bg-lime-600 p-4 text-gray-400 hover:text-white rounded-lg
                        transition-colors font-semibold">
                                <TfiSaveAlt />
                                Historial
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="flex flex-col gap-3">
                    <div className="bg-lime-50 p-3 flex flex-col gap-3 rounded-3xl">
                        <h3 className="text-xl text-center">Hazte Premium</h3>
                        <p className="text-gray-500 text-center">Accede a muchas funcionalidades haciendote premium.</p>
                        <button className="bg-lime-600 text-white p-2 rounded-lg">Ser premium</button>
                    </div>
                    <a href="#home" className="flex items-center gap-2 hover:bg-lime-600 p-4 text-gray-400 hover:text-white rounded-lg
                        transition-colors font-semibold"> <TfiPowerOff /> Cerrar Sesión </a>
                </div>
            </div>
        </div>
        <button onClick={handleSidebar} className="block lg:hidden absolute bottom-4 right-4 bg-lime-600 p-2 text-white
        rounded-full text-2xl">{sidebar ? <TfiClose /> : <TfiMenu />}</button>
        <div className="col-span-5">
            <header>
                <form>
                    <div>
                        <input type="text" className="bg-red-200" />
                    </div>
                </form>
            </header>
        </div>
    </div>
  )
}

export default App
