import dayjs from "dayjs";
import { es } from "dayjs/locale/es";
dayjs.locale("es");
function Dia({dia, rowIdx}){
    function getDiaClass() {
        return dia.format("DD-MM-YY") === dayjs().format("DD-MM-YY") ? "bg-purple-600 text-white rounded-full w-6 p-1" : "";
    }
    return(
        <div className="border border-blue-500 flex flex-col">
            <header className="flex flex-col items-center">
                {rowIdx === 0 && (
                    <p className="text-sm w-full border border-b-blue-500 text-center bg-blue-400 text-white font-bold ">
                        {dia.format('ddd').toUpperCase()}
                    </p>
                )}
                <p className={`text-sm text-center ${getDiaClass()}`}>
                    {dia.format('DD')}
                </p>
            </header>
        </div>
    )
}

export default Dia;