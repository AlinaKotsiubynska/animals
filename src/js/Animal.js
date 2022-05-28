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
    Animal.updateStatus.call(this, `Your ${this.messages.walk}`)
}

Animal.prototype.eat = function() {
    Animal.updateStatus.call(this, `Your ${this.messages.eat}`)
}

Animal.create = function(containerSelector) {
    var container = document.querySelector(containerSelector);
    container.insertAdjacentHTML('afterbegin', getCardElement(this));

    utils.addOnCreateEventListeners(this)
}

Animal.updateStatus = function(newStatus) {
    document.querySelector(`.js-status-${this.name}`).textContent = newStatus;
}

module.exports = Animal;