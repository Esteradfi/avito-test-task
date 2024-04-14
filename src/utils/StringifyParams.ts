//Делает query строку из объекта
export const stringifyParams = (params: Record<string, string | number | (string | number)[]>) => {
    const searchParams = new URLSearchParams();

    for (const [key, value] of Object.entries(params)) {
        if (Array.isArray(value)) {
            value.forEach((item) => {
                searchParams.append(key, item.toString());
            });
        } else {
            searchParams.set(key, value.toString());
        }
    }

    return '?' + searchParams.toString();
};