
function demo(){
    

    var full_name=document.getElementById("text").value;
	var user_id=document.getElementById("user_name").value;
	var email=document.getElementById("email").value;
	
var password=document.getElementById("pwd").value;
/*
if(full_name==""||user_id==""||email==""||password==""){

	  alert("Name must be filled out");}
else if(password.length<5){
	alert("password must be greater than five character");
}	  
else{
	window.open("login.html");
}*/localStorage.setItem("full_name", full_name);
localStorage.setItem("user_id", user_id);
localStorage.setItem("email", email);
localStorage.setItem("password", password);
}

function myFunction(){
var password=document.getElementById("pwd").value;
if(password.length<5){
	document.getElementById("valid").innerHTML="password must greater then 5 character"
	document.getElementById("valid").style.color="magenta";

}
else{
	document.getElementById("valid").innerHTML="password is valid"
document.getElementById("valid").style.color="green";
	}

document.getElementById("floating4").setAttribute(
       "style", "top: 440px;	left: 480px;	font-size: 13px;opacity: 1;color:blue;font-weight:bold");

}


function float(){
document.getElementById("floating").setAttribute(
       "style", "top: 290px;	left: 480px;	font-size: 13px;opacity: 1;color:blue;font-weight:bold");

}
function float1(){
document.getElementById("floating2").setAttribute(
       "style", "top: 340px;	left: 480px;	font-size: 13px;opacity: 1;color:blue;font-weight:bold");

}
function float2(){
document.getElementById("floating3").setAttribute(
       "style", "top: 390px;	left: 480px;	font-size: 13px;opacity: 1;color:blue;font-weight:bold");

}
function float3(){var password=document.getElementById("pwd").value;
if(password.length<5){
	document.getElementById("valid").innerHTML="password must greater then 5 character"
	document.getElementById("valid").style.color="magenta";

}
else{
	document.getElementById("valid").innerHTML="password is valid"
document.getElementById("valid").style.color="green";
	}
document.getElementById("floating4").setAttribute(
       "style", "top: 440px;	left: 480px;	font-size: 13px;opacity: 1;color:blue;font-weight:bold");

}