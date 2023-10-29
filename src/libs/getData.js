export const getData = async (resource, query) => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`
    );
    const anime = await res.json();
    return anime;
}

export const getNestedAnimeResponse = async (resource, objectProperty) => {
    const response = await getData(resource)
    return response.data.flatMap(item => item.entry);
}
