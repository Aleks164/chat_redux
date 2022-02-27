import { createStore } from "redux";
import { apiReducer } from "./reducer";

export const store = createStore(apiReducer);
