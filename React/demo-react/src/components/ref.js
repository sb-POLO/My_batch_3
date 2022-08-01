import React, { useState, useRef } from 'react'

function Ref() {
    const ref1 = useRef();
    const ref2 = useRef();
    const ref3 = useRef();
    function handleinput(reff) {
        reff.current.value = "Prachi";
    }
    function handleinput1(reff) {
        reff.current.value = "";
    }
    return (
        <>
            <input onFocus={() => handleinput(ref1)} onBlur={() => handleinput1(ref1)} ref={ref1}></input>
            <input onFocus={() => handleinput(ref2)} onBlur={() => handleinput1(ref2)} ref={ref2}></input>
            <input onFocus={() => handleinput(ref3)} onBlur={() => handleinput1(ref3)} ref={ref3}></input>
        </>
    )
}

export default Ref;

