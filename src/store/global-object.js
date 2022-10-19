import { createContext } from "react";

const GlobalObj = createContext({
    currUser:{},
    changeUser:() =>{}
})
export default GlobalObj