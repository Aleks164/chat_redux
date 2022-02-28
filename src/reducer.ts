/* eslint-disable default-param-last */
import { Reducer } from "redux";
import { MessageType } from "./types";

export type State = {
  data: MessageType[] | undefined;
  error: Error | undefined;
  curUser: string | undefined;
  appState: string | undefined;
};

export const initialState: State = {
  data: undefined,
  error: undefined,
  curUser: undefined,
  appState: undefined,
};

export const apiReducer: Reducer<State> = (state = initialState, action) => {
  switch (action.type) {
    case "identification":
      return {
        ...state,
        appState: "identification",
        curUser: action.curUser === undefined ? "Anonim" : action.curUser,
      };
    case "loading":
      return { ...state, appState: "loading" };
    case "incomMes":
      return { ...state, data: action.payload, appState: "incomMes" };
    case "success":
      return {
        ...state,
        data: action.payload,
        error: undefined,
        appState: "success",
      };
    case "error":
      return {
        ...state,
        data: undefined,
        appState: "error",
        error: action.error,
      };
    default:
      return state;
  }
};
