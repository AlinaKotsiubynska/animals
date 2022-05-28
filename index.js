'use strict'

import Animal from './Animal.js'
import Hare from "./Hare.js"
import Wolf from "./Wolf.js"

document.querySelector('.js-create-animal').addEventListener('click', function () {
    var animal = new Animal();
    var animalHtml = "<p>You've created an animal! It can <button type='button' class='js-animal-walk'>walk</button>!</p>"
    document.querySelector('.js-animal').innerHTML = animalHtml;
    document.querySelector('.js-animal-walk').addEventListener('click', function () {
        animal.walk()
    })
    this.disabled = true;
})

document.querySelector('.js-create-hare').addEventListener('click', function () {
    var animal = new Hare();
    var animalHtml = "<p>You've created a hare! It can <button type='button' class='js-hare-walk'>walk</button> and <button type='button' class='js-hare-jump'>jump</button>!</p>"
    document.querySelector('.js-hare').innerHTML = animalHtml;
    document.querySelector('.js-hare-jump').addEventListener('click', function () {
        animal.jump()
    })
    document.querySelector('.js-hare-walk').addEventListener('click', function () {
        animal.walk()
    })
    this.disabled = true;
})

document.querySelector('.js-create-wolf').addEventListener('click', function () {
    var animal = new Wolf();
    var animalHtml = "<p>You've created a wolf! It can <button type='button' class='js-wolf-walk'>walk</button> and <button type='button' class='js-wolf-jump'>eat</button>!</p>"
    document.querySelector('.js-wolf').innerHTML = animalHtml;
    document.querySelector('.js-wolf-jump').addEventListener('click', function () {
        animal.eat()
    })
    document.querySelector('.js-wolf-walk').addEventListener('click', function () {
        animal.walk()
    })
    this.disabled = true;
})
