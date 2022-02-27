import { contentMList } from "./contentMList";

describe("contentMList", () => {
  it("contentMList return expected string", () => {
    const messageListEl = {
      date: new Date(),
      message: `${Math.random() * 1000}`,
      name: `${Math.random() * 10}`,
    };
    const messageList = [];
    for (let i = 1; i < 21; i++) {
      messageList.push(messageListEl);
    }
    const expectEl = messageList[Math.floor(Math.random() * 21)];
    const partOFDate = String(expectEl.date).match(
      /\w+ \w+ \d+ \d+ \d+:\d+:\d+/i
    );
    const rightTypeDate = new Date(
      partOFDate as unknown as string
    ).toLocaleString("ru");
    const expectString = `<div class="items"><p class="name">${expectEl.name}</p><div class="massageBlock"><p class="message">${expectEl.message}</p><p class="time">${rightTypeDate}</p></div></div><hr>`;

    expect(contentMList(messageList)).toMatch(expectString);
  });
});
