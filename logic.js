window.onload = function(){
    let cs=0;
    let sec=0;
    let min=0;
    let hr=0;
var interval;
var outputcs= document.getElementById('digit4');
var outputsec = document.getElementById('digit3');
var outputmin = document.getElementById('digit2');
var outputhr = document.getElementById('digit1');
var btn_1= document.getElementById('btn1');
var btn_2=document.getElementById('btn2');
var btn_3=document.getElementById('btn3');
btn_1.addEventListener("click",()=>{
clearInterval(interval);
interval = setInterval(timer,10);
});
btn_2.addEventListener("click",()=>{
clearInterval(interval);
});
btn_3.addEventListener("click",()=>{
clearInterval(interval);
cs=0;
sec=0;
hr=0;
min=0;
outputcs.innerHTML="00";
outputsec.innerHTML="00";
outputmin.innerHTML="00";
outputhr.innerHTML="00";
});


function timer(){
 cs++;
 if(cs<=9){
    outputcs.innerHTML='0'+cs;
 }
 if(cs>9){outputcs.innerHTML=cs;
}
 if(cs>99){
    cs=0;
    sec++;
 }
 if(sec<=9){
    outputsec.innerHTML='0'+sec;
 }
 if(sec>9){
    outputsec.innerHTML=sec;
 }
if(sec>59){
    sec=0;
    cs=0;
    min++;
}
if(min<=9){
    outputmin.innerHTML='0'+min;
}
if(min>9){
    outputmin.innerHTML=min;
}
if(min>59){
    min=0;
    hr++;
}
if(hr<10){
outputhr.innerHTML="0"+ hr;}
if(hr>9){
    outputhr.innerHTML=hr;
}
}














}