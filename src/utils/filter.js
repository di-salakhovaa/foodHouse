export const filterSalad = (data, id) => {
    return data.filter((item) => {
        return item.category === id;
    });
}