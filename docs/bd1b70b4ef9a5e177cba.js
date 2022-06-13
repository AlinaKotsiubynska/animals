'use strict'
require('./scss/styles.scss')
var Hare = require("./js/factories/Hare")
var Wolf = require("./js/factories/Wolf")
var Animal = require("./js/factories/Animal")

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

    // Animal.create.call(animal, '.js-animals-container')
})