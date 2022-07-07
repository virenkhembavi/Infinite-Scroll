export const INCREMENT = "INCREMENT"
export const DECREMENT = "DECREMENT"



export const Increment = () => {
    return {
        type: INCREMENT
    }
}
export const Decrement = () => {
    return {
        type: DECREMENT
    }
}

const initialState = 0

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return state + 5;
        case DECREMENT:
            return state - 1;
        default:
            return state;
    }
}

export default counterReducer;