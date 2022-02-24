import { MessageType } from "./types";

export function contentMList(messageList: MessageType[]) {
    let q2 = "";
    console.log(messageList)
    messageList.slice(messageList.length - 20, messageList.length).reverse().forEach((el) => {

        let rightTypeDate = String(el.date).match(/\w+ \w+ \d+ \d+ \d+:\d+:\d+/i);
        rightTypeDate = (<Date>new Date(rightTypeDate as unknown as string)).toLocaleString("ru");
        q2 += `<div class="items">
                <p class="name">${el.nickname ? el.nickname : el.name}</p>
                <div class="massageBlock">
                    <p class="message">${el.message}</p>
                    <p class="time">${rightTypeDate}</p>
                </div>
            </div>
            <hr>`
    });

    return q2;
}