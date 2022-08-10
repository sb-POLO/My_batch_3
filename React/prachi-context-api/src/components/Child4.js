import React, { useContext } from 'react'
import { StoreContext } from '../helper/StoreContext'

function Child4() {
    const ticket = useContext(StoreContext);
    return (
        <>
            <div>Child4</div>
            <p>{ticket.name}</p>
            <p>{ticket.name2}</p>
            <p>{ticket.name3}</p>
        </>
    )
}

export default Child4

//createContext() ===> Creates an emprty store
//Store.Provider ====> Keeps an value to the store
//useContext() =====> Recieves a value from the store