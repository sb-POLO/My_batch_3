import React from 'react'

function Selector() {
    function handleinput() {
        document.getElementById("myinput").value = "prachi"
    }

    return (
        <>
            <input id='myinput' onClick={handleinput}></input>
            <input id='myinput' onClick={handleinput}></input>
            <input id='myinput' onClick={handleinput}></input>

        </>
    )
}

export default Selector