let score1=document.querySelector('.score1');
let score2=document.querySelector('.score2');
let add1l=document.querySelector('.add1l');
let add2l=document.querySelector('.add2l');
let add3l=document.querySelector('.add3l');
let add1r=document.querySelector('.add1r');
let add2r=document.querySelector('.add2r');
let add3r=document.querySelector('.add3r');
let clear1=document.querySelector('.clear1');
let clear2=document.querySelector('.clear2');
let fscore=0;
add1l.addEventListener('click',_=>{
   fscore+=1; 
   score1.textContent=fscore;
})
add2l.addEventListener('click',_=>{
   fscore+=2; 
   score1.textContent=fscore;
})
add3l.addEventListener('click',_=>{
   fscore+=3; 
   score1.textContent=fscore;
})
let sscore=0;
add1r.addEventListener('click',_=>{
   sscore+=1; 
   score2.textContent=sscore;
})
add2r.addEventListener('click',_=>{
   sscore+=2; 
   score2.textContent=sscore;
})
add3r.addEventListener('click',_=>{
   sscore+=3; 
   score2.textContent=sscore;
})
clear1.addEventListener('click',_=>{
    score1.textContent="";
    fscore=0;
})
clear2.addEventListener('click',_=>{
    score2.textContent="";
    sscore=0;
})