
import { api } from '../../../config/appConfig';
import {
  GET_CUSTOMERS_REQUEST,
  GET_CUSTOMERS_SUCCESS,
  GET_CUSTOMERS_FAILURE,
} from './ActionType';

export const getCustomers = () => async (dispatch) => {
  try {
    dispatch({ type: GET_CUSTOMERS_REQUEST });
    const { data } = await api.get(`/api/admin/users`); // adjust endpoint to match your actual backend route
    dispatch({
      type: GET_CUSTOMERS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({ type: GET_CUSTOMERS_FAILURE, payload: error.message });
  }
};