function createButtonsSet(animal, actions) {
    var templates = require('./index')
    var buttons = '';

    for (var action of actions) {
        var isDisabled = animal[action] ? false : true;
        var button = templates.createButton(animal.name, action, isDisabled, animal.messages[action] || '');
        buttons += button;
    }

    return buttons;
}

module.exports = createButtonsSet
