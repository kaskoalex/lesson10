const lists=document.querySelectorAll('.list')
const elems = document.querySelectorAll('.elem')

console.log(lists);
console.log(elems);

const newElem = document.createElement('li')
console.log(newElem);

newElem.textContent='step 6'
newElem.classList.add('elem')

//  ------   createElement    -----
// создали новый елемент с классом 'elem'

lists[1].append(newElem)
console.log(newElem);
//------------------------------------------

const title=document.getElementById('title')

title.insertAdjacentText('beforebegin','beforbegin') // добавил строку перед title 
title.insertAdjacentText('afterend', 'afterend')// добавил строку после title 

title.insertAdjacentText('beforeend', ' beforeend') // добавил строку в начале title 
title.insertAdjacentText('afterbegin', 'afterbegin ')// добавил строку в конце title 
//----------------------------------------------------
title.insertAdjacentElement('beforebegin', elems[0]) // добавил елемент с классом перед title 
title.insertAdjacentElement('afterend', elems[1])// добавил елемент с классом после title 

title.insertAdjacentElement('beforeend', elems[2]) // добавил елемент с классом в начале title 
title.insertAdjacentElement('afterbegin', elems[3])// добавил елемент с классом в конце title 
console.log(title);

//-----------------------------------------------------

title.insertAdjacentHTML('beforebegin', '<span>step 1</span>') // добавил HTML строку перед title 
title.insertAdjacentHTML('afterend','<span>step 1</span>')// добавил HTML строку после title 

title.insertAdjacentHTML('beforeend','<span>step 1</span>') // добавил HTML строку в начале title 
title.insertAdjacentHTML('afterbegin', '<span>step 1</span>')// добавил HTML строку в конце title