import { store } from "./store";
import * as actions from "./actions";

export function identificationWindow() {
    const mainEl = document.createElement("div");
    const opacityWindow = document.createElement("div");

    opacityWindow.classList.add("opacityWindow");
    mainEl.classList.add("modalWindow");
    mainEl.innerHTML = `<div id="mainWindow">    
    <input id="modalInput" type="text" placeholder="Name" value="Anonim">
    <input id="modalsubmit" type="submit" value="Confirm name">
    </div>`

    document.body.append(mainEl, opacityWindow);

    const modalsubmit = document.querySelector("#modalsubmit");
    const modalInput = <HTMLInputElement>document.querySelector("#modalInput");
    if (modalsubmit && modalInput) {
        modalsubmit.addEventListener("click", () => {
            store.dispatch(actions.identification(modalInput.value));
            document.body.removeChild(mainEl);
            document.body.removeChild(opacityWindow);
            document.body.style.overflowY = "visible";
        })
    }
    opacityWindow.addEventListener("click", () => {
        store.dispatch(actions.identification("Anonim"));
        document.body.removeChild(mainEl);
        document.body.removeChild(opacityWindow);
        document.body.style.overflowY = "visible";
    })
}