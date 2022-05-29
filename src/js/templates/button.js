function getButtonTemplate(name, action, disabled, message) {
    return `
    <button 
        class='button button-action js-${name}-${action}' 
        type='button' 
        ${disabled ? 'disabled': ''} 
        data-message='${message}' 
        data-action='${action}'
    >${action}</button>
    `;
}

module.exports = getButtonTemplate;
