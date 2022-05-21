import axios from 'axios'

export const listproduct = () => async (dispatch) => {

    try {
        dispatch({ type: "PRODUCTS_LIST_REQUEST" })

        
        console.log("dei mama");
        const { data } = await axios.get("https://fakestoreapi.com/products")
        if (!data) {
            console.log("no data")
            console.log(data)
        }
        if (data) {
            console.log(data)
            dispatch({
                type: "PRODUCTS_LIST_SUCCESS",
                payload: data
            })
        }


    } catch (e) {
        console.log(e)
        dispatch({
            type: "PRODUCTS_LIST_FAIL",
            payload: e.response && e.response.data ? e.response.data : e.response
        })
    }
}