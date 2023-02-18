import {TfiBell, TfiFlickrAlt, TfiSearch} from "react-icons/tfi";

function HeaderSup(){
    return(
    <header className="flex flex-col md:flex-row gap-4 items-center justify-between p-2 md:pl-8 lg:pl-10 w-[90%] lg:w-full">         {/*Menu superior*/}
        <form className="w-full md:w-[40%] lg:w-[35%] order-1 md:order-none">
            <div className="relative ">
                <TfiSearch className="absolute left-2 top-3" />
                <input type="text" className="bg-purple-50 py-2 pl-9 pr-6 outline-none rounded-lg w-full" placeholder="Buscar tarea" />
            </div>
        </form>
        <nav className="w-full md:w-[60%] lg:w-[65%] flex justify-center md:justify-end">
            <ul className="flex items-center gap-4">
                <li>
                    <a href="#hom2" className="relative">
                        <TfiFlickrAlt className="absolute -right-1 -top-1 text-xs text-red-500" />
                        <TfiBell className="text-xl"  />
                    </a>
                </li>
                <li>
                    <a href="#hom2" className="flex items-center gap-2">
                        Jhon Torres
                        {/*<TfiAngleDown />*/}
                    </a>
                </li>
            </ul>
        </nav>
    </header>
    )
}

export default HeaderSup;