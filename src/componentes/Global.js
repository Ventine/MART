
import React from "react";

const Global = React.createContext({
    mesIndex: 0,
    setMesIndex: (index) => {},
});

export default Global;