'use strict'

var Hare = require("./js/Hare")
var Wolf = require("./js/Wolf")
var Animal = require("./js/Animal")

document.querySelector('.js-create-buttons').addEventListener('click', (e) => {
    if(e.target.tagName !== 'BUTTON') {
        return
    }

    let animal = {};
    
    if(e.target.dataset.animal === 'hare') {
        animal = new Hare('hare')
    } else {
        animal = new Wolf('wolf')
    }

    Animal.create.call(animal, '.js-animals-container')
})