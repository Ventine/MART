import {TfiVector, TfiBell, TfiFlickrAlt, TfiHandPointRight} from "react-icons/tfi";
import {useState} from "react";
import MenuBell from "./MenuBell.jsx";

function HeaderSup({llave, item,  setItem}) {
    const [open, setOpen] = useState(false);
    return (
        <header
            className="flex flex-col md:flex-row gap-2 items-center justify-between md:pl-8 lg:pl-10 w-[90%] lg:w-full ">
            {/*Menu superior*/}
            <div className="text-center w-full p-5 flex flex-row items-center justify-between ">
                <div className="flex ">
                    <TfiVector className="font-bold tracking-[5px] text-purple-800 m-1 text-2xl"/>
                    <h1 className="font-bold tracking-[5px] text-purple-800 text-2xl ml-3">MART</h1>
                </div>
                {llave ?
                    <div>
                    </div>
                :
                    <div className=" relative mr-5" onClick={() => setOpen(!open)}>
                        <TfiBell className="font-bold tracking-[5px] text-purple-800 m-1 text-2xl cursor-pointer"/>
                        {open ? <MenuBell item={item} setItem={setItem} /> : <div></div> }
                        {item.map((obj, index) => {
                            return (
                                    <TfiFlickrAlt className="bg-white text-red-500 rounded-full absolute top-0 right-0" key={index} />

                            );
                        })}
                    </div>
                }
            </div>
        </header>
    )
}

export default HeaderSup;