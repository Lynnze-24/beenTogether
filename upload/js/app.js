const hamburger = document.querySelector('.header_hamburger');

const header = document.querySelector('.header');

hamburger.addEventListener("click", function () {
    hamburger.classList.toggle('open');
    header.classList.toggle('active');

});





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

let cDate = new Date();
let cMonth = cDate.getMonth();
let cYear = cDate.getFullYear();
let timeC=  dateRange(2019,4,cYear,cMonth);
let tempDay = cDate.getDate() ;

// year count
let countYear = Math.floor(timeC.length/12);

countYear = countYear<10? "0" + countYear : countYear;

dy.innerText = countYear;


// month count

let countMonth = (timeC.length%12);

let monthZero = tempDay<7? true: false;

countMonth=countMonth === 1 && monthZero? 0 : countMonth;

countMonth = countMonth<10? "0" + countMonth : countMonth;

dm.innerText= countMonth;




let tempN = getNdays(cMonth-1,cYear);

tempDay = tempDay>=7?tempDay - 7: tempN -6 + tempDay ;


let countWeek = Math.floor(tempDay/7);
let countDays= tempDay%7;
countWeek = countWeek<10? "0" + countWeek : countWeek;
countDays = countDays<10? "0" + countDays : countDays;

d.innerText = countDays;
dw.innerText = countWeek;
}

function dateRange(startYear,startM, endYear,endM) {
   
    var dates      = [];
  
    for(var i = startYear; i <= endYear; i++) {
      var endMonth = i != endYear ? 11 : parseInt(endM) - 1;
      var startMon = i === startYear ? parseInt(startM)-1 : 0;
      for(var j = startMon; j <= endMonth; j = j > 12 ? j % 12 || 11 : j+1) {
        var month = j+1;
        
        dates.push([i,month]);
      }
    }
    return dates;
  }

 function getNdays(month,year) {
    return new Date(year, month, 0).getDate();
 };

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

// spinner

const spinner = document.querySelector('.spinning')
const spinBtn = document.querySelector('.spin-con button')


spinBtn.addEventListener('click',spinWheel)
let  deg = 0;
let newDeg= null;
let prize ;
function spinWheel(){
  let rotateDeg = deg +( (Math.random() * 1000) + 3333) ;
  console.log(rotateDeg)
  let pureDeg = rotateDeg%360;
 
  pureDeg = changeDeg(pureDeg,rotateDeg);
  
  checkDeg(pureDeg);
 if(newDeg) rotateDeg = newDeg;
 console.log(rotateDeg)
  console.log(prize)
  spinBtn.removeEventListener('click',spinWheel)
  spinner.style.transform = `rotate(${rotateDeg}deg)`;
deg = rotateDeg;
newDeg = null;
  setTimeout(function(){
    let winner = document.querySelector(`.spin-con_content:nth-of-type(${prize})`)
    let infoSpin = document.querySelector('.spin-info')
    winner.classList.add('won');
    let wItem = winner.children[0].innerText;
    if(wItem.length<6)wItem = 'a ' + wItem;
    infoSpin.innerText=`Congrats Bae, you will get ${wItem}!`
    // spinBtn.addEventListener('click',spinWheel)
  },5000)
}


function changeDeg(deg,rotateD){
  let degArr = [20.5,69.5,114,159,203,249,293,339.5];
  for (i=0;i<degArr.length;i++){
    if(deg>degArr[i] && deg<(degArr[i]+3)){
      newDeg = rotateD + 8;
      return deg + 8;
    }
    if(deg<degArr[i] && deg>(degArr[i]-3)){
      newDeg = rotateD - 8;
      return deg - 8;
    } 

  }
  return deg;
}

function checkDeg(deg){
   // 20.5,69.5,114,159,203,249,293,339.5
  if(deg>20.5 && deg<69.5){
    prize = '8';
  }else if(deg>69.5 && deg<114){
    prize = '7';
  }else if(deg>114 && deg<159){
    prize = '6';
  }else if(deg>159 && deg<203){
    prize = '5';
  }else if(deg>203 && deg<249){
    prize = '4';
  }else if(deg>249 && deg<293){
    prize = '3';
  }else if(deg>293 && deg<339.5){
    prize = '2';
  }else {
    prize = '1';
  }
}


// gallery zoom

const photosArr = document.querySelectorAll('.gal-box span') ;
const galOv = document.querySelector('.gal-big');
const galOvImg = document.querySelector('.gal-big img');

galOv.addEventListener('click',function(e){
  if(e.target==this){
    galOv.classList.remove('show-galbig');
  }
})

photosArr.forEach((p)=>{
  p.addEventListener('click',function(){
    let src = p.children[0].getAttribute('src');
    galOvImg.setAttribute('src',src)
    galOv.classList.add('show-galbig')
  })
})