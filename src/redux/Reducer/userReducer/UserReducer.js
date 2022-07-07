import axios from "axios"

// action
export const USER_SUCCESS = "USER_SUCCESS"


// action type
const userSuccess = (param) => {
    return {
        type: USER_SUCCESS,
        payload: param
    }
}

// action dispatcher

export const fetchUsers = (param) => {
    return (dispatch) => {
        dispatch(userSuccess)
        axios.get(`https://jsonplaceholder.typicode.com/posts?_start=0&_limit=${param}`)
            .then(response => {
                const user = response.data
                dispatch(userSuccess(user))
            })
            .catch(error => {
                console.log(error.message)
            })
    }
}



const initialState = {
    data: []
}


// reducer

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_SUCCESS:
            return {
                ...state,
                data: action.payload
            }
        default:
            return state
    }
}


export default userReducer;