import { MessageType } from "./types";
import blink from "./images/blink.png";
import fun from "./images/fun.png";
import happy from "./images/happy.png";
import sad from "./images/sad.png";
import xD from "./images/xD.png";

const smilies = [[/:-?\)+/gi, happy, ":-)"], [/(X|x)D/gi, xD, "xD"], [/('|`)-?\)+/gi, blink, "'-)"], [/:-?\(+/gi, sad, ":-("], [/;-?D+/gi, fun, ";D"]];

export function contentMList(messageList: MessageType[] | undefined) {

  if (messageList) {
    let resultMesList = "";
    messageList
      .slice(messageList.length - 20, messageList.length)
      .reverse()
      .forEach((el) => {
        let messageWithSmlies = el.message;
        const partOFDate = String(el.date).match(
          /\w+ \w+ \d+ \d+ \d+:\d+:\d+/i
        );
        const rightTypeDate = new Date(
          partOFDate as unknown as string
        ).toLocaleString("ru");
        for (let i = 0; i < smilies.length; i++) {
          messageWithSmlies = messageWithSmlies.replace(smilies[i][0], `<img src="${smilies[i][1]}" alt="${smilies[i][2]}" style="width: 35px;"/>`);
        }
        resultMesList += `<div class="items"><p class="name">${el.nickname ? el.nickname : el.name
          }</p><div class="massageBlock"><p class="message">${messageWithSmlies
          }</p><p class="time">${rightTypeDate}</p></div></div><hr>`;
      });
    return resultMesList;
  }

  return `data is undefined`;
}
