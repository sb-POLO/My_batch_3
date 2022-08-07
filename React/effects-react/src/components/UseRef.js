import React, { useRef, useState, createRef } from 'react'

function UseRef() {
    // const newref = useRef();
    const newref = createRef();
    const [rerender, setrerender] = useState(true);
    const a = useRef(10);
    // function focus() {
    //     newref.current.value = "Sameera";
    //     console.log(newref);
    // }
    // function blur() {
    //     newref.current.value = "";
    // }

    function increment() {
        a.current = a.current + 1;
        console.log("a = ", a);
    }
    return (
        <>
            {console.log("Rendered")}
            {/* <input type="text" onFocus={() => focus()} onBlur={() => blur()} ref={newref}></input> */}
            <button onClick={() => increment()}>Increment</button>
            <button onClick={() => setrerender(!rerender)}>Rerender</button>
        </>
    )
}

export default UseRef


//why is useref better than query selectyor or document selector