export type MessageType = {
  name: string;
  nickname?: string;
  date: Date;
  message: string;
};

export type RenderData = {
  data: MessageType[] | undefined;
  error: Error | undefined;
  appState: string | undefined;
};
