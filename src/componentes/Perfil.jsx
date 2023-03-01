import {TfiLayoutCtaBtnRight, TfiDirectionAlt, TfiCup} from "react-icons/tfi";

function Perfil({item}) {
    return (
        <div className="w-full flex flex-col md:flex-row justify-center items-center md:items-start">
            {/*Perfil*/}
            <div className="w-[40%] mb-3">
                <div
                    className="bg-white hover:bg-amber-50 border flex flex-col max-w-sm mx-auto rounded-lg shadow-lg hover:shadow-xl m-auto">
                    <h1 className="p-3 text-3xl font-semibold text-purple-600 italic text-center">Perfil</h1>
                </div>
                <div className="bg-white hover:bg-purple-50 border flex flex-col max-w-sm mx-auto rounded-lg shadow-lg hover:shadow-xl mt-2
                ">
                    <div>
                        <img
                            src="male.svg"
                            alt="male"
                            className="w-[75%] m-auto object-cover"
                        />
                    </div>
                    <div
                        className="bg-purple-700 mx-4 rounded-lg flex items-center gap-2 -mt-8 z-1 shadow-xl py-2 px-6 hidden md:flex
                         cursor-pointer">
                        <h3 className="text-white text-lg font-semibold ">Usuario</h3>
                    </div>
                    <div className="px-6 py-4 flex flex-col gap-2">
                        <h1 className="text-xl font-semibold text-gray-800">
                            Jhon Torres
                        </h1>
                        <p className="text-gray-500 flex">
                            Diseñador y desarrollador frontend
                        </p>
                        <div className="flex items-center mt-4 text-gray-700  flex">
                            <TfiCup className="text-purple-600 mt-1 w-[35px] "/>
                            <h1 className="px-2 text-sm">Desarrollador</h1>
                        </div>
                        <div className="flex items-center mt-4 text-gray-700  flex">
                            <TfiDirectionAlt className="text-purple-600 mt-1 w-[35px] "/>
                            <h1 className="px-2 text-sm">Colombia, Bogotá</h1>
                        </div>
                        <div className="md:flex items-center mt-4 text-gray-700 hidden">
                            <TfiLayoutCtaBtnRight className="text-purple-600 mt-1 w-[35px]"/>
                            <h1 className="px-2 text-sm">jhstorresv@udistrital.edu.co</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Perfil;