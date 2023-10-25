
// getElementById (this is change the element of html by its Id)

var name= prompt("Enter your name");

// document.getElementById("ex").innerHTML= "Welcome"+" to our community: <br>"+name;

 document.getElementById("ex").innerHTML= "Welcome..."
 document.getElementById("ex1").innerHTML= name;
 
var wish= document.getElementById("ex2");
wish.innerHTML= "Have a Good Day!";

// getElementsByTagName with index num

document.getElementsByTagName("h2")[0].innerHTML="<br> Ruby Roy";

// getElementsByClassName 
document.getElementsByClassName("para1")[0].innerHTML="Kmn acho Ruby Roy?";

// querySelector like as a getElementBy

document.querySelector("#pid").innerHTML="Mone pore Ruby Roy,kobitai Tomake";

document.querySelector(".pid2").innerHTML="Ekdin koto kore dekechi";

// querySelector for tag

document.querySelector("p").innerHTML="Ekdin koto kore dekechi"; //(it works in para1 class)


document.querySelector("a").innerHTML="Keu kotha rakhe ni";

// querySelector for list

document.querySelector("li a").innerHTML="ruby";

// querySelector for div
document.querySelector("div a").innerHTML="roy";

// querySelector for class

document.querySelector(".my_div a").innerHTML="depression";

// querySelector with tag index
document.querySelectorAll("p")[3].innerHTML="para change";