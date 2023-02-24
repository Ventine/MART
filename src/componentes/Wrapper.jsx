import Global from "./Global.js";
import React, {useEffect, useState} from "react";
import dayjs from "dayjs";
function Wrapper(props){
    const [mesIndex, setMesIndex] = useState(dayjs().month())
    const [calendarioPequenomes, setCalendarioPequenomes] = useState(null)
    const [diaSelected, setDiaSelected] = useState(dayjs())
    const [showNodal, setShowNodal] = useState(false)

    useEffect(() => {
        if(calendarioPequenomes !== null){
            setMesIndex(calendarioPequenomes)
        }
    }, [calendarioPequenomes])
    return(
        <Global.Provider value={{mesIndex, setMesIndex, calendarioPequenomes, setCalendarioPequenomes, diaSelected, setDiaSelected
        , showNodal, setShowNodal}}>
            {props.children}
        </Global.Provider>
    )
}

export default Wrapper;