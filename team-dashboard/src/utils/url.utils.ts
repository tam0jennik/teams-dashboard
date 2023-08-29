export const encode = (data: any) => {
    const jsonString = JSON.stringify(data);
    return encodeURIComponent(jsonString);
}

export const decode = <T>(data: string, defaultValue: T): T => {
    try {
        const jsonString = decodeURIComponent(data);
        return JSON.parse(jsonString) as T;
    } catch (e) {
        return defaultValue;
    }
}