"use strict"
var utils = require('../utils')

function Animal(name, image) {

    this.name = name;
    this.image = image;
    this.messages = {
        walk: `Your ${this.name} is walking!`,
        eat: `Your ${this.name} is eating! Omnomnom...`
    }
    this.status = '';

    utils.createAnimal.call(this, '.js-animals-container')
}

Animal.prototype.walk = function () {
    utils.updateAnimalStatus.call(this, 'walk')
}

Animal.prototype.eat = function() {
    utils.updateAnimalStatus.call(this, 'eat')
}

module.exports = Animal;