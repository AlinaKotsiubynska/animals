/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),
/* 2 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var Animal = __webpack_require__(3)
var utils = __webpack_require__(4)
var hareImg = __webpack_require__(12)

function Hare() {
    Animal.call(this, 'hare', hareImg)
    this.messages.jump = `Your ${this.name}  jumps!!! Boing-Boing!`;
    this.messages.hide = `Your ${this.name } is hiding! Shhh!!!`;
}

Hare.prototype = Object.create(Animal.prototype);
Hare.prototype.constructor = Hare;

Hare.prototype.jump = function() {
    utils.updateAnimalStatus.call(this, 'jump')
}

Hare.prototype.hide = function() {
    utils.updateAnimalStatus.call(this, 'hide')
}

Hare.prototype.walk = null;

module.exports = Hare;

/***/ }),
/* 3 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var utils = __webpack_require__(4)

function Animal(name, image) {

    this.name = name;
    this.image = image;
    this.messages = {
        walk: `Your ${this.name} is walking!`,
        eat: `Your ${this.name} is eating! Omnomnom...`
    }
    this.status = '';

    utils.createAnimal.call(this, '.js-animals-container')
}

Animal.prototype.walk = function () {
    utils.updateAnimalStatus.call(this, 'walk')
}

Animal.prototype.eat = function() {
    utils.updateAnimalStatus.call(this, 'eat')
}

module.exports = Animal;

/***/ }),
/* 4 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


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
    var getCardElement = __webpack_require__(5)
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

/***/ }),
/* 5 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var actions = (__webpack_require__(6).actions);

function createCard(animal) {
    var templates = __webpack_require__(7)
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

/***/ }),
/* 6 */
/***/ (function(module) {

var actions = ['walk', 'jump', 'hide', 'hunt', 'eat']

module.exports = {
    actions: actions
}

/***/ }),
/* 7 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var createButton = __webpack_require__(8)
var createButtonSet = __webpack_require__(9)
var createImage = __webpack_require__(10)
var createCard = __webpack_require__(5)
var createDefaultStatus = __webpack_require__(11)

module.exports = {
    createButton: createButton,
    createButtonSet: createButtonSet,
    createImage: createImage,
    createCard: createCard,
    createStatus: createDefaultStatus
}

/***/ }),
/* 8 */
/***/ (function(module) {

function createButton(name, action, disabled, message) {
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

module.exports = createButton;


/***/ }),
/* 9 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

function createButtonsSet(animal, actions) {
    var templates = __webpack_require__(7)
    var buttons = '';

    for (var action of actions) {
        var isDisabled = animal[action] ? false : true;
        var button = templates.createButton(animal.name, action, isDisabled, animal.messages[action] || '');
        buttons += button;
    }

    return buttons;
}

module.exports = createButtonsSet


/***/ }),
/* 10 */
/***/ (function(module) {

function createImage(animal) {
    return `<img class='image' src='${animal.image}' alt='${animal.name}'/>`
}

module.exports = createImage;


/***/ }),
/* 11 */
/***/ (function(module) {

function createDefaultStatus(name) {
    return `<p class='js-status-${name}' data-status=''>Congrads!!! You've created a ${name}.</p>`
}

module.exports = createDefaultStatus;


/***/ }),
/* 12 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "d6826be5bdc2ba6cd81f.jpg";

/***/ }),
/* 13 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var Animal = __webpack_require__(3)
var wolfImg = __webpack_require__(14)
var utils = __webpack_require__(4)

function Wolf() {
    Animal.call(this, 'wolf', wolfImg)
    this.messages.huntStart = `Your ${this.name} is hunting! Arrr!`;
    this.messages.huntSuccess = `Your ${this.name} hunted a hare! Well done!`;
    this.messages.huntFailure = `Your ${this.name}'s hunt failed. So pity((`;
    this.messages.eat = `Your ${this.name}'s hunt failed. So pity((`;
    this.messages.eatFailure = `Your ${this.name} should hunt first!`;
    this.pray = null;
}

Wolf.prototype = Object.create(Animal.prototype);
Wolf.prototype.constructor = Wolf;

Wolf.prototype.hunt = function() {
    utils.updateAnimalStatus.call(this, 'huntStart')
    setTimeout(() => {
        var hare = utils.getHuntResult()
        if(hare === null) {
            utils.updateAnimalStatus.call(this, 'huntFailure')
        } else {
            this.pray = hare;
            utils.updateAnimalStatus.call(this, 'huntSuccess')
            utils.makeAnimalDisabled(hare)
        }
    }, 1000)
}

Wolf.prototype.eat = function() {
    if(this.pray === null) {
        utils.updateAnimalStatus.call(this, 'eatFailure')
    } else {
        utils.updateAnimalStatus.call(this, 'eat')
        this.pray.remove()
        this.pray = null;
        document.querySelector('.js-create-hare').disabled = false;
    }
}

module.exports = Wolf;


/***/ }),
/* 14 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "c70a936dfab486218747.jpg";

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";

__webpack_require__(1)
var Hare = __webpack_require__(2)
var Wolf = __webpack_require__(13)
var Animal = __webpack_require__(3)

document.querySelector('.js-create-buttons').addEventListener('click', (e) => {
    if(e.target.tagName !== 'BUTTON') {
        return
    }

    let animal = {};
    
    if(e.target.dataset.animal === 'hare') {
        animal = new Hare('hare')
    } else {
        animal = new Wolf('wolf')
    }

    // Animal.create.call(animal, '.js-animals-container')
})
}();
/******/ })()
;