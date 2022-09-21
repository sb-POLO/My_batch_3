export const increment = () => {
    return {
        type: "INCREMENT"
    }
}

export const decrement = () => {
    return {
        type: "DECREMENT",
    }
}

export const changeInput = (data1) => {
    return {
        type: "CHANGEINPUT",
        payload: data1
    }
}