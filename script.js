/*
let side=document.querySelector('.side-bar');

side.addEventListener('mouseover',()=>{
    document.querySelector("body").classList.add("side");

});

side.addEventListener('mouseleave',()=>{
    document.querySelector("body").classList.remove("side");

});




let open=document.querySelector('.open');
let close=document.querySelector('.close');

open.addEventListener('click',()=>{
    document.querySelector("body").classList.add("menu");

});
close.addEventListener('click',()=>{
    document.querySelector("body").classList.remove("menu");

});
*/
let text=document.querySelector('span');
window.addEventListener(`resize`,()=>{
    let wit=window.innerWidth;
    let hei=window.innerHeight;
    text.innerText=`witdh:${wit} height:${hei}`;
});
// ...existing code...



// ...existing code...