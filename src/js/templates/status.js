function createDefaultStatus(name) {
    return `<p class='js-status-${name}' data-status=''>Congrads!!! You've created a ${name}.</p>`
}

module.exports = createDefaultStatus;
