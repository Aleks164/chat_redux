export type RenderData = {
    isLoading: boolean;
    data: any | undefined;
    error: Error | undefined;
};

export type MessageType = {
    name: string;
    nickname?: string;
    date: string;
    message: string;
}