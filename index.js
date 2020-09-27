const list = document.querySelector(".doList");
const listInput=document.querySelector(".listInput");
const add =document.querySelector(".add");
add.addEventListener('click',function(){
const newLi = document.createElement('li');
const liContent=document.createTextNode(listInput.value)
newLi.appendChild(liContent);
list.appendChild(newLi);



})