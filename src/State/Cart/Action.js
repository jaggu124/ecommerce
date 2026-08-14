import { api } from "../../config/appConfig";
import { ADD_TO_CART_ITEM_FAILURE, ADD_TO_CART_ITEM_REQUEST, ADD_TO_CART_ITEM_SUCCESS, GET_TO_CART_FAILURE, GET_TO_CART_REQUEST, GET_TO_CART_SUCCESS, REMOVE_CART_ITEM_FAILURE, REMOVE_CART_ITEM_SUCCESS, UPDATE_CART_ITEM_FAILURE, UPDATE_CART_ITEM_REQUEST, UPDATE_CART_ITEM_SUCCESS } from "./ActionType"


export const getCart = () => async (dispatch) => {
    dispatch({type:GET_TO_CART_REQUEST});
    try {

        const {data} = await api.get("/api/cart");
        console.log("data1 : ", data);
        dispatch({type:GET_TO_CART_SUCCESS, payload:data});
        
    } catch (error) {
        dispatch({type:GET_TO_CART_FAILURE, payload:error.message});
    }
}

export const addItemToCart = (reqData) => async (dispatch) => {
    dispatch({type:ADD_TO_CART_ITEM_REQUEST});
    try {

        const {data} = await api.put("/api/cart/add",reqData);
        dispatch({type:ADD_TO_CART_ITEM_SUCCESS, payload:data});
        
    } catch (error) {
        dispatch({type:ADD_TO_CART_ITEM_FAILURE, payload:error.message});
    }
}

export const removeItemToCart = (cartItemId) => async (dispatch) => {
    dispatch({type:REMOVE_CART_ITEM_FAILURE});
    try {

        const {data} = await api.delete(`/api/cart_items/${cartItemId}`);
        dispatch({type:REMOVE_CART_ITEM_SUCCESS, payload:data});
        
        
    } catch (error) {
        dispatch({type:REMOVE_CART_ITEM_FAILURE, payload:error.message});
    }
}

export const updateItemToCart = (reqData) => async (dispatch) => {
    dispatch({type:UPDATE_CART_ITEM_REQUEST});
    try {

        const {data} = await api.put(`/api/cart_items/${reqData.cartItemId}`,reqData.data);
        dispatch({type:UPDATE_CART_ITEM_SUCCESS, payload:data});
        
    } catch (error) {
        dispatch({type:UPDATE_CART_ITEM_FAILURE, payload:error.message});
    }
}

