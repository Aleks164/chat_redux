import { Reducer } from "redux";

export type State = {
    isLoading: boolean;
    data: any | undefined;
    error: Error | undefined;
    curUser: string | undefined;
};

const initialState: State = {
    isLoading: false,
    data: undefined,
    error: undefined,
    curUser: undefined
};

export const apiReducer: Reducer<State> = (state = initialState, action) => {
    switch (action.type) {
        case "identification":
            return { ...state, isLoading: false, curUser: action.curUser === undefined ? "Anonim" : action.curUser };
        case "loading":
            return { ...state, isLoading: true };
        case "success":
            return {
                ...state,
                isLoading: false,
                data: action.payload,
                error: undefined
            };
        case "error":
            return {
                ...state,
                isLoading: false,
                data: undefined,
                error: action.error
            };
        default:
            return state;
    }
};
