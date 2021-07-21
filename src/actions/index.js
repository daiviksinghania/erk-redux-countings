export const counting = () => {
    return {
        type: "INCREMENT"
    }
}

export const countingAsync = () => {
    return {
        type: "INCREMENT_ASYNC"
    }
}

export const reverseCounting = () => {
    return {
        type: "DECREMENT"
    }
}