import { store } from "./store";
import * as actions from "./actions";
import { getMessagesList } from "./messagesApi";
import { MessageType } from "./types";
import { contentMList } from "./contentMList";

export function startDrawMList(messageField: HTMLElement) {
  store.dispatch(actions.loading());
  getMessagesList()
    .then((response: MessageType[]) => {
      store.dispatch(actions.success(response));
      messageField.innerHTML = contentMList(response);
    })
    .catch((error: Error) => {
      store.dispatch(actions.anyError(error));
      messageField.innerHTML = String(error);
    });
}
