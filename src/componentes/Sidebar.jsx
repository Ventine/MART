import BotonCreaciones from "./BotonCreaciones.jsx"
import CalendarioPequeno from "./CalendarioPequeno.jsx";

//Parte pequeña en la pagina Horario, es el calendario pequeño y el boton agregar tarea
function Sidebar() {
    return (
        <aside className="p-1.5 w-full md:w-[14%]">
            <BotonCreaciones/>
            <CalendarioPequeno/>
        </aside>
    )
}

export default Sidebar; 