import {symbols, specials} from './specialKeys.js';

export function compare(elem, arr){
  for (let i = 0; i < arr.length; i++){
    if(arr[i] === elem){
      return true;
    }
  }
  return false;
}

export function getIndex(elem, keys){
  let index = keys.indexOf(elem);
  return index;
}

export function checkSymbols(index){
  if(index > -1){
    return true;
  } else {
    return false
  }
};

export function substitution(index, values){
  let elem = values[index];
  return elem;
};