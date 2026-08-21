
import { CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, GET_ORDER_BY_ID_FAILURE, GET_ORDER_BY_ID_REQUEST, GET_ORDER_BY_ID_SUCCESS, GET_ORDER_HISTORY_FAILURE, GET_ORDER_HISTORY_REQUEST, GET_ORDER_HISTORY_SUCCESS } from "./ActionType"
import { api } from "../../config/appConfig";

export const createOrder = (reqData) => async (dispatch) => {

    dispatch({type:CREATE_ORDER_REQUEST});
    try {

        const config = {
            headers : {
                "Content-Type" : "application/json",
                Authorization : `Bearer ${reqData.jwt}`,
            }
        };

        const {data} = await api.post(`/api/orders/`, reqData.address, config);

        if(data.id){
            reqData.navigate({ search: `step=3&order_id=${data.id}`});
        }
        console.log("created order - ", data);
        dispatch({type:CREATE_ORDER_SUCCESS, payload:data});
        dispatch({type:"CLEAR_CART"});
        
    } catch (error) {

        dispatch({type:CREATE_ORDER_FAILURE, payload: error.message})
        
    }

}


export const getOrderById = (orderId) => async (dispatch) => {

    dispatch({type:GET_ORDER_BY_ID_REQUEST});
    try {

        const {data} = await api.get(`/api/orders/${orderId}`);
        console.log("get order - ", data);
        dispatch({type:GET_ORDER_BY_ID_SUCCESS, payload:data});
        
    } catch (error) {

        dispatch({type:GET_ORDER_BY_ID_FAILURE, payload: error.message})
        
    }

}

export const getUsersOrders = () => async (dispatch) => {
    dispatch({ type: GET_ORDER_HISTORY_REQUEST });

    try {
        const jwt = localStorage.getItem("jwt");

        const config = {
            headers: {
                Authorization: `Bearer ${jwt}`,
            },
        };

        const { data } = await api.get(`/api/orders/user`, config);

        console.log("user orders - ", data);

        dispatch({
            type: GET_ORDER_HISTORY_SUCCESS,
            payload: data
        });

    } catch (error) {
        console.log("get user orders error - ", error);

        dispatch({
            type: GET_ORDER_HISTORY_FAILURE,
            payload: error.message
        });
    }
};