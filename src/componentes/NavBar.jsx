import {TfiCalendar, TfiCheckBox, TfiClose, TfiMenu, TfiSaveAlt, TfiViewGrid} from "react-icons/tfi";
import {Link, Outlet} from "react-router-dom";
import Premium from "./Premium.jsx";
import InicioSesion from "./InicioSesion.jsx";
import Registrarse from "./Registrarse.jsx";
import React, {useState} from "react";

function NavBar() {
    const [sidebar, setSidebar] = useState(false);
    const handleSidebar = () => {
        setSidebar(!sidebar)
    }
    return (
        <div>
            {/*Menu derecho*/}
            <div className={`w-[240px] fixed lg:static top-0 z-50 bg-white  ${sidebar ? "-left-0" : "-left-[90%]"} lg:w-full md:w-[45%] 
        w-full h-full col-span-1 p-5 border-r border-purple-200 transition-all`}>
                <div className="flex flex-col justify-between h-[480px]">
                    <div className="text-center p-6">
                        <h1 className="font-bold tracking-[5px] text-purple-800">MART</h1>
                    </div>
                    <nav className="mt-8">
                        <ul>
                            <li>
                                <Link to="/" className="flex items-center gap-1.5 hover:bg-purple-600 p-3 text-gray-400 hover:text-white rounded-lg
                        transition-colors font-semibold">
                                    <TfiViewGrid/>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/tareas" className="flex items-center gap-2 hover:bg-purple-600 p-4 text-gray-400 hover:text-white rounded-lg
                        transition-colors font-semibold">
                                    <TfiCheckBox/>
                                    Tareas
                                </Link>
                            </li>
                            <li>
                                <Link to="/horario" className="flex items-center gap-2 hover:bg-purple-600 p-4 text-gray-400 hover:text-white rounded-lg
                        transition-colors font-semibold">
                                    <TfiCalendar/>
                                    Horario
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="flex flex-col gap-3 mt-10">
                        <div className="bg-purple-50 p-3 flex flex-col gap-3 rounded-3xl">
                            <p className="text-gray-500 text-center">Accede a muchas funcionalidades haciendote
                                premium.</p>
                            <Premium/>
                        </div>
                        <InicioSesion/>
                        <Registrarse/>
                    </div>
                    <Outlet/>
                </div>
            </div>
            <button onClick={handleSidebar} className="block lg:hidden fixed bottom-4 right-4 bg-purple-500 hover:bg-purple-600 p-2 text-white
        rounded-full text-2xl z-40">{sidebar ? <TfiClose/> : <TfiMenu/>}</button>
        </div>
    )
}

export default NavBar;