"use strict"

import Animal from "./Animal.js"

function Wolf () {
    Animal.apply(this)
    this.name = 'wolf'
}

Wolf.prototype = Object.create(Animal.prototype);
Wolf.prototype.constructor = Wolf;

Wolf.prototype.eat = function () {
    alert(`Your ${this.name} eats`)
}


export default Wolf;