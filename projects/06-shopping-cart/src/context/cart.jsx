import { createContext, useReducer } from "react";

import {cartReducer, cardInitialState, CART_ACCIONS_TYPE} from '../reducers/cart.js';


export const CartContext = createContext();




function useCartReducer(){
    const [state, dispatch] = useReducer(cartReducer, cardInitialState);

    const addToCart = product => dispatch({
        type: 'ADD_TO_CART',
        payload: product
    })

    const removeFromCart = product => dispatch({
        type: 'REMOVE_FROM_CART',
        payload: product
    })

    const clearCart = () => dispatch({
        type: 'CLEAR_CART'
    })

    return{
        addToCart,
        removeFromCart,
        clearCart, 
        state
    }
}
export function CartProvider({children}){
    const {addToCart, removeFromCart, clearCart, state} = useCartReducer();
    return(
        <CartContext.Provider value={{
            cart: state,
            addToCart,
            clearCart,
            removeFromCart
        }}>
            {children}
        </CartContext.Provider>
    )
}