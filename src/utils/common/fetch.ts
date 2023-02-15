export const getRequestFn = (fetchFn: typeof fetch) => (url: string) => fetchFn(url).then(response => response.json());

export const request = getRequestFn(fetch);
