"use strict"

var Animal = require('./Animal')
var wolfImg = require('../../assets/wolf.jpg')
var utils = require('../utils')

function Wolf() {
    Animal.call(this, 'wolf', wolfImg)
    this.messages.huntStart = `Your ${this.name} is hunting! Arrr!`;
    this.messages.huntSuccess = `Your ${this.name} hunted a hare! Well done!`;
    this.messages.huntFailure = `Your ${this.name}'s hunt failed. So pity((`;
    this.messages.eat = `Your ${this.name}'s hunt failed. So pity((`;
    this.messages.eatFailure = `Your ${this.name} should hunt first!`;
    this.pray = null;
}

Wolf.prototype = Object.create(Animal.prototype);
Wolf.prototype.constructor = Wolf;

Wolf.prototype.hunt = function() {
    utils.updateAnimalStatus.call(this, 'huntStart')
    setTimeout(() => {
        var hare = utils.getHuntResult()
        if(hare === null) {
            utils.updateAnimalStatus.call(this, 'huntFailure')
        } else {
            this.pray = hare;
            utils.updateAnimalStatus.call(this, 'huntSuccess')
            utils.makeAnimalDisabled(hare)
        }
    }, 1000)
}

Wolf.prototype.eat = function() {
    if(this.pray === null) {
        utils.updateAnimalStatus.call(this, 'eatFailure')
    } else {
        utils.updateAnimalStatus.call(this, 'eat')
        this.pray.remove()
        this.pray = null;
        document.querySelector('.js-create-hare').disabled = false;
    }
}

module.exports = Wolf;
