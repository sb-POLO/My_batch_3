import { SOURAV, PRACHI, DOIT } from "../action.type";

export function reducerState(state, action) {
    console.log(action.type)
    switch (action.type) {
        case SOURAV:
            return { ...state, [action.payload.name]: action.payload.val };
        case PRACHI:
            return { ...state, [action.payload.name]: action.payload.val };
        case DOIT:
            return { ...state, [action.payload.name]: action.payload.val };
        default:
            return state
    }
}