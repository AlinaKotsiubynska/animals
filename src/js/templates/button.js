function getButtonTemplate(name, action, disabled, message) {
    return `
    <button 
        class='js-${name}-${action}' 
        type='button' 
        ${disabled ? 'disabled': ''} 
        data-message='${message}' 
        data-action='${action}'
    >${action}</button>
    `;
}

module.exports = getButtonTemplate;
