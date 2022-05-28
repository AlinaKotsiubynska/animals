"use strict"

function Animal () {

    this.name = "animal";
}

Animal.prototype.walk = function () {
    alert(`Your ${this.name} walks`)
}

export default Animal;