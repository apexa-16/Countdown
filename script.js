const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');


const start = document.getElementById('start');
const reset = document.getElementById('reset');

const disp = document.getElementById('disp');


const bg= document.getElementsByClassName("outround")[0];


var interval = null;
var total = 0;

totalValue = () => {
  total = Number(hour.value) * 3600 + Number(minute.value) * 60 + Number(second.value);
}


Timer = () => {
  
  totalValue();
  total--;
  if (total >= 0 && isplay) {
    var hr = Math.floor(total / 3600);
    var mt = Math.floor((total / 60) - (hr * 60));
    var sc = total - ((hr * 3600) + (mt * 60));


    hour.value = (hr<10)? "0"+hr :hr;
    minute.value = (mt<10)? "0"+mt :mt;
    second.value = (sc<10)? "0"+sc :sc;
  }

  if(total == 0) {
    start.innerHTML = "&#9654";
    disp.innerText = "< TIME OVER !! >"
    isplay=false
    bg.classList.remove("animbg");
  }
}

let isplay = false

start.addEventListener('click', () => {

  if (!isplay) {
    clearInterval(interval);
    interval = setInterval(Timer, 1000);
    disp.innerText = "< TIME STARTED >"
    start.innerHTML = "&#8739 &#8739";
    bg.classList.add("animbg");
    isplay = true;
  }
  else {
    start.innerHTML = "&#9654";
    isplay = false;
    disp.innerText = "< TIME STOP >"
    bg.classList.remove("animbg");
  }
});

rs = () => {
  clearInterval(interval);
  start.innerHTML = "&#9654";
  disp.innerText = "< TIMER >"
  hour.value= "";
  minute.value="";
  second.value="";
  bg.classList.remove("animbg");
}
reset.addEventListener('click', () => {
  rs();
})