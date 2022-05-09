const body = document.querySelector('body');

export function createBlock(arrRows){
 let container = document.createElement('div');
 container.classList.add('container');
 let header = document.createElement('h1');
 header.innerHTML = 'Virtual Keyboard';
 container.prepend(header);
 let message = document.createElement('div');
 message.classList.add('message');
 message.innerHTML = 'Keyboard created on Windows. To switch language press Shift + Alt';
 container.append(message);
 let btn = document.createElement('button');
 btn.innerHTML = 'Delete all text';
 container.append(btn);
 body.prepend(container);
 let textarea = document.createElement('textarea');
 textarea.classList.add('textarea');
/*  textarea.setAttribute('contenteditable', 'true'); */
 textarea.setAttribute('id', 'input');
 container.append(textarea); 
 let keyboard = document.createElement('div');
 keyboard.classList.add('keyboard__wrapper');
 let col = document.createElement('div');
 col.classList.add('col');
 keyboard.append(col);
 container.append(keyboard);
  for (let i = 0; i < arrRows.length; i++){
    let row = createKey(arrRows[i]);
    col.append(row);
  }
}

export function createKey(arrayKeys){
  let row = document.createElement('div');
  row.classList.add('row');
  for (let k = 0; k < arrayKeys.length; k++){
    let key = document.createElement('div');
    let elemClass = arrayKeys[k].code.toLowerCase();
    key.classList.add('row__keys', `${elemClass}`);
    key.innerHTML = arrayKeys[k].normal;
    key.setAttribute('id', arrayKeys[k].code);
    key.dataset.mouseId = arrayKeys[k].id;
    row.append(key);
  }
  return row;
}

  