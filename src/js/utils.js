'use strict'

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

function getHuntResult() {
    var hare = document.querySelector('.js-card-hare');

    if(hare === null) {
        return null
    }

    return hare.querySelector('.js-status-hare').dataset.status !== 'hide' ? hare : null;
}

function makeAnimalDisabled(animalCard) {
    var actionButtons = animalCard.querySelectorAll('.button-action');
    actionButtons.forEach(el => el.disabled = true)

}

function updateAnimalStatus(status) {
    var animalStatus = document.querySelector(`.js-status-${this.name}`)
    animalStatus.textContent = status ? this.messages[status] : '';
    animalStatus.dataset.status = status;
}

function createAnimal(containerSelector) {
    var getCardElement = require("./templates/card")
    var container = document.querySelector(containerSelector);
    container.insertAdjacentHTML('afterbegin', getCardElement(this));

    addOnCreateEventListeners(this)
}

module.exports = {
    getHuntResult: getHuntResult,
    makeAnimalDisabled: makeAnimalDisabled,
    updateAnimalStatus: updateAnimalStatus,
    createAnimal: createAnimal
}