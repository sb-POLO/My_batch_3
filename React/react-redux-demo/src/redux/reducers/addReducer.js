const intitalState = {
    input1: "",
    input2: "",
    result: 0
}

const addReducer = (state = intitalState, action) => {
    switch (action.type) {
        case "INPUT1":
            return { ...state, input1: action.payload.input1 }
        case "INPUT2":
            return { ...state, input2: action.payload.input2 }
        case "ADD":
            return { ...state, result: +state.input1 + +state.input2 }
        default:
            return state
    }
}

export default addReducer

