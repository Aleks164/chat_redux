/* eslint-disable no-promise-executor-return */
import { createApp } from "./createApp";
import { identificationWindow } from "./identification";
import { store } from "./store";
import { startDrawMList } from "./startDrawMList";
import { sendMessage, observeWithEventSource } from "./messagesApi";
import { State } from "./reducer";

jest.mock("./identification", () => ({
  identificationWindow: jest.fn(),
}));
jest.mock("./startDrawMList", () => ({
  startDrawMList: jest.fn(),
}));
jest.mock("./messagesApi", () => ({
  sendMessage: jest.fn(),
  observeWithEventSource: jest.fn(),
}));

describe("createApp", () => {
  const sleep = (x: number) => new Promise((resolve) => setTimeout(resolve, x));
  const el = document.createElement("div");
  const form = document.createElement("form");
  form.innerHTML = `
  <textarea id="textInput" class="textarea" placeholder="type something here..."></textarea>
  <button class="custom-btn btn-12"><span>Click</span><span>Send</span></button>
  <div id="loadStatus"></div>`;
  document.body.append(form, el);

  it("createApp make functional and view", async () => {
    const spygetState = jest.spyOn(store, "getState");
    const spySubscribe = jest.spyOn(store, "subscribe");

    spygetState.mockReturnValue({ curUser: "Anonim" } as State);

    createApp(el);

    expect(identificationWindow).toHaveBeenCalled();
    expect(spySubscribe).toHaveBeenCalled();
    expect(startDrawMList).toHaveBeenCalled();

    const eventUnput = new Event("input");
    const textInput = document.querySelector("#textInput") as HTMLInputElement;
    textInput.value = "some mesage";
    textInput.dispatchEvent(eventUnput);

    const scrollHeight = `${textInput.scrollHeight}px`;

    expect(textInput.style.height).toBe(scrollHeight);

    const eventSubmit = new Event("submit");
    form.dispatchEvent(eventSubmit);

    expect(sendMessage).toHaveBeenCalledWith({
      message: "some mesage",
      name: "Anonim",
    });

    expect(textInput.value).toBe("");

    await sleep(15);

    expect(observeWithEventSource).toHaveBeenCalled();
  });
});
