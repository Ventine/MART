import {TfiCalendar, TfiCheckBox, TfiClose, TfiMenu, TfiViewGrid} from "react-icons/tfi";
import {Link} from "react-router-dom";
import Limpiar from "./Limpiar.jsx";
import React, {useState} from "react";
import Buzon from "./Buzon.jsx";

//Opciones en la parte derecha (Home,Tareas, Hotatio, Sugerencias y Enviar)
function NavBar() {
    const [sidebar, setSidebar] = useState(false);
    const handleSidebar = () => {
        setSidebar(!sidebar)
    }
    const options = () => {
        setSidebar(!sidebar)
        window.location.replace('/');
        localStorage.clear();
    }
    return (
        <div className={`w-[29%] fixed lg:static bg-white z-10  ${sidebar ? "-left-0" : "-left-full"} lg:w-3/4 md:w-[43%] 
                w-full h-full col-span-1 p-4 border-r border-purple-200 transition-all`}>
            <div className="flex flex-col justify-between h-[480px] ">
                <nav className="mt-7">
                    <ul>
                        <li>
                            <Link to="/" className="flex items-center gap-1.5 hover:bg-purple-600 p-3 text-gray-400 hover:text-white rounded-lg
                        transition-colors font-semibold" onClick={handleSidebar}>
                                <TfiViewGrid/>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/tareas" className="flex items-center gap-2 hover:bg-purple-600 p-3 text-gray-400 hover:text-white rounded-lg
                        transition-colors font-semibold" onClick={handleSidebar}>
                                <TfiCheckBox/>
                                Tareas
                            </Link>
                        </li>
                        <li>
                            <Link to="/horario" className="flex items-center gap-2 hover:bg-purple-600 p-3 text-gray-400 hover:text-white rounded-lg
                        transition-colors font-semibold" onClick={handleSidebar}>
                                <TfiCalendar/>
                                Horario
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className="flex flex-col gap-2 mt-8">
                    <div className="bg-white p-1 flex flex-col gap-2 rounded-3xl">
                        <p className="text-gray-500 text-center"></p>
                        <Buzon/>
                    </div>
                    <Limpiar/>
                </div>
            </div>
            <button onClick={handleSidebar} className="block lg:hidden fixed bottom-3 right-5 bg-purple-500 hover:bg-purple-600 p-2 text-white
                 rounded-full text-2xl z-50  transition-all duration-150">{sidebar ? <TfiClose/> : <TfiMenu/>}</button>
        </div>
    )
}

export default NavBar;