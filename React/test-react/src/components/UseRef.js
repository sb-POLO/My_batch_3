import React, { useState, useRef, createRef, } from 'react'
function UseRef() {
    const [render, setRender] = useState(false);
    const myref = useRef(0);
    const a = useRef(0);
    function focus() {
        myref.current = myref.current + 1;
        a.current = a.current + 1;
        console.log("a = ", a.current);
    }
    return (
        <>
            {console.log("rerender")}
            <p>{myref.current}</p>
            <button onClick={focus} >Click</button>
            <button onClick={() => { setRender(!render) }} >Rerender</button>
        </>
    )
}

export default UseRef