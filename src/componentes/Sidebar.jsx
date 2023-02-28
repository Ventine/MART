import BotonCreaciones from "./BotonCreaciones.jsx"
import CalendarioPequeno from "./CalendarioPequeno.jsx";
function Sidebar(){
    return(
        <aside className="p-3 w-52 w-full md:w-[14%]">
            <BotonCreaciones />
            <CalendarioPequeno />
        </aside>
    )
}

export default Sidebar;