$(document).ready(function(){

	var node = document.createElement("li");
	var logout = document.createElement("li");
	var aa = document.createElement("a");
	var aal = document.createElement("a");
	
	var userName="Welcome "+localStorage.getItem("full_name")+" !!";
    var textnode = document.createTextNode(userName);
   	var textnode1 = document.createTextNode("LogOut");
   	
    aa.setAttribute("style", "color:#80ffcc; ");
    logout.setAttribute("id", "logout");
    logout.setAttribute("style", "cursor:pointer");

    aal.appendChild(textnode1);
    logout.appendChild(aal);


    aa.appendChild(textnode);
    node.appendChild(aa);
    document.getElementById("myList").insertBefore(node, document.getElementById("myList").childNodes[0]);
    document.getElementById("myList").appendChild(logout);
/*
var div= document.createElement("div");
var main_a= document.createElement("a");
var node = document.createElement("li");
var spam = document.createElement("span");
	var ul = document.createElement("ul");
	var li = document.createElement("li");
	var a = document.createElement("a");
	var userName="Welcome "+localStorage.getItem("full_name")+" !!";

node.setAttribute("data-toggle", "dropdown");
var textnode1 = document.createTextNode(userName);
var textnode2 = document.createTextNode("LogOut");

div.className += " dropdown";   	
ul.className += " dropdown-menu";
spam.className += " caret";

a.appendChild(textnode2);
    li.appendChild(a);
    ul.appendChild(li);
div.appendChild(ul);
main_a.appendChild(textnode1);
main_a.appendChild(spam);
main_a.appendChild(ul);

node.appendChild(main_a);
    document.getElementById("myList").appendChild(node);
*/
 
 $("#logout").click(function(){
 	window.location.href = "login.html";
 });  
});