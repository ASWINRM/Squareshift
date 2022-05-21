const intialstate = {
    userdetails: {}
}



export const userloginreducer = (state = {}, action) => {
    switch (action.type) {
        case "USER_LOGIN_SUCCESS":
            console.log(action.payload);
            return ({ loading: false, userdetails: action.payload })
        case "USER_LOGIN_FAIL":
            return ({ loading: false, error: action.payload })
        case "USER_LOGOUT":
            return {}
        default:
            return state
    }
}