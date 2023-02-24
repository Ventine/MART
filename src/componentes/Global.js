
import React from "react";

const Global = React.createContext({
    mesIndex: 0,
    setMesIndex: (index) => {},
    calendarioPequenomes : 0,
    setCalendarioPequenomes: (index) => {},
    diaSelected: null,
    setDiaSelected : (dia) => {},
});

export default Global;