"use strict"

var Animal = require('./Animal')
var wolfImg = require('../assets/wolf.jpg')

function Wolf() {
    Animal.call(this, 'wolf', wolfImg)
    this.messages.hunt = this.name + ' ' + 'is hunting! Arrr!'
}

Wolf.prototype = Object.create(Animal.prototype);
Wolf.prototype.constructor = Wolf;

Wolf.prototype.hunt = function() {
    Animal.updateStatus.call(this, `Your ${this.messages.hunt}`)
}


module.exports = Wolf;