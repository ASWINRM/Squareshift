const intialstate = {
    products: []
}

export const productreducer = (state = intialstate, action) => {
    switch (action.type) {
        case "PRODUCTS_LIST_REQUEST":
            console.log("dei list request");
            return ({ loading: true, products: [] })
        case "PRODUCTS_LIST_SUCCESS":
            return ({ loading: false, products: action.payload })
        case "PRODUCTS_LIST_FAIL":
            return ({ loading: false, error: action.payload })
        default:
            return state
    }
}