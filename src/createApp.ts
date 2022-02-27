import { store } from "./store";
import * as actions from "./actions";
import { sendMessage, observeWithEventSource } from "./messagesApi";
import { MessageType } from "./types";
import { identificationWindow } from "./identification";
import { startDrawMList } from "./startDrawMList";
import { render, selectData } from "./render";

export function createApp(el: HTMLElement) {
  const loadStatus = document.querySelector("#loadStatus") as HTMLElement;
  const form = document.querySelector("form") as HTMLElement;
  const textInput = document.querySelector("#textInput") as HTMLInputElement;

  identificationWindow();

  store.subscribe(() => render(selectData(store.getState()), loadStatus, el));

  startDrawMList(el);

  if (textInput) {
    textInput.addEventListener("input", () => {
      textInput.style.height = "56px";
      textInput.style.height = `${textInput.scrollHeight}px`;
    });
  }

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const state = store.getState();
      const message = {
        message: textInput.value,
        name: state.curUser,
      };
      sendMessage(message as MessageType);

      textInput.value = "";
    });
  }
  setTimeout(() => {
    observeWithEventSource((data: MessageType) => {
      if (data.date) {
        console.log(data);

        const state = store.getState().data;
        console.log(state);
        if (state) {
          state.push(data);
          console.log(state);

          store.dispatch(actions.incomMes(state));
        }
      }
    });
  }, 0);
}
