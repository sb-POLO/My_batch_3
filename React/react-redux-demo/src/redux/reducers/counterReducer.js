const initialState = {
    counter: 0,
    input: ""
}


const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {
                ...state,counter: state.counter + 1
            }
        case "DECREMENT":
            return {
                ...state,counter: state.counter - 1
            }
        case "CHANGEINPUT":
            return {
                    ...state,input:action.payload
                }
        default:
            return state
    }
}

export default counterReducer;