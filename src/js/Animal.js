"use strict"
var getCardElement = require('./templates/card')
var utils = require('./utils')

function Animal(name, image) {

    this.name = name;
    this.image = image;
    this.messages = {
        walk: this.name + ' ' + 'is walking!',
        eat: this.name + ' ' + 'is eating! Omnomnom...',
    }
    this.status = '';
}

Animal.prototype.walk = function () {
    Animal.updateStatus.call(this, 'walk', `Your ${this.messages.walk}`)
}

Animal.prototype.eat = function() {
    Animal.updateStatus.call(this, 'eat', `Your ${this.messages.eat}`)
}

Animal.create = function(containerSelector) {
    var container = document.querySelector(containerSelector);
    container.insertAdjacentHTML('afterbegin', getCardElement(this));

    utils.addOnCreateEventListeners(this)
}

Animal.updateStatus = function(status, statusMessage) {
    var animalStatus = document.querySelector(`.js-status-${this.name}`)
    animalStatus.textContent = statusMessage;
    animalStatus.dataset.status = status;
}

module.exports = Animal;