
export const identification = (curUser: string) => ({
    type: "identification",
    curUser
});

export const loading = () => ({
    type: "loading",
});

export const success = (payload: any) => ({
    type: "success",
    payload
});

export const anyError = (error: Error) => ({
    type: "error",
    error
});
