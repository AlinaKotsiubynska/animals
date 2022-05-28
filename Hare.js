"use strict"

import Animal from "./Animal.js"

function Hare () {
    Animal.apply(this)
    this.name = 'hare'
}

Hare.prototype = Object.create(Animal.prototype);
Hare.prototype.constructor = Hare;

Hare.prototype.jump = function () {
    alert(`Your ${this.name} JUMPS`)
}


export default Hare;