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

let lang = [en, ru];

let ch = localStorage.getItem('ch') || 0;


/* localStorage.setItem('ch', '0'); */
/* localStorage.getItem('lang'); */
createBlock(lang[ch]);

const body = document.querySelector('body');
let posCaret = 0;
let stack = [];

export function getFocus() {
  textarea.focus();
}

export function getCaretPos() {
  posCaret = document.querySelector('.textarea').selectionStart;
  console.log(posCaret);
  return posCaret;
}
/* ---------------------------change language--------- */
const changeKeys = ['shift', 'alt'];



function changeLang(){
  console.log(stack);
  if (stack[0] === 'shift' && stack[1] === 'alt'){
    if(ch === 1){
      ch = 0;
    } else {
      ch = 1;
    }
    localStorage.setItem('lang', `${lang[ch]}`);
    localStorage.setItem('ch', `${ch}`);
  }
  if(stack.length > 2){
    stack.shift();
    console.log(stack);
  }
  console.log(stack);
  return ch;
}

/* ---------------------- end of lang changing----------------------------------- */

body.addEventListener('keydown', function (event) {
  console.log(event.code);
  getFocus();
  posCaret = textarea.selectionStart;
  let idElem = document.querySelector(`#${event.code}`);
  if (event.code === 'AltLeft' || event.code === 'AltRight'){
    event.preventDefault();
    console.log('alt');
    stack.push('alt');
    if(stack.length > 2){
      stack.shift();
      console.log(stack);
    }
  }
  if (event.code === 'ShiftLeft' || event.code === 'ShiftRight'){
    event.preventDefault();
    console.log('shift');
    stack.push('shift');
    if(stack.length > 2){
      stack.shift();
      console.log(stack);
    }
  }
  let newCh = ch;
    ch = changeLang();
    if (newCh !== ch) {
    createBlock(lang[ch]);
    }
  
  idElem.classList.add('active');
  posCaret = input.selectionStart;
  console.log(posCaret);
});

body.addEventListener('keyup', function () {
  getFocus();
  let active = document.querySelector('.active');
  if (active) {
    active.classList.remove('active');
  }
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
        event.preventDefault();
        let index = getIndex(ident, keys);
        let text = substitution(index, values);
        textarea.value += text;
        posCaret = input.selectionStart;
        console.log(posCaret);
      } else {
        event.preventDefault();
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









