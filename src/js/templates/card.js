var actions = require('../constants.js').actions;

function createCard(animal) {
    var templates = require('./index')
    var status = templates.createStatus(animal.name);
    var image = templates.createImage(animal);
    var buttons = templates.createButtonSet(animal, actions);

    return `
    <div class='card card-${animal.name} js-card-${animal.name}'>
        <h2 class="animal-name">${animal.name}</h2>
        ${image}
        ${status}
        <div class='buttons-wrapper js-actions-${animal.name}'>
            ${buttons}
        </div>
    </div>
    `;
}

module.exports = createCard;