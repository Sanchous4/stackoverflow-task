export async function errorWrapper<T>(func: () => Promise<T>): Promise<T | []> {
    try {
        return await func();
    } catch (error) {
        console.error(error);
    }

    return [];
}
