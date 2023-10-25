
function messages1(){

    alert("I am Button 1");
}


function messages2(){

    alert("I am Button 2");
}

function messages3(){

    alert("I am paragraph");
}



var myVar=document.querySelector("#p1");

function changePara()
{

    myVar.innerHTML="You have changed the paragraph";

}

function changePara1()
{

    myVar.innerHTML="You have changed the paragraph1";

}

var myVar1=document.querySelector("#myImg");


function myPic1()
{

    myVar1.src="images/pic1.jpg";

}

function myPic2()
{
    myVar1.src="images/pic2.jpg";

}

var link= document.getElementsByTagName("a")[0];

link.innerHTML="Visit this site";
link.style.textDecoration="none";
link.style.color="#000fff";
link.style.fontSize="1.5rem";
link.href="http://www.google.com";

// creating html element in a div

var heading1= document.createElement("h1");
var text=document.createTextNode("This is heading3");

heading1.appendChild(text);

// adding a element

var myDiv= document.getElementById("my_div");

myDiv.appendChild(heading1);

// remove a element

var heading2=document.getElementsByTagName("h2")[1];

myDiv.removeChild(heading2);

// creating html element on upper of the div

var heading0= document.createElement("h1");
var text0=document.createTextNode("This is heading0");

heading0.appendChild(text0);
var heading3=document.getElementsByTagName("h2")[0];
myDiv.insertBefore(heading0,heading3);

// display classlist in a div

var cls_list=document.getElementById("my_div").classList;
console.log(cls_list);
// adding a class
var cls=document.getElementById("my_div").classList.add("my_class2");
console.log(cls);
console.log(cls_list);
// remeve a class
var cls_remove=document.getElementById("my_div").classList.remove("my_class");
console.log(cls_remove);
console.log(cls_list);