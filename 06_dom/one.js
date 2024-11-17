document.getElementById('title')
document.getElementById('title').id
document.getElementById('title').className
document.getElementById('title').getAttribute('id')
document.getElementById('title').getAttribute('class')
document.getElementById('title').setAttribute('class','test')
document.getElementById('title').setAttribute('class','test heading')
const title = document.getElementById('title')
title
title.style.backgroundColor = 'green'
title.style.padding = '15px'
title.style.borderRadius = '15px'
title.textContent
title.innerHTML
title.innerText
title.textContent // 'DOM Learning on Chai and Code Test text'
title.innerHTML // 'DOM Learning on Chai and Code <span style="display: none;">Test text</span>'
title.innerText //'DOM Learning on Chai and Code'
document.querySelector('h2')​
document.querySelector('#title')
document.querySelector('.heading')
const myul = document.querySelector('ul')
const greenturn = myul.querySelector('li')
greenturn.style.backgroundColor = 'green'
greenturn.style.borderRadius = '15px'
greenturn.innerHTML = 'five'
const templist = document.querySelectorAll('li')
templist[0].style.backgroundColor = 'green'
const myh1 = document.querySelectorAll('h1')
myh1[0].style.backgroundColor = 'red'
templist.forEach(function(e){
    e.style.backgroundColor = 'green'
})
const tempClassList = document.getElementsByClassName('listitem')
const arrayList = Array.from(tempClassList)
arrayList.forEach(function(e){
    e.style.color = 'orange'
})