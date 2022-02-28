import { identificationWindow } from "./identification";
import { store } from "./store";

describe("identification", () => {
  it("identification drawing expect elements", () => {
    identificationWindow();
    const mainEl = document.querySelector(".modalWindow");
    const opacityWindow = document.querySelector(".opacityWindow");
    if (mainEl) {
      expect(mainEl.innerHTML.trim()).toBe(
        `<div id="mainWindow"><input id="modalInput" type="text" placeholder="Name" value="Anonim"><input id="modalsubmit" type="submit" value="Confirm name"></div>`
      );
      expect(opacityWindow).toBeTruthy();
    }
  });
  it("identification deletion modal window and dispatch 'identification' action after click on button", () => {
    identificationWindow();

    let mainEl = document.querySelector(".modalWindow");
    const modalsubmit = document.querySelector("#modalsubmit");
    let opacityWindow = document.querySelector(".opacityWindow");
    const modalInput = <HTMLInputElement>document.querySelector("#modalInput");

    expect(mainEl).toBeTruthy();
    expect(opacityWindow).toBeTruthy();

    const spy = jest.spyOn(store, "dispatch");

    modalInput.value = "Losos'";

    const event = new Event("click");
    if (modalsubmit) {
      modalsubmit.dispatchEvent(event);

      mainEl = document.querySelector(".modalWindow");
      opacityWindow = document.querySelector(".opacityWindow");

      expect(mainEl).toBeFalsy();
      expect(opacityWindow).toBeFalsy();
      expect(document.body.style.overflowY).toBe("visible");

      const testAction = {
        curUser: modalInput.value,
        type: "identification",
      };

      expect(spy).toHaveBeenCalledWith(testAction);
      spy.mockRestore();
    }
  });
  it("identification deletion modal window and dispatch 'identification' action when clicking past the modal window", () => {
    identificationWindow();

    let mainEl = document.querySelector(".modalWindow");
    let opacityWindow = document.querySelector(".opacityWindow");

    expect(mainEl).toBeTruthy();
    expect(opacityWindow).toBeTruthy();

    const spy = jest.spyOn(store, "dispatch");

    const event = new Event("click");
    if (opacityWindow) {
      opacityWindow.dispatchEvent(event);

      mainEl = document.querySelector(".modalWindow");
      opacityWindow = document.querySelector(".opacityWindow");

      expect(mainEl).toBeFalsy();
      expect(opacityWindow).toBeFalsy();
      expect(document.body.style.overflowY).toBe("visible");

      const testAction = {
        curUser: "Anonim",
        type: "identification",
      };

      expect(spy).toHaveBeenCalledWith(testAction);
      spy.mockRestore();
    }
  });
});
