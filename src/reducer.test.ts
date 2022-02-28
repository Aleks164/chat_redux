import { apiReducer, initialState } from "./reducer";

describe("apiReducer", () => {
  it("should return the initial state", () => {
    expect(apiReducer(initialState, { type: undefined })).toEqual(initialState);
  });
  it("identification action", () => {
    expect(
      apiReducer(initialState, { type: "identification", curUser: "Losos'" })
    ).toEqual({
      appState: "identification",
      curUser: "Losos'",
      data: undefined,
      error: undefined,
    });
  });
  it("loading action", () => {
    expect(apiReducer(initialState, { type: "loading" })).toEqual({
      appState: "loading",
      curUser: undefined,
      data: undefined,
      error: undefined,
    });
  });
  it("incomMes action", () => {
    expect(
      apiReducer(initialState, { type: "incomMes", payload: "massge list" })
    ).toEqual({
      appState: "incomMes",
      curUser: undefined,
      data: "massge list",
      error: undefined,
    });
  });
  it("success action", () => {
    expect(
      apiReducer(initialState, { type: "success", payload: "massge list" })
    ).toEqual({
      appState: "success",
      curUser: undefined,
      data: "massge list",
      error: undefined,
    });
  });
  it("error action", () => {
    expect(
      apiReducer(initialState, { type: "error", error: "some trouble" })
    ).toEqual({
      appState: "error",
      curUser: undefined,
      data: undefined,
      error: "some trouble",
    });
  });
});
