export const actions = {
    sending: () => ({
        type: "Sending"
    }),

    dispatched: () => ({
        type: "Dispatched"
    }),

    receiving: () => ({
        type: "Receiving"
    }),

    received: (payload: any) => ({
        type: "Received",
        payload
    }),

    error: (error: Error) => ({
        type: "Error",
        error
    }),
};