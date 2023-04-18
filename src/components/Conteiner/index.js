import React from "react";

import { Container as ConteinerItens} from "./styles";

function Container({children}){

    return <ConteinerItens>{children}</ConteinerItens>;

}

export default Container;