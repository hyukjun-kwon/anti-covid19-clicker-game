import React, { createContext } from "react";

const PandemicContext = createContext({
    infected: 5000,
    infectionRate: 1.05,
    cured: 0,
    dead: 0,
    funding: 2500
})

export default PandemicContext;