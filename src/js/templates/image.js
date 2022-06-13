function createImage(animal) {
    return `<img class='image' src='${animal.image}' alt='${animal.name}'/>`
}

module.exports = createImage;
