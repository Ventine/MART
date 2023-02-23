import Global from "./Global.js";
import React, {useState} from "react";
import dayjs from "dayjs";
function Wrapper(props){
    const [mesIndex, setMesIndex] = useState(dayjs().month())
    return(
        <Global.Provider value={{mesIndex, setMesIndex}}>
            {props.children}
        </Global.Provider>
    )
}

export default Wrapper;