import {TfiVector, TfiBell, TfiFlickrAlt} from "react-icons/tfi";
import {useState} from "react";
import MenuBell from "./MenuBell.jsx";

function HeaderSup({x, item,  setItem}) {
    const [open, setOpen] = useState(false);
    const [redn, setRedn] = useState(false);
    return (
        <header
            className="flex flex-col md:flex-row gap-4 items-center justify-between p-2 md:pl-8 lg:pl-10 w-[90%] lg:w-full">
            {/*Menu superior*/}
            <div className="text-center w-full p-5 flex flex-row items-center justify-between ">
                <div className="flex">
                    <TfiVector className="font-bold tracking-[5px] text-purple-800 m-1 text-2xl"/>
                    <h1 className="font-bold tracking-[5px] text-purple-800 text-2xl ml-3">MART</h1>
                </div>
                {x ?
                    <div>
                    </div>
                :
                    <div className=" relative">
                        <TfiBell className="font-bold tracking-[5px] text-purple-800 m-1 text-2xl cursor-pointer"
                                 onClick={() => setOpen(!open)} />
                        <TfiFlickrAlt className="bg-white text-red-500 rounded-full absolute top-0 right-0"  />
                        {open ? <MenuBell item={item} setItem={setItem} setRedn={setRedn}  /> : <div></div> }
                        {redn ? <h1>Vacio</h1> :<h1>No Vacio</h1> }
                    </div>
                }

            </div>
        </header>
    )
}

export default HeaderSup;