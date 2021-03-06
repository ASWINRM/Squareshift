import { useDispatch, useSelector } from 'react-redux'

const initialstate = {
    cartitems:[]
}

export const cartreducer = (state = initialstate, action) => {
    
    const item = action.payload;
    switch (action.type) {
        case "CART_ADD_REQUEST":

            return ({ loading: true, cartitems: [] })
        case "CART_ADD_SUCCESS":
           
             if (initialstate.cartitems.length >= 1) {

                  const existingItem = initialstate.cartitems.find((x) => x.id === item.id)

                 if (existingItem) {
            

                  return {

                     cartitems: initialstate.cartitems
                   }
             } else {
                 initialstate.cartitems = [...initialstate.cartitems, item]
                 return {
                   ...initialstate,
                   cartitems: initialstate.cartitems,
                }
             }
            } else {

               initialstate.cartitems = [...initialstate.cartitems, item]
                return {
                   ...initialstate,
                   cartitems: initialstate.cartitems
               }
             }
          
        case "CART_ADD_FAIL":
            return ({ loading: false, error: action.payload })
        case "CART_REMOVE_ITEMS":
            
            initialstate.cartitems = initialstate.cartitems.filter((x) => x.id !== item.id)
            return {
                ...initialstate.cartitems,
                cartitems: initialstate.cartitems
            }
        default:  
            return state
    }
}