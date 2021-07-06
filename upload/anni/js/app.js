const hamburger = document.querySelector('.header_hamburger');

const header = document.querySelector('.header');

hamburger.addEventListener("click", function () {
    hamburger.classList.toggle('open');
    header.classList.toggle('active');

});


// gallery

const photos = document.querySelectorAll('.gallery-container__content');
const photosCon = document.querySelector('.gallery-container');

const conSize= photosCon.getBoundingClientRect().width ;


photos.forEach(function(photo,index){
      photo.style.left= (conSize* index) + "px";
})




const leftBtn= document.querySelector('.gallery-button_left');
const rightBtn= document.querySelector('.gallery-button_right')

leftBtn.addEventListener('click',function(){
    photos.forEach(function(photo){
        const left= Number(photo.style.left.split('px')[0]);
        const newLeft = (left + conSize)+ "px";
        photo.style.left = newLeft;

        console.log(left, newLeft);
      
})
btnHide();
})

rightBtn.addEventListener('click',function(){
    
    photos.forEach(function(photo){
        const left= Number(photo.style.left.split('px')[0]);
        const newLeft = (left - conSize)+ "px";
        photo.style.left = newLeft;

        
      
})
btnHide();
})


const btnHide = ()=> {

    leftBtn.classList.remove('btn-hide');
    rightBtn.classList.remove('btn-hide');

    if(photos[0].style.left==0 || photos[0].style.left=="0px"){
        leftBtn.classList.add('btn-hide');
    } else if(photos[photos.length-1].style.left==0 || photos[photos.length-1].style.left=="0px"){
        rightBtn.classList.add('btn-hide');
    }


}

btnHide();



// time

function abso(a){
  return a - Math.floor(a);
}

function ten(x){
    if((x/10)<1){
        return "0" + x;
    }
    return x;
}

const dy= document.getElementById("y");
const dm= document.getElementById("m");
const dw= document.getElementById("w");
const d= document.getElementById("d");
const dhr= document.getElementById("hr");
const dmin= document.getElementById("min");
const dsec= document.getElementById("sec");


function getCurrentTime(){
    const date = new Date("4/7/2019 00:00:00");
const ms =  Date.now()-date.getTime();

const dayM= ms/(24*3600*1000);

 const hrM= abso(dayM)*24;
    const hr= Math.floor(hrM);
 const minM= abso(hrM)*60;
 const min= Math.floor(minM);

 const secM= abso(minM)*60;
 const sec= Math.floor(secM);

 dhr.innerText = ten(hr);
 dmin.innerText = ten(min);
 dsec.innerText = ten(sec);

 
}

window.setInterval(getCurrentTime,1000);


// scroll

const scroll = document.querySelector(".scroll");

window.addEventListener('scroll',function(){
    const h = document.documentElement.clientHeight *0.5;
   if(window.scrollY > h){
    scroll.classList.remove('inactive-scroll');
       scroll.classList.add('active-scroll');
   }else{
        scroll.classList.remove('active-scroll');
        scroll.classList.add('inactive-scroll');
    
   }
   
})

