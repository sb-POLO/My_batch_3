import React, { useReducer, useState } from 'react'
import { reducerState } from '../reducer/reducerState'
import { SOURAV, PRACHI, DOIT } from "../action.type";

function mycounter(counter, action) {
    //2nd param ===> object;
    //props ===> {key value pair}
    console.log("counter = ", counter);
    console.log(action);
    //action.type === "INCREMENT"
    switch (action.type) {
        case "DECREMENT":
            return counter - 1;
        case "INCREMENT":
            return counter + 1;
        case "INCREMENTBY5":
            return counter + 5;
        case "IDONTKNOW":
            return abc();
        default:
            return action.type;
    }

    function abc() {
        return 10;
    }

    // if (action.type === "INCREMENT") {
    //     return counter + 1;
    // }

}




function Reducer() {
    // const [counter, dispatch] = useReducer(mycounter, 0);
    // const [data, setData] = useState("");
    const [state, dispatchState] = useReducer(reducerState, {
        data1: "",
        data2: ""
    });
    // let obj = { sam: "INCREMENT" };
    // let obj1 = { sam: "DECREMENT" };

    // variable name, dispatcher function
    // state, setState==== useState(0);
    // setState()
    // const[name, setName] = useReducer(funcMu{ type: "INCREMENT" }
    // fucntion abc(x,y);
    // let a = abc;
    // setCounter(prev => prev + 1);

    // action{
    //     type: "increment"
    // }{ sameera: "INCREMENTBY5" }
    //child2----> ({flag && "abc"})


    return (
        <>
            {/* <div>{counter}</div> */}
            <div>{state.data1}</div>
            <div>{state.data2}</div>
            {/* <button onClick={() => dispatch({ type: "INCREMENT" })}>INCREMENT</button>
            <button onClick={() => dispatch({ type: "DECREMENT" })}>DECREMENT</button> */}
            <input name="data1" onChange={(e) => dispatchState({
                type: SOURAV, payload: {
                    val: e.target.value,
                    name: "data1"
                }
            })} value={state.data1}></input>
            <input name="data2" onChange={(e) => dispatchState({
                type: SOURAV, payload: {
                    val: e.target.value,
                    name: "data2"
                }
            })} value={state.data2}></input>
        </>
    )
}

export default Reducer