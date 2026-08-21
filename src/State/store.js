import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { AuthReducer } from "./Auth/Reducer.js";
import { customerProductReducer } from "./Product/Reducer.js";
import { CartReducer } from "./Cart/Reducer.js";
import { orderReducer } from "./Order/Reducer.js";
import adminOrderReducer from "./Admin/Order/Reducer.js";
import { customersReducer } from "./Admin/Customer/Reducer.js";

const rootReducer = combineReducers ({
    auth:AuthReducer,
    products: customerProductReducer,
    cart: CartReducer,
    order: orderReducer,
    adminOrder: adminOrderReducer,
    customers: customersReducer
})
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
