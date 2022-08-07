import React from 'react'

function Queryselector() {
    const input = document.getElementById("inputid");
    function focus() {
        input.value = "Sameera";
    }
    function blur() {
        input.value = "";
    }
    return (
        <>
            <input type="text" onFocus={() => focus()} onBlur={() => blur()} id="inputid"></input>
        </>
    )
}

export default Queryselector