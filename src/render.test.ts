/* eslint-disable no-promise-executor-return */
import { render } from "./render";
import * as content from "./contentMList";
import { MessageType, RenderData } from "./types";

describe("render", () => {
  let el: HTMLElement;
  let loadStatus: HTMLElement;
  let spycontentMList: jest.SpyInstance<
    string,
    [messageList: MessageType[] | undefined]
  >;
  const sleep = (x: number) => new Promise((resolve) => setTimeout(resolve, x));

  beforeEach(() => {
    el = document.createElement("div");
    loadStatus = document.createElement("div");
    document.body.append(el, loadStatus);
    spycontentMList = jest.spyOn(content, "contentMList");
    spycontentMList.mockReturnValue("result");
  });

  afterEach(() => {
    document.body.innerHTML = "";
    spycontentMList.mockRestore();
  });

  it("render makes things dependent on props (appState: 'loading')", () => {
    const props = {
      data: "massage list",
      error: undefined,
      appState: "loading",
    };
    render(props as unknown as RenderData, loadStatus, el);

    expect(loadStatus.classList).toContain("loading");
  });
  it("render makes things dependent on props (appState: 'error')", () => {
    const props = {
      data: "massage list",
      error: undefined,
      appState: "error",
    };
    render(props as unknown as RenderData, loadStatus, el);

    expect(loadStatus.classList).toContain("error");
  });
  it("render makes things dependent on props (appState: 'success')", async () => {
    const props = {
      data: "massage list",
      error: undefined,
      appState: "success",
    };
    render(props as unknown as RenderData, loadStatus, el);

    expect(loadStatus.classList).toContain("success");
    expect(el.innerHTML).toContain("result");
    await sleep(2550);
    expect(loadStatus.classList).not.toContain("success");
  });
  it("render makes things dependent on props (appState: 'incomMes')", async () => {
    const props = {
      data: "massage list",
      error: undefined,
      appState: "incomMes",
    };
    render(props as unknown as RenderData, loadStatus, el);

    expect(loadStatus.classList).toContain("incomMesOn");
    expect(el.innerHTML).toContain("result");
    await sleep(2550);
    expect(loadStatus.classList).not.toContain("incomMesOn");
  });
});
