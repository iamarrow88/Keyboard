import {
  createBlock,
  createKey
} from './JS/modules/create.js';
import en from './JS/langs/en.js';
import ru from './JS/langs/ru.js';
import {
  symbols,
  specials,
  values,
  keys
} from './JS/modules/specialKeys.js';
import {
  compare,
  getIndex,
  checkSymbols,
  substitution
} from './JS/modules/clearSpecials.js';
import {
  backspaceDeletion,
  deleteDeletion
} from './JS/modules/deletion.js';

import {
  arrowL,
  arrowR,
  arrowU,
  arrowD,
  enterKey
}
from './JS/modules/linesNav.js';

let lang;
/* localStorage.setItem('lang', 'en'); */
/* localStorage.getItem('lang'); */
createBlock(en);

const body = document.querySelector('body');
let posCaret = 0;

export function getFocus() {
  textarea.focus();
}

export function getCaretPos() {
  posCaret = document.querySelector('.textarea').selectionStart;
  console.log(posCaret);
  return posCaret;
}

body.addEventListener('keydown', function (event) {
  getFocus();
  posCaret = textarea.selectionStart;
  let idElem = document.querySelector(`#${event.code}`);
  let active = document.querySelector('.active');
  if (active) {
    active.classList.remove('active');
  }
  idElem.classList.add('active');
  posCaret = input.selectionStart;
  console.log(posCaret);
});

body.addEventListener('keyup', function (event) {
  getFocus();
  let active = document.querySelector('.active');
  active.classList.remove('active');
});


const keysBlock = document.querySelector('.col');
const textarea = document.querySelector('.textarea');

textarea.addEventListener('click', getCaretPos);

keysBlock.addEventListener('mousedown', function (event) {
  getFocus();
  posCaret = textarea.selectionStart;
  let ident = String(event.target.dataset.mouseId);
  /*   console.log(ident); */
  if (event.target.dataset.mouseId) {
    let active = document.querySelector('.active');
    if (active) {
      active.classList.remove('active');
    }
    event.target.classList.add('active');
    if (!compare(ident, specials)) {
      if (checkSymbols(getIndex(ident, keys))) {
        let index = getIndex(ident, keys);
        let text = substitution(index, values);
        textarea.value += text;
        posCaret = input.selectionStart;
        console.log(posCaret);
      } else {
        textarea.value += event.target.dataset.mouseId;
        posCaret = input.selectionStart;
        console.log(posCaret);

      }

    }

  }
});


keysBlock.addEventListener('mouseup', function (event) {
  event.target.classList.remove('active');
});

/* ------------------ reset btn --------------------------- */
const reset = document.querySelector('button');
reset.addEventListener('click', function () {
  document.querySelector('.textarea').value = '';
  getFocus();
  posCaret = 0;
});


const backspace = document.querySelector('#Backspace');
backspace.addEventListener('click', () => backspaceDeletion(posCaret));

const del = document.querySelector('#Delete');
del.addEventListener('click', () => deleteDeletion(posCaret));

const leftArrow = document.querySelector('#ArrowLeft');
leftArrow.addEventListener('click', () => arrowL(posCaret));

const rigthArrow = document.querySelector('#ArrowRight');
rigthArrow.addEventListener('click', () => arrowR(posCaret));

const upArrow = document.querySelector('#ArrowUp');
upArrow.addEventListener('click', () => arrowU(posCaret));

const downArrow = document.querySelector('#ArrowDown');
downArrow.addEventListener('click', () => arrowD(posCaret));

const enter = document.querySelector('#Enter');
enter.addEventListener('click', (event) => enterKey(event));




/* ---------------------------change language--------- */

const shiftKey = document.querySelector('#ShiftLeft');
downArrow.addEventListener('click', () => arrowD(posCaret));





