import { State } from "./reducer";
import { store } from "./store";
import * as actions from "./actions";
import { getMessagesList, sendMessage, observeWithEventSource } from "./messagesApi";
import { contentMList } from "./contentMList";
import { RenderData, MessageType } from "./types";
import { identificationWindow } from "./identification"
import "./index.css";

const el = document.querySelector("#app") as HTMLElement;
const loadStatus = document.querySelector("#loadStatus") as HTMLElement;
const form = document.querySelector("form") as HTMLElement;
const textInput = document.querySelector("#textInput") as HTMLInputElement;

if (textInput) {
    textInput.addEventListener("input", () => {
        textInput.style.height = "56px";
        textInput.style.height = `${textInput.scrollHeight}px`;
    })
}

async function loadData() {
    store.dispatch(actions.loading());
    getMessagesList()
        .then((response: MessageType[]) => {
            store.dispatch(actions.success(response));
        })
        .catch((error: Error) => {
            store.dispatch(actions.anyError(error));
        });
}

const render = (props: RenderData) => {
    if (props.isLoading) {
        loadStatus.classList.add("loading");
    }
    if (props.error) {
        loadStatus.classList.remove("loading");
        loadStatus.classList.add("error");
    }
    if (props.data) {
        el.innerHTML = contentMList(props.data);
        loadStatus.classList.remove("loading");
        loadStatus.classList.add("success");
        setTimeout(() => {
            loadStatus.classList.remove("success");
        }, 2500);
    }
};

function startDrawMList(messageField: HTMLElement) {
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

const selectData = (state: State): RenderData => ({
    isLoading: state.isLoading,
    data: state.data,
    error: state.error,
});

identificationWindow();

store.subscribe(() => render(selectData(store.getState())));

startDrawMList(el);

if (form) {
    form.addEventListener("submit", async (event) => {
        event.preventDefault();
        const state = store.getState();
        const message = {
            message: textInput.value,
            name: state.curUser
        }
        sendMessage(message);

        loadData();

        textInput.value = "";
    })
}
setTimeout(() => {
    observeWithEventSource((data: MessageType) => {
        if (data.date) {
            console.log(data);

            const state = store.getState().data;
            console.log(state);

            state.push(data);
            console.log(state);

            store.dispatch(actions.success(state));
        }
    });
}, 1000);

