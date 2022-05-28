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
    return `<p class='js-status-${name}'>Congrads!!! You've created a ${name}.</p>`
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

module.exports = {
    addOnCreateEventListeners: addOnCreateEventListeners,
    getDefaultStatus: getDefaultStatus,
    getButtonsSet: getButtonsSet
}