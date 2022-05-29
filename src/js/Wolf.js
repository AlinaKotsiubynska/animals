"use strict"

var Animal = require('./Animal')
var wolfImg = require('../assets/wolf.jpg')
var utils = require('./utils')

function Wolf() {
    Animal.call(this, 'wolf', wolfImg)
    this.messages.hunt = {
        start: 'Your' + ' ' + this.name + ' ' + 'is hunting! Arrr!',
        success: 'Your' + ' ' + this.name + ' ' + 'hunted a hare! Well done!',
        failure: 'Your' + ' ' + this.name + "'s" + ' ' + 'hunt failed. So pity(('
    }
    this.pray = null;
}

Wolf.prototype = Object.create(Animal.prototype);
Wolf.prototype.constructor = Wolf;

Wolf.prototype.hunt = function() {
    Animal.updateStatus.call(this, 'hunt', ` ${this.messages.hunt.start}`)
    setTimeout(() => {
        var hare = utils.getHuntResult()
        if(hare === null) {
            Animal.updateStatus.call(this, '', this.messages.hunt.failure)
        } else {
            this.pray = hare;
            Animal.updateStatus.call(this, '', this.messages.hunt.success)
            utils.makeHareDisabled(hare)
        }
    }, 1000)
}

Wolf.prototype.eat = function() {
    if(this.pray === null) {
        alert(`Your ${this.name} should hunt first!`)
    } else {
        Animal.updateStatus.call(this, 'eat', `Your ${this.messages.eat}`)
        this.pray.remove()
        this.pray = null;
        document.querySelector('.js-create-hare').disabled = false;
    }
}


module.exports = Wolf;