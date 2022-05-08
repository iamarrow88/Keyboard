import {getFocus, getCaretPos} from '../../index.js';

export function arrowL(posCaret){
  getFocus();
  posCaret = document.querySelector('textarea').selectionStart;
  --posCaret;
  console.log(posCaret);
  document.querySelector('textarea').setSelectionRange(posCaret,posCaret);
  return posCaret;
}

export function arrowR(posCaret){
  getFocus();
  posCaret = document.querySelector('textarea').selectionStart;
  ++posCaret;
  console.log(posCaret);
  document.querySelector('textarea').setSelectionRange(posCaret,posCaret);
  return posCaret;
}


export function arrowU(posCaret){
  getFocus();
  posCaret = document.querySelector('textarea').selectionStart;
  if (posCaret > 70){
    posCaret = posCaret - 70;
  }
  console.log(posCaret);
  document.querySelector('textarea').setSelectionRange(posCaret,posCaret);
  return posCaret;
}

export function arrowD(posCaret){
  getFocus();
  posCaret = document.querySelector('textarea').selectionStart;
  if (posCaret < document.querySelector('.textarea').value.length) {
    posCaret = posCaret + 70;
  }
  
  console.log(posCaret);
  document.querySelector('textarea').setSelectionRange(posCaret,posCaret);
  return posCaret;
}