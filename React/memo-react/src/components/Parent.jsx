import React from 'react'
import { useMemo } from 'react';
import { useCallback } from 'react';
import { useState, useEffect } from 'react'
import Child from './Child'

function Parent() {
    const [input1, setInput1] = useState(0);
    const [input2, setInput2] = useState(0);
    const [result, setResult] = useState(0);

    function football() {
        console.log("Function called");
    }

    const callbackFootball = useCallback(() => {
        football();
    }, [])

    const handleSubmit = () => {
        console.log("Add func called");
        setResult(+input1 + +input2);
    }

    const memoHandleSubmit = useMemo(() => {
        handleSubmit();  
    },[input1, input2])

    return (
        <>
            <div className='parent'>
                {console.log("Parent rerendered")}
                {/* <div>{flag === true ? "Parent true" : "Parent false"}</div>
                <button onClick={() => setFlag(!flag)}>Rerender</button>
                <Child football={callbackFootball} /> */}
                <input value={input1} onChange={(e) => setInput1(e.target.value)} />
                <input value={input2} onChange={(e) => setInput2(e.target.value)} />
                <button onClick={memoHandleSubmit}>Add</button>
                <div>{result}</div>
            </div>
        </>

    )
}

export default Parent