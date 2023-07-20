const countUp = document.querySelectorAll(".countUp");
const interval = 5000;
countUp.forEach((count) =>{
let startValue = 0;
const endValue = parseInt(count.getAttribute('data-val'));


 const duration = Math.floor(interval / endValue);
 let counter = setInterval(function (){
 startValue  += 1;

 count.textContent = startValue;
  if (startValue == endValue){
    clearInterval(counter)
  }
 },duration);
});