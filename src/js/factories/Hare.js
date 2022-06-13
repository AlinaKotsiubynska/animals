"use strict"

var Animal = require("./Animal")
var utils = require('../utils')
var hareImg = require('../../assets/hare.jpg')

function Hare() {
    Animal.call(this, 'hare', hareImg)
    this.messages.jump = `Your ${this.name}  jumps!!! Boing-Boing!`;
    this.messages.hide = `Your ${this.name } is hiding! Shhh!!!`;
}

Hare.prototype = Object.create(Animal.prototype);
Hare.prototype.constructor = Hare;

Hare.prototype.jump = function() {
    utils.updateAnimalStatus.call(this, 'jump')
}

Hare.prototype.hide = function() {
    utils.updateAnimalStatus.call(this, 'hide')
}

Hare.prototype.walk = null;

module.exports = Hare;