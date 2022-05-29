'use strict'
var getButtonTemplate = require("./templates/button");

function addOnCreateEventListeners(animal) {
    document.querySelector(`.js-actions-${animal.name}`).addEventListener('click', (e)=> {
        if(e.target.tagName !== 'BUTTON' || e.target.disabled) {
            return
        }

        var action = e.target.dataset.action;

        animal[action]()
    })
    document.querySelector(`.js-create-${animal.name}`).disabled = true;
}

function getDefaultStatus(name) {
    return `<p class='js-status-${name}' data-status=''>Congrads!!! You've created a ${name}.</p>`
}

function getButtonsSet(animal, actions) {
    var buttons = '';

    for (var action of actions) {
        var isDisabled = animal[action] ? false : true;
        var button = getButtonTemplate(animal.name, action, isDisabled, animal.messages[action] || '');
        buttons += button;
    }

    return buttons;
}

function getHuntResult() {
    var hare = document.querySelector('.js-card-hare');

    if(hare === null) {
        return null
    }

    return hare.querySelector('.js-status-hare').dataset.status !== 'hide' ? hare : null;
}

function makeHareDisabled(hareCard) {
    var actionButtons = hareCard.querySelectorAll('.button-action');
    actionButtons.forEach(el => el.disabled = true)

}

module.exports = {
    addOnCreateEventListeners: addOnCreateEventListeners,
    getDefaultStatus: getDefaultStatus,
    getButtonsSet: getButtonsSet,
    getHuntResult: getHuntResult,
    makeHareDisabled: makeHareDisabled
}