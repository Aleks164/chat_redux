import { MessageType } from "./types";

export function contentMList(messageList: MessageType[] | undefined) {
  if (messageList) {
    let resultMesList = "";
    messageList
      .slice(messageList.length - 20, messageList.length)
      .reverse()
      .forEach((el) => {
        const partOFDate = String(el.date).match(
          /\w+ \w+ \d+ \d+ \d+:\d+:\d+/i
        );
        const rightTypeDate = new Date(
          partOFDate as unknown as string
        ).toLocaleString("ru");
        resultMesList += `<div class="items"><p class="name">${
          el.nickname ? el.nickname : el.name
        }</p><div class="massageBlock"><p class="message">${
          el.message
        }</p><p class="time">${rightTypeDate}</p></div></div><hr>`;
      });
    return resultMesList;
  }

  return `data is undefined`;
}
