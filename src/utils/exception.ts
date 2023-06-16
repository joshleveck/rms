export const throw_exception = (message: string): never => {
    throw new Error(message);
};