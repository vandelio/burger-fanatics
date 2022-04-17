const getImage = (array) => {
    const randomElement = array[Math.floor(Math.random() * array.length)];
    return randomElement;
}
export default getImage;