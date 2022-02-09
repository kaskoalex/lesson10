const lists=document.querySelectorAll('.list')
const elems = document.querySelectorAll('.elem')

console.log(lists);
console.log(elems)


const  cloneElem1 = elems[3] // создаёт ссылку на елемент 3, а не новый елемент 3
const cloneElem = elems[3].cloneNode() // создаёт пустой елемент  3 без содержымого внутри тега
const cloneElem2 = elems[3].cloneNode(true) // через true получаем елемент с содержымым внутри тега

//после клонирывания материнский елемент сохроняется

lists[1].append(cloneElem2)


console.log(cloneElem1)
console.log(cloneElem)
console.log(cloneElem2)

//------------------------------------------------------

cloneElem.classList.add('green-color')
cloneElem.textContent = 'step 6'
// создаём елемент в классе лист содержащим класс елем с продолжением класса green- color  = elem green-color , вставляя в него строку step 6
console.dir(cloneElem)


cloneElem.innerHTML = '<strong>step 6</strong>'
// задача строки через html , считывает теги
lists[1].append(cloneElem)
console.log(cloneElem)

lists[0].innerHTML = ''
//innerHTML переписывает или если ничего не задать стирает