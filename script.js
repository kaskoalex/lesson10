const lists=document.querySelectorAll('.list')
const elems = document.querySelectorAll('.elem')

console.log(lists);
console.log(elems)


lists[1].append(elems[4])
// если удалить методы remove елементы остаются в list
// append - убирает изодного списка  и пермещает елемент в другой список без remove
//-----------------------------------------------------

lists[1].prepend(elems[5]) // вставляет елемент в начале списка, всё остальное как у append

//------------------------------------------------------

lists[0].before(lists[1]) //поменяли местами списки елементоб с ul  перед ol  наоборот ol перед ul.

elems[3].before(elems[0]) // поставили елемент 0 перед елементом 3  , 
//   !!!!!!  befor  ---- перед  !!!!!


elems[3].after(elems[0])

//     !!!!!  after  - после  !!!! переставляет после .
lists[0].after(lists[1])
//---------------------------------------------------

elems[4].replaceWith(elems[2]) //   заменяем 4 елемент на 2 , удаляя елемент 2 из другого списка
elems[2].replaceWith('Передаём строку') 
lists[1].prepend('Передаём строку')