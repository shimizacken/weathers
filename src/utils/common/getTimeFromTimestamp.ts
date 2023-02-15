export const getTimeFromTimestamp = (timestamp: number) =>
    new Date(1000 * timestamp).toLocaleTimeString();
