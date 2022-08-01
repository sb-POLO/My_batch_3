import React, { useState } from 'react'

let j = 0;

function Testme() {
    const [count, setCount] = useState(0);
    // const [count2, setCount2] = useState(0);
    function add() {
        j++;
    }
    function handleCount() {
        setCount(prevState => prevState + 1);
        setCount(count + 1);
        setCount((prevState) => {
            return prevState + 1
        });
        setCount(count + 1);
        setCount((prevState) => {
            return prevState + 3
        });
        setCount(count + 1);
        // setCount2(count2 + 1);

        //Batching
        //prevState

        // setCount(count + 1)
        // setCount(()=> +1)
    }
    return (
        <>
            <div>{count}</div>
            <button onClick={handleCount}>Increment</button>
        </>
    )
}

export default Testme

//props -> object.... antything we pass in the arguments using props are definded as a key value pair in our props

// props{
//     arg:dsf,
//     arg2:sdfds,
//     mychoice: sdfds,
//     children: [array of tags]
// }