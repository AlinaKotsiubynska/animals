"use strict";
var $7467acf37a2ca127$exports = {};
"use strict";
var $409a1ff5c5a2e084$exports = {};
"use strict";
var $d7c46af6fa5f161f$exports = {};
var $ff7f04b6f69c6ccc$exports = {};
function $ff7f04b6f69c6ccc$var$getImageTemplate(animal) {
    return "<img class='image' src=".concat(animal.image, " alt=").concat(animal.name, "/>");
}
$ff7f04b6f69c6ccc$exports = $ff7f04b6f69c6ccc$var$getImageTemplate;


var $4536c319026a9e7f$exports = {};
"use strict";
var $4f0bd2242e178ac9$exports = {};
function $4f0bd2242e178ac9$var$getButtonTemplate(name, action, disabled, message) {
    return "\n    <button \n        class='js-".concat(name, "-").concat(action, "' \n        type='button' \n        ").concat(disabled ? "disabled" : "", " \n        data-message='").concat(message, "' \n        data-action='").concat(action, "'\n    >").concat(action, "</button>\n    ");
}
$4f0bd2242e178ac9$exports = $4f0bd2242e178ac9$var$getButtonTemplate;


function $4536c319026a9e7f$var$addOnCreateEventListeners(animal) {
    document.querySelector(".js-actions-".concat(animal.name)).addEventListener("click", function(e) {
        if (e.target.tagName !== "BUTTON" || e.target.disabled) return;
        var action = e.target.dataset.action;
        animal[action]();
    });
    document.querySelector(".js-create-".concat(animal.name)).disabled = true;
}
function $4536c319026a9e7f$var$getDefaultStatus(name) {
    return "<p class='js-status-".concat(name, "'>Congrads!!! You've created a ").concat(name, ".</p>");
}
function $4536c319026a9e7f$var$getButtonsSet(animal, actions) {
    var buttons = "";
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = actions[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var action = _step.value;
            var isDisabled = animal[action] ? false : true;
            var button = $4f0bd2242e178ac9$exports(animal.name, action, isDisabled, animal.messages[action] || "");
            buttons += button;
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    return buttons;
}
$4536c319026a9e7f$exports = {
    addOnCreateEventListeners: $4536c319026a9e7f$var$addOnCreateEventListeners,
    getDefaultStatus: $4536c319026a9e7f$var$getDefaultStatus,
    getButtonsSet: $4536c319026a9e7f$var$getButtonsSet
};


var $c25e2d51ed9bb8c6$exports = {};
var $c25e2d51ed9bb8c6$var$actions = [
    "walk",
    "jump",
    "hide",
    "hunt",
    "eat"
];
$c25e2d51ed9bb8c6$exports = {
    actions: $c25e2d51ed9bb8c6$var$actions
};


var $d7c46af6fa5f161f$require$actions = $c25e2d51ed9bb8c6$exports.actions;
function $d7c46af6fa5f161f$var$getCardTemplate(animal) {
    var image = $ff7f04b6f69c6ccc$exports(animal);
    var buttons = $4536c319026a9e7f$exports.getButtonsSet(animal, $d7c46af6fa5f161f$require$actions);
    var status = $4536c319026a9e7f$exports.getDefaultStatus(animal.name);
    return "\n    <div class='card-".concat(animal.name, " js-card-").concat(animal.name, "'>\n        <h2>").concat(animal.name, "</h2>\n        ").concat(image, "\n        ").concat(status, "\n        <div class='buttons-wraper js-actions-").concat(animal.name, "'>\n            ").concat(buttons, "\n        </div>\n    </div>\n    ");
}
$d7c46af6fa5f161f$exports = $d7c46af6fa5f161f$var$getCardTemplate;



function $409a1ff5c5a2e084$var$Animal(name, image) {
    this.name = name;
    this.image = image;
    this.messages = {
        walk: this.name + " " + "is walking!",
        eat: this.name + " " + "is eating! Omnomnom..."
    };
    this.status = "";
}
$409a1ff5c5a2e084$var$Animal.prototype.walk = function() {
    $409a1ff5c5a2e084$var$Animal.updateStatus.call(this, "Your ".concat(this.messages.walk));
};
$409a1ff5c5a2e084$var$Animal.prototype.eat = function() {
    $409a1ff5c5a2e084$var$Animal.updateStatus.call(this, "Your ".concat(this.messages.eat));
};
$409a1ff5c5a2e084$var$Animal.create = function(containerSelector) {
    var container = document.querySelector(containerSelector);
    container.insertAdjacentHTML("afterbegin", $d7c46af6fa5f161f$exports(this));
    $4536c319026a9e7f$exports.addOnCreateEventListeners(this);
};
$409a1ff5c5a2e084$var$Animal.updateStatus = function(newStatus) {
    document.querySelector(".js-status-".concat(this.name)).textContent = newStatus;
};
$409a1ff5c5a2e084$exports = $409a1ff5c5a2e084$var$Animal;


var $5c332e944f911f3a$exports = {};
$5c332e944f911f3a$exports = new URL("hare.46331d7f.jpg", "file:" + __filename).toString();


function $7467acf37a2ca127$var$Hare() {
    $409a1ff5c5a2e084$exports.call(this, "hare", $5c332e944f911f3a$exports);
    this.messages.jump = this.name + " " + "jumps!!! Boing-Boing!";
    this.messages.hide = this.name + " " + "is hiding! Shhh!!!";
}
$7467acf37a2ca127$var$Hare.prototype = Object.create($409a1ff5c5a2e084$exports.prototype);
$7467acf37a2ca127$var$Hare.prototype.constructor = $7467acf37a2ca127$var$Hare;
$7467acf37a2ca127$var$Hare.prototype.jump = function() {
    $409a1ff5c5a2e084$exports.updateStatus.call(this, "Your ".concat(this.messages.jump));
};
$7467acf37a2ca127$var$Hare.prototype.hide = function() {
    $409a1ff5c5a2e084$exports.updateStatus.call(this, "Your ".concat(this.messages.hide));
};
$7467acf37a2ca127$var$Hare.prototype.walk = null;
$7467acf37a2ca127$exports = $7467acf37a2ca127$var$Hare;


var $35f14dccc44ce514$exports = {};
"use strict";

var $162061f134b07906$exports = {};
$162061f134b07906$exports = new URL("wolf.347c4095.jpg", "file:" + __filename).toString();


function $35f14dccc44ce514$var$Wolf() {
    $409a1ff5c5a2e084$exports.call(this, "wolf", $162061f134b07906$exports);
    this.messages.hunt = this.name + " " + "is hunting! Arrr!";
}
$35f14dccc44ce514$var$Wolf.prototype = Object.create($409a1ff5c5a2e084$exports.prototype);
$35f14dccc44ce514$var$Wolf.prototype.constructor = $35f14dccc44ce514$var$Wolf;
$35f14dccc44ce514$var$Wolf.prototype.hunt = function() {
    $409a1ff5c5a2e084$exports.updateStatus.call(this, "Your ".concat(this.messages.hunt));
};
$35f14dccc44ce514$exports = $35f14dccc44ce514$var$Wolf;



document.querySelector(".js-create-buttons").addEventListener("click", function(e) {
    if (e.target.tagName !== "BUTTON") return;
    var animal = {};
    if (e.target.dataset.animal === "hare") animal = new $7467acf37a2ca127$exports("hare");
    else animal = new $35f14dccc44ce514$exports("wolf");
    $409a1ff5c5a2e084$exports.create.call(animal, ".js-animals-container");
});


//# sourceMappingURL=index.js.map
