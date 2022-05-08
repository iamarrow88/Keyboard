import {createBlock, createKey} from './JS/modules/create.js';
import en from './JS/langs/en.js';

createBlock(en);

const body = document.querySelector('body');

body.addEventListener('keydown', function(event){
  let idElem = document.querySelector(`#${event.code}`);
  let active = document.querySelector('.active');
  if (active) {
    active.classList.remove('active');
  }
  idElem.classList.add('active');
});


const keysBlock = document.querySelector('.col');
const textarea = document.querySelector('.textarea');

keysBlock.addEventListener('mousedown', function(event){
  console.log(event.target.dataset.mouseId);
  if (event.target.dataset.mouseId){
  textarea.value += event.target.dataset.mouseId;
  let active = document.querySelector('.active');
  if (active) {
    active.classList.remove('active');
  }
  event.target.classList.add('active');
  }
});

keysBlock.addEventListener('mouseup', function(event){
  event.target.classList.remove('active');
});


const reset = document.querySelector('button');
reset.addEventListener('click', function(){
  document.querySelector('.textarea').value = '';
})