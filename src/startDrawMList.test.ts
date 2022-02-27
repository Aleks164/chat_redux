/* eslint-disable no-promise-executor-return */
import { startDrawMList } from "./startDrawMList";
import { store } from "./store";
import * as messagesApi from "./messagesApi";
import * as content from "./contentMList";

describe("startDrawMList", () => {
  const sleep = (x: number) => new Promise((resolve) => setTimeout(resolve, x));
  let el: HTMLElement;
  beforeEach(() => {
    el = document.createElement("div");
    document.body.appendChild(el);
  });
  afterEach(() => {
    document.body.innerHTML = "";
  });

  it("contentMList return expected string if resolve 'ok'", async () => {
    const spycontentMList = jest.spyOn(content, "contentMList");
    spycontentMList.mockReturnValue("result");
    const spyGetMessagesList = jest.spyOn(messagesApi, "getMessagesList");
    spyGetMessagesList.mockResolvedValue(
      "messageList" as unknown as Promise<[]>
    );

    const spyStore = jest.spyOn(store, "dispatch");

    startDrawMList(el);
    expect(spyStore).toHaveBeenCalledWith({ type: "loading" });
    expect(spyGetMessagesList).toHaveBeenCalled();

    await sleep(0);

    expect(spyStore).toHaveBeenCalledWith({
      type: "success",
      payload: "messageList",
    });
    expect(el.innerHTML).toBe("result");
    spycontentMList.mockRestore();
    spyGetMessagesList.mockRestore();
    spyStore.mockRestore();
  });
  it("contentMList return expected string if reject", async () => {
    const spycontentMList = jest.spyOn(content, "contentMList");
    spycontentMList.mockReturnValue("result");

    const spyGetMessagesList = jest.spyOn(messagesApi, "getMessagesList");
    spyGetMessagesList.mockRejectedValue("some trouble");

    const spyStore = jest.spyOn(store, "dispatch");

    startDrawMList(el);

    expect(spyStore).toHaveBeenCalledWith({ type: "loading" });

    expect(spyGetMessagesList).toHaveBeenCalled();

    await sleep(0);

    expect(spyStore).toHaveBeenCalledWith({
      type: "error",
      error: "some trouble",
    });
    expect(el.innerHTML).toBe("some trouble");
    spycontentMList.mockRestore();
    spyGetMessagesList.mockRestore();
    spyStore.mockRestore();
  });
});
