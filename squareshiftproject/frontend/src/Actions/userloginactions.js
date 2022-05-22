import axios from 'axios'


// export const loginaction = (user_details) => async (dispatch) => {

//     try {
//         let { data } = await axios.post('http://localhost:5000/api/user/login', { user_details })
        
//         if (data.Status) {

//             console.log(data);
//             dispatch({
//                 type: "USER_LOGIN_SUCCESS",
//                 payload: data
//             })
            
//         } else {
//              dispatch({
//                 type: "USER_LOGIN_FAILURE",
//                 payload: data
//             })
//         }
//     } catch (e) {
//          dispatch({
//                 type: "USER_LOGIN_FAILURE",
//                 error: e
//             })
//     }
     
// }

export const signupaction = (user_details) => async (dispatch) => {
    try {
        console.log(user_details);
        let { data } = await axios.post('http://localhost:5000/api/user/signup', { user_details })
        
        if (data == "This User is already found, please login!") {
             dispatch({
                type: "USER_LOGIN_FAILURE",
                payload: data
            })
        }

        
        if (data.Status) {

            console.log(data);
            dispatch({
                type: "USER_LOGIN_SUCCESS",
                payload: data
            })
            
        } else {
             dispatch({
                type: "USER_LOGIN_FAILURE",
                payload: data
            })
        }
    } catch (e) {
         dispatch({
                type: "USER_LOGIN_FAILURE",
                error: e
            })
    }
}