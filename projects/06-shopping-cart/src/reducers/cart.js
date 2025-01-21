export const cardInitialState = JSON.parse(window.localStorage.getItem('cart')) || [];

export const CART_ACCIONS_TYPE = {
    'ADD_TO_CART': 'ADD_TO_CART',
    'REMOVE_FROM_CART': 'REMOVE_FROM_CART',
    'CLEAR_CART': 'CLEAR_CART'
}

export const updateLocalStorage = (cart) => {
    window.localStorage.setItem('cart', JSON.stringify(cart));
}
// 
const UPDATE_STATE_CART = {
    [CART_ACCIONS_TYPE.ADD_TO_CART]: (state, action) => {
        const { id } = action.payload;
        const productIndex = state.findIndex(item => item.id === id);
        if (productIndex >= 0) {
            const newState = structuredClone(state);
            newState[productIndex].quantity += 1;
            return newState;
        }
        const newState = [...state, { ...action.payload, quantity: 1 }];

        updateLocalStorage(newState);
        return newState;
    },
    [CART_ACCIONS_TYPE.REMOVE_FROM_CART]: (state, action) => {
        const { id } = action.payload;
        const newState = state.filter(item => item.id !== id);
        updateLocalStorage(newState);
        return newState;
    },
    [CART_ACCIONS_TYPE.CLEAR_CART]: () => {    
        const newState = [];
        updateLocalStorage(newState);
        return newState;
    }
}

export const cartReducer = (state, action) => {
    const { type: actionType } = action;
    // switch (actionType) {
    //     case CART_ACCIONS_TYPE.ADD_TO_CART: {
    //         const { id } = actionPayload;
    //         const productIndex = state.findIndex(item => item.id === id);
    //         if (productIndex >= 0) {
    //             const newState = structuredClone(state);
    //             newState[productIndex].quantity += 1;
    //             return newState;
    //         }
    //         const newState = [...state, { ...action.payload, quantity: 1 }];

    //         updateLocalStorage(newState);
    //         return newState;
    //     }

    //     case CART_ACCIONS_TYPE.REMOVE_FROM_CART: {
    //         const { id } = actionPayload;
    //         const newState = state.filter(item => item.id !== id);
    //         updateLocalStorage(newState);
    //         return newState;
    //     }
    //     case CART_ACCIONS_TYPE.CLEAR_CART: {
    //         const newState = cardInitialState;
    //         updateLocalStorage(newState);
    //         return newState;
    //     }

    //     default:
    //         return state;
    // }

    const updateState = UPDATE_STATE_CART[actionType];
    return updateState ? updateState(state, action) : state;
}