import { createStore, applyMiddleware } from "redux";
import { apiReducer } from "./reducer";

export const store = createStore(apiReducer);
