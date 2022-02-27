import { MessageType } from "./types";

export const identification = (curUser: string) => ({
  type: "identification",
  curUser,
});

export const loading = () => ({
  type: "loading",
});

export const success = (payload: MessageType[]) => ({
  type: "success",
  payload,
});

export const incomMes = (payload: MessageType[]) => ({
  type: "incomMes",
  payload,
});

export const anyError = (error: Error) => ({
  type: "error",
  error,
});
