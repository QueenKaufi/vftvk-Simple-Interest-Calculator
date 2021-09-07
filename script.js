var principal = document.getElementById("principal");
var rate = document.getElementById("rate");
var years = document.getElementById("years");

var result = document.getElementById("result")

var slider= document.getElementById("rate");
var output= document.getElementById("rate_val");


function updateRate(){
output.innerHTML=slider.value + "%"
	 }
   
function compute(){

var interest = principal.value * years.value * rate.value /100;
var futureyear = new Date().getFullYear()+parseInt(years.value);

if(principal.value <= 0){
        alert("Enter a positive number")
        principal.focus()
        return}
  result.innerHTML="If you deposit <mark>"+principal.value+"</mark>,\<br\>at an interest rate of <mark>"+rate.value+"</mark>%.\<br\>You will receive an amount of <mark>"+interest+"</mark>,\<br\>in the year <mark>"+futureyear+"</mark>\<br\>"
}