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
var hareImg = __webpack_require__(9)

function Hare() {
    Animal.call(this, 'hare', hareImg)
    this.messages.jump = this.name + ' ' + 'jumps!!! Boing-Boing!'
    this.messages.hide = this.name + ' ' + 'is hiding! Shhh!!!'
}

Hare.prototype = Object.create(Animal.prototype);
Hare.prototype.constructor = Hare;

Hare.prototype.jump = function() {
    Animal.updateStatus.call(this, 'jump', `Your ${this.messages.jump}`)
}

Hare.prototype.hide = function() {
    Animal.updateStatus.call(this, 'hide', `Your ${this.messages.hide}`)
}

Hare.prototype.walk = null;

module.exports = Hare;

/***/ }),
/* 3 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var getCardElement = __webpack_require__(4)
var utils = __webpack_require__(6)

function Animal(name, image) {

    this.name = name;
    this.image = image;
    this.messages = {
        walk: this.name + ' ' + 'is walking!',
        eat: this.name + ' ' + 'is eating! Omnomnom...',
    }
    this.status = '';
}

Animal.prototype.walk = function () {
    Animal.updateStatus.call(this, 'walk', `Your ${this.messages.walk}`)
}

Animal.prototype.eat = function() {
    Animal.updateStatus.call(this, 'eat', `Your ${this.messages.eat}`)
}

Animal.create = function(containerSelector) {
    var container = document.querySelector(containerSelector);
    container.insertAdjacentHTML('afterbegin', getCardElement(this));

    utils.addOnCreateEventListeners(this)
}

Animal.updateStatus = function(status, statusMessage) {
    var animalStatus = document.querySelector(`.js-status-${this.name}`)
    animalStatus.textContent = statusMessage;
    animalStatus.dataset.status = status;
}

module.exports = Animal;

/***/ }),
/* 4 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getImageTemplate = __webpack_require__(5);
var utils = __webpack_require__(6);
var actions = (__webpack_require__(8).actions);

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


/***/ }),
/* 5 */
/***/ (function(module) {

function getImageTemplate(animal) {
    return `<img class='image' src='${animal.image}' alt='${animal.name}'/>`
}

module.exports = getImageTemplate;


/***/ }),
/* 6 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var getButtonTemplate = __webpack_require__(7);

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
    return `<p class='js-status-${name}' data-status=''>Congrads!!! You've created a ${name}.</p>`
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

function getHuntResult() {
    var hare = document.querySelector('.js-card-hare');

    if(hare === null) {
        return null
    }

    return hare.querySelector('.js-status-hare').dataset.status !== 'hide' ? hare : null;
}

function makeHareDisabled(hareCard) {
    var actionButtons = hareCard.querySelectorAll('.button-action');
    actionButtons.forEach(el => el.disabled = true)

}

module.exports = {
    addOnCreateEventListeners: addOnCreateEventListeners,
    getDefaultStatus: getDefaultStatus,
    getButtonsSet: getButtonsSet,
    getHuntResult: getHuntResult,
    makeHareDisabled: makeHareDisabled
}

/***/ }),
/* 7 */
/***/ (function(module) {

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


/***/ }),
/* 8 */
/***/ (function(module) {

var actions = ['walk', 'jump', 'hide', 'hunt', 'eat']

module.exports = {
    actions: actions
}

/***/ }),
/* 9 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "d6826be5bdc2ba6cd81f.jpg";

/***/ }),
/* 10 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var Animal = __webpack_require__(3)
var wolfImg = __webpack_require__(11)
var utils = __webpack_require__(6)

function Wolf() {
    Animal.call(this, 'wolf', wolfImg)
    this.messages.hunt = {
        start: 'Your' + ' ' + this.name + ' ' + 'is hunting! Arrr!',
        success: 'Your' + ' ' + this.name + ' ' + 'hunted a hare! Well done!',
        failure: 'Your' + ' ' + this.name + "'s" + ' ' + 'hunt failed. So pity(('
    }
    this.pray = null;
}

Wolf.prototype = Object.create(Animal.prototype);
Wolf.prototype.constructor = Wolf;

Wolf.prototype.hunt = function() {
    Animal.updateStatus.call(this, 'hunt', ` ${this.messages.hunt.start}`)
    setTimeout(() => {
        var hare = utils.getHuntResult()
        if(hare === null) {
            Animal.updateStatus.call(this, '', this.messages.hunt.failure)
        } else {
            this.pray = hare;
            Animal.updateStatus.call(this, '', this.messages.hunt.success)
            utils.makeHareDisabled(hare)
        }
    }, 1000)
}

Wolf.prototype.eat = function() {
    if(this.pray === null) {
        alert(`Your ${this.name} should hunt first!`)
    } else {
        Animal.updateStatus.call(this, 'eat', `Your ${this.messages.eat}`)
        this.pray.remove()
        this.pray = null;
        document.querySelector('.js-create-hare').disabled = false;
    }
}


module.exports = Wolf;

/***/ }),
/* 11 */
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
var Wolf = __webpack_require__(10)
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

    Animal.create.call(animal, '.js-animals-container')
})
}();
/******/ })()
;