import {TfiHandPointRight} from "react-icons/tfi";
function MenuBell({ item,  setItem}) {
    return(
        <div className="absolute right-0 rounded-lg p-2 w-[210px] sm:w-[330px] h-[400px] max-h-[420px] overflow-y-auto" >
            {item.map((obj, index) => {
                return (
                    <div className="flex bg-white shadow-lg rounded-lg border border-green-700 m-1" key={index}>
                        <div className="icon bg-green-600 flex justify-center items-center py-2 px-3 rounded-tr-3xl rounded-lg">
                            <TfiHandPointRight className="text-white text-xl" />
                        </div>
                        <div className="flex flex-col p-2 rounded-tr-lg rounded-br-lg py-2 px-3">
                            <h2 className="font-semibold text-green-600">Realiza la tarea</h2>
                            <p className="text-gray-700">
                                Tarea <span className="font-bold">{obj.nombreTarea}</span>  agregada
                            </p>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}

export default MenuBell;

