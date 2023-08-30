import {TfiVector, TfiBell, TfiFlickrAlt} from "react-icons/tfi";

//Header superior de todas las paginas
function HeaderSup() {
    return (
        <header
            className="flex flex-col md:flex-row gap-2 items-center justify-between md:pl-8 lg:pl-10 w-[90%] lg:w-full ">
            <div className="text-center w-full p-5 flex flex-row items-center justify-between ">
                <div className="flex ">
                    <TfiVector className="font-bold tracking-[5px] text-purple-800 m-1 text-2xl"/>
                    <h1 className="font-bold tracking-[5px] text-purple-800 text-2xl ml-3">MART</h1>
                </div>
            </div>
        </header>
    )
}

export default HeaderSup;