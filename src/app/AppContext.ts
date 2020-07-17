import React from "react";
import {provider, Provider} from "./Provider";

export interface AppContextInterface {
    provider: Provider,
}

const AppContext =  React.createContext<AppContextInterface>({provider});

export default AppContext;
