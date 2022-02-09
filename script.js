const lists=document.querySelectorAll('.list')
const elems = document.querySelectorAll('.elem')
const title = document.getElementById('title')

// -------- Устаревшая методика appendChild -----------------

lists[1].append(elems[4], elems[3], elems[2])

lists[1].appendChild(elems[5])
//  --appendChild выводит один елемент и не выводит строки --

// --------------- Устаревшая методика insertBefore   ----------

lists[1].insertBefore(elems[5],elems[1])// new befor

//-----------------------------------------------------

lists[1].replaceChild(elems[5], elems[1])// new replaceWith
//-----------------------------------------------------

lists[1].removeChild(elems[5])// new remove