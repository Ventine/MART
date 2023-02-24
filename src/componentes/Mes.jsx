import React from "react";
import Dia from "./Dia.jsx";

function Mes({mes}){
    return(
        <div className="flex flex-1 grid grid-cols-7 grid-rows-5 mx-2">
            {mes.map((row, i) => (
                <React.Fragment key={i}>
                    {row.map((dia, idx) => (
                        <Dia dia={dia} key={idx} rowIdx={i} />
                    ))}
                </React.Fragment>
            ))}
        </div>
    )
}

export default Mes;