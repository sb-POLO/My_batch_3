import React, { useReducer } from 'react'

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
    const [counter, dispatch] = useReducer(mycounter, 0);
    let obj = { sam: "INCREMENT" };
    let obj1 = { sam: "DECREMENT" };

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
            <div>{counter}</div>
            <button onClick={() => dispatch(obj)}>INCREMENT</button>
            <button onClick={() => dispatch({ type: "IDONTKNOW" })}>DECREMENT</button>
        </>
    )
}

export default Reducer