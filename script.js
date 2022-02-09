const lists=document.querySelectorAll('.list')
const elems = document.querySelectorAll('.elem')

console.log(lists);
console.log(elems)


elems[2].remove() // удалили 2 и 4 елемент из ul, но они продолжают существовать
elems[4].remove()


lists[1].append(elems[2]) // добавили елементы 2 и 4 в list  в конец списка
lists[1].append(elems[4])
// если удалить методы remove елементы остаются в list
lists[1].append(elems[3]) // append - убирает изодного списка  и пермещает елемент в другой список без remove
//-----------------------------------------------------

lists[1].prepend(elems[5]) // вставляет елемент в начале списка, всё остальное как у append

//------------------------------------------------------
