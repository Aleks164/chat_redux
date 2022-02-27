import { contentMList } from "./contentMList";
import { State } from "./reducer";
import { RenderData } from "./types";

export const render = (
  props: RenderData,
  loadStatus: HTMLElement,
  el: HTMLElement
) => {
  if (props.appState === "loading") {
    loadStatus.classList.add("loading");
  }
  if (props.appState === "error") {
    loadStatus.classList.remove("loading");
    loadStatus.classList.add("error");
  }
  if (props.appState === "success") {
    el.innerHTML = contentMList(props.data);
    loadStatus.classList.remove("loading");
    loadStatus.classList.add("success");
    setTimeout(() => {
      loadStatus.classList.remove("success");
    }, 2500);
  }
  if (props.appState === "incomMes") {
    el.innerHTML = contentMList(props.data);
    loadStatus.classList.remove("loading", "success");
    loadStatus.classList.add("incomMesOn");
    setTimeout(() => {
      loadStatus.classList.remove("incomMesOn");
    }, 2500);
  }
};

export const selectData = (state: State): RenderData => ({
  data: state.data,
  error: state.error,
  appState: state.appState,
});
