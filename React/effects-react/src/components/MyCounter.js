import React, { useState, useEffect } from 'react'
let res;
function MyCounter() {
    const [count, setCount] = useState(1);

    useEffect(() => {
        res = count * 4;
        console.log("res = ", res);
    }, [count]) //update

    useEffect(() => {
        console.log("MyCounter mounted");

        return () => {
            console.log("MyCounter unmounted");
        } // unmountconsole.log("res = ", res)
    }, [])//window.onload(),  mount

    useEffect(() => {
        console.log("I am called");
    }) //mix state ==> mount + update

    return (
        <div>
            {/* {console.log("Rerendered")} */}
            {count}
            <br></br>
            <button onClick={() => {
                setCount(prevCount => (prevCount) * 4)
                // console.log(count)
            }}>Increment</button>
        </div>
    )
}

export default MyCounter

//1st time render === Mount phase
// If changing something in my page ==== updation phase
// If removing something in my page === unmount phase