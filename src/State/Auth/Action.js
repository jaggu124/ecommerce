import axios from "axios";
import { API_BASE_URL } from "../../config/appConfig"
import {REGISTER_SUCCESS, REGISTER_REQUEST, GET_USER_SUCCESS, GET_USER_REQUEST, GET_USER_FAILURE, LOGOUT, REGISTER_FAILURE, LOGIN_FAILURE} from "./ActionType"
import {LOGIN_REQUEST, LOGIN_SUCCESS} from "./ActionType"


const jwt = localStorage.getItem("jwt");
const registerRequest = () => ({type:REGISTER_REQUEST});
const registerSuccess = (user) => ({type:REGISTER_SUCCESS, payload:user});
const registerFailed = (error) => ({type:REGISTER_FAILURE, payload:error});

export const register = (UserData) => async (dispatch)=>{
    dispatch(registerRequest());
    try {
         const response = await axios.post(`${API_BASE_URL}/auth/signup`,UserData); 
         const user = response.data;
         if(user.jwt){
            localStorage.setItem("jwt", user.jwt);
         }  
         dispatch(registerSuccess(user.jwt));   
    } catch (error) {
        dispatch(registerFailed(error.message));
    }
}
const loginRequest = () => ({type:LOGIN_REQUEST});
const loginSuccess = (user) => ({type:LOGIN_SUCCESS, payload:user});
const loginFailed = (error) => ({type:LOGIN_FAILURE, payload:error});

export const login = (UserData) => async (dispatch)=>{
    dispatch(loginRequest());
    try {
         const response = await axios.post(`${API_BASE_URL}/auth/login`,UserData); 
         const user = response.data;
         if(user.jwt){
            localStorage.setItem("jwt", user.jwt);
         }  
         dispatch(loginSuccess(user.jwt));   
    } catch (error) {
        dispatch(loginFailed(error.message));
    }
}

const getUserRequest = () => ({type:GET_USER_REQUEST});
const getUserSuccess = (user) => ({type:GET_USER_SUCCESS, payload:user});
const getUserFailed = (error) => ({type:GET_USER_FAILURE, payload:error});

export const getUser = (jwt) => async (dispatch)=>{
    dispatch(getUserRequest());
    try {
         const response = await axios.get(`${API_BASE_URL}/api/users/profile`, {
            headers : {
                "Authorization" : `Bearer ${jwt}`
            }
         }); 
         const user = response.data;
        
         dispatch(getUserSuccess(user));   
    } catch (error) {
        dispatch(getUserFailed(error.message));
    }
}

export const logout = () => (dispatch) => {

    dispatch({type:LOGOUT, payload:null});
    localStorage.clear();

}