import { INCREMENT, DECREMENT } from "../action.type";

export function reducerCounter(counter, action) {
    switch (action.type) {
        case INCREMENT:
            return counter + action.payload.data;
        case DECREMENT:
            return counter - 1;
        default:
            return counter;
    }
}