$(document).ready(function(){


var c=0;
var myvar=setInterval(myFun,1000);
function myFun(){
	var r=Math.floor(Math.random()*(5-1+1))+1;
	
	switch(r){
		case 1:
		document.getElementById("head").setAttribute(
       "style", "color:#8bda8b;");
		break;
		case 2:
		document.getElementById("head").setAttribute(
       "style", "color:#4da6ff;");
		break;
		case 3:
		document.getElementById("head").setAttribute(
       "style", "color:#c266ff;");
		break;
		case 4:
		document.getElementById("head").setAttribute(
       "style", "color:#cc6699;");
		break;
		case 5:
		document.getElementById("head").setAttribute(
       "style", "color:#bbbb77;");
		break;

}

}
var myvar=setInterval(myFun1,500);
function myFun1(){	
 
if(c==0){
document.getElementById("a").setAttribute(
       "style", "color:yellow;");
	c=1;
}
else{
	document.getElementById("a").setAttribute(
       "style", "color:red;");
	c=0;
}
}
 }); 


function demo(){
var userName=document.getElementById("text").value;
var password=document.getElementById("pwd").value;
if((userName==localStorage['user_id'])&&(password==localStorage['password']))
	{
	//document.location.href = "PlacementGuide.html";
	window.open("PlacementGuide.html");
	//location.replace("PlacementGuide.html");
	 //window.location="http://www.tutorialspoint.com";
	// window.location.reload("PlacementGuide.html");
           }

else
{
	alert("incorrect");
}

}

function demo1(){
document.getElementById("floating").setAttribute(
       "style", "top: 312px;	left: 480px;	font-size: 13px;opacity: 1;color:blue;font-weight:bold");

}
function demo2(){
document.getElementById("floating2").setAttribute(
       "style", "top: 385px;	left: 480px;	font-size: 13px;opacity: 1;color:blue;font-weight:bold");

}