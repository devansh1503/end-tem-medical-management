import { useReducer } from "react"
import GlobalObj from "./global-object"

const defaultValue = {
    currUser:{}
}

const globReducer = (state,action) => {
    if(action.type === "ADD"){
        const newUser = action.item
        console.log(action.item)
        return{
            currUser:newUser
        }
    }
    return defaultValue
}
function Globalprovider(props){
    const[globstate, dispatchAction] = useReducer(globReducer,defaultValue)
    const addUserHandle = (item) => {
        dispatchAction({type:"ADD", item:item})
    }
    const globcontext = {
        currUser:globstate.currUser,
        changeUser:addUserHandle
    }
    return (
        <GlobalObj.Provider value={globcontext}>
            {props.children}
        </GlobalObj.Provider>
    )
}

export default Globalprovider