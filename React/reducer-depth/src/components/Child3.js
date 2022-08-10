import React, { useContext } from 'react'
import { Mycontext } from '../helper/Mycontext'

function Child3() {
    const usingContext = useContext(Mycontext)
    return (
        <>
            <div>Child3</div>
            <p>{usingContext.var}</p>
        </>
    )
}

export default Child3

//createContext() ====> For creating the store
// Context.Provider ===> For adding someting into the store
// useContext() =====> For getting something from the store