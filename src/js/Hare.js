"use strict"

var Animal = require("./Animal")
var hareImg = require('../assets/hare.jpg')

function Hare() {
    Animal.call(this, 'hare', hareImg)
    this.messages.jump = this.name + ' ' + 'jumps!!! Boing-Boing!'
    this.messages.hide = this.name + ' ' + 'is hiding! Shhh!!!'
}

Hare.prototype = Object.create(Animal.prototype);
Hare.prototype.constructor = Hare;

Hare.prototype.jump = function() {
    Animal.updateStatus.call(this, 'jump', `Your ${this.messages.jump}`)
}

Hare.prototype.hide = function() {
    Animal.updateStatus.call(this, 'hide', `Your ${this.messages.hide}`)
}

Hare.prototype.walk = null;

module.exports = Hare;