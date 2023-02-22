import {TfiVector} from "react-icons/tfi";

function HeaderSup() {
    return (
        <header
            className="flex flex-col md:flex-row gap-4 items-center justify-between p-2 md:pl-8 lg:pl-10 w-[90%] lg:w-full">
            {/*Menu superior*/}
            <div className="text-center p-5 flex">
                <TfiVector className="font-bold tracking-[5px] text-purple-800 m-1 text-2xl"/>
                <h1 className="font-bold tracking-[5px] text-purple-800 text-2xl ml-3">MART</h1>
            </div>
        </header>
    )
}

export default HeaderSup;