const initialState = {
    data: ""
}

const apiReducer = (state = initialState, action) => {
    console.log(action.type);
    console.log(action.payload);
    switch (action.type) {
        case "data/getData/pending":
            return { ...state, data: "Data is loading" }
        case "data/getData/fulfilled":
            return { ...state, data: action.payload.payload.data}
        case "data/getData/rejected":
            return { ...state, data: "Something went wrong" }
        default:
            return state
    }
}

export default apiReducer;