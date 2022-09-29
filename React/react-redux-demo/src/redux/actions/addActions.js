export const input1 = (data) => {
    return {
        type: "INPUT1",
        payload: { input1: data }
    }
}

export const input2 = (data) => {
    return {
        type: "INPUT2",
        payload: { input2: data }
    }
}

export const add = () => {
    return {
        type: "ADD"
    }
}