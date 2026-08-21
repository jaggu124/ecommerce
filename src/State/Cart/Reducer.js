import { ADD_TO_CART_ITEM_FAILURE, ADD_TO_CART_ITEM_REQUEST, ADD_TO_CART_ITEM_SUCCESS, GET_TO_CART_FAILURE, GET_TO_CART_REQUEST, GET_TO_CART_SUCCESS, REMOVE_CART_ITEM_FAILURE, REMOVE_CART_ITEM_REQUEST, REMOVE_CART_ITEM_SUCCESS, UPDATE_CART_ITEM_FAILURE, UPDATE_CART_ITEM_REQUEST, UPDATE_CART_ITEM_SUCCESS, CLEAR_CART } from "./ActionType"

const intialState = {
    cart: null,
    loading: false,
    error: null,
    cartItems: []
}

export const CartReducer = (state=intialState, action) => {

    switch(action.type){
        case ADD_TO_CART_ITEM_REQUEST:
            return {...state, loading: true, error: null};
        case ADD_TO_CART_ITEM_SUCCESS:
            return {...state, cartItems: action.payload.cartItems, cart: action.payload, loading: false, error: null};
        case ADD_TO_CART_ITEM_FAILURE:
            return {...state, loading: false, error: action.payload};
        case GET_TO_CART_REQUEST:
            return {...state, loading: true, error:null};
        case GET_TO_CART_SUCCESS:
            return {...state, cartItems: action.payload.cartItems, cart: action.payload, loading: false, error: null};
        case GET_TO_CART_FAILURE:
            return {...state, loading: false, error: action.payload};
        case REMOVE_CART_ITEM_REQUEST:
        case UPDATE_CART_ITEM_REQUEST:
            return {...state, loading: true, error: null};
        case REMOVE_CART_ITEM_SUCCESS:
            return {...state, deleteCartItems: action.payload, loading: false};
        case UPDATE_CART_ITEM_SUCCESS:
            return {...state, updateCartItems: action.payload, loading: false};
        case REMOVE_CART_ITEM_FAILURE:
        case UPDATE_CART_ITEM_FAILURE:
            return {...state, loading: false, error: action.payload}
        case CLEAR_CART:
            return { ...intialState };
        default:
            return state;
    }

}