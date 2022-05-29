var getImageTemplate = require("./image");
var utils = require('../utils');
var actions = require('../constants.js').actions;

function getCardTemplate(animal) {
    var image = getImageTemplate(animal);
    var buttons = utils.getButtonsSet(animal, actions);
    var status = utils.getDefaultStatus(animal.name);

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

module.exports = getCardTemplate;
