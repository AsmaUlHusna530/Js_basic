

// window.alert(5 + 6);
alert("Bismillah");
document.write("<h1>Allahu Akbar</h1>");
document.write("<br>Alhamdulillah");

var name;
name = "Asma ul husna";
document.write('<br>'+name+'<br>');

// document.getElementById("demo").innerHTML = name;

// type cast
var num=25.2445;
num = toString(num);
console.log(typeof(num));
num = parseInt(num);
console.log(typeof(num));
num=25.2445;
num = parseFloat(num);
console.log(typeof(num));
// like as .2f% and this func return string
console.log(num.toFixed());
console.log(num.toFixed(2));
// total n num show. where n=3 and this func return string
console.log(num.toPrecision(3));
// like as parseInt
console.log(typeof(Number("    12.52   ")));
console.log(Number(true));

// library functions for str

var txt="life is ...";
txt= txt.length;
document.write("<br>Number of char: "+txt);
//   user input
 /*
var name = prompt("Enter your name: ");
document.write("<br>Number of char: "+ name.length); */
var txt= "Bangladesh";
document.write("<br>character of n num of index: "+ txt.charAt(3));
document.write("<br>Convert into Uppercase: "+ txt.toUpperCase());
document.write("<br>Convert into Lowercase: "+ txt.toLowerCase());
text=" is my country";
document.write("<br>Concatenation of strings: "+ txt.concat(text));
   // cutting str
var s= txt.slice(0,6);
document.write("<br>slice of strings: "+ s);

  // Exponent operator  
var ex=3**2;
document.write("<br>Power:",ex);
x=2;
x **= 2;
document.write("<br>The value of x:",x);

// Even or odd

var n=prompt("Enter a number:")

  if (n%2==0)
     document.write("<br>"+n+" is a Even number");

  else
      document.write("<br>"+n+" is a Odd number");



document.write("<br>");   




// switch case

var m=prompt("Enter your marks:")

switch(m){
   case "10":
     document.write("passed");
     break;
   case "9":
     document.write("fail"); 
     break;
   default:
    document.write("please enter valid marks"); 
}


// for loop

for(var i=1;i<=5;i++)
{
  document.write("<br><h3>Life becomes hell</h3>");
}

for( i=1;i<=10;i++)
{
  
  if(i==5)
  {
    document.write("<br><h3>depressed</h3>");
    break;
  }
  else
      continue;
}

// ternary operator
var result= n>0 ? "Positive" : "Negative" ;
document.write(result+"<br>");

//Ternary with 3 conditions
var result1= n>0 ? "Positive" : n<0? "Negative":"Zero" ;
document.write(result1); 

// function
  //  without parameter
function squ()
{
 var num=5;
 result=num*num;
 document.write("<br>Result= "+result);

}

// with parameter and return value
function multi(num1,num2)
{
 result=num1*num2;
 return result;

}


// function call
squ();
var a=multi(5,6);
document.write("<br>multiplication: "+a);

// function with user input parameter

function sum(x,y)
{
 result=x+y;
 return result;

}

var i=prompt("Enter the value of i: ");
i= parseInt(i);
var j=prompt("Enter the value of j: ");
j= parseInt(j);
var z=sum(i,j);
document.write("<br> sum= ",z);

// Array
//  array declaration
var arr1= new Array(3);
arr1[0]="a";
arr1[1]="bh";
arr1[2]="csf";
// another type of array declaration
var arr=["volvo","bmw","jgg","asd"];

 for(i=0;i<arr.length;i++)
 {
   document.write("<br>", arr[i]);
 }

 document.write("<br>");

//  push a element in array

arr.push("waste");
document.write("<br>", arr);

document.write("<br>");

//  remove a element in array from last
arr.pop("waste");
document.write("<br>", arr);

document.write("<br>");

var arr2= arr1.concat(arr);
console.log(arr2);

// var list=[10,20,30,40];

var list = new Array();
for(var i=0;i<3;i++)
{
  list[i]=parseInt(prompt("Enter a number for the list :"));
}
document.write("<br> list= ",list);
sum=0;
for(i=0;i<list.length;i++)
{
  sum=sum+list[i];
}
document.write("<br> sum= ",sum);

document.write("<br>");

// some array methods
// shift is opposite of opp. it delete a element at the first of array
document.write("<br> list=",list);
list.shift();
document.write("<br> shift method=",list);

// unshift opposite of push

list.unshift("Asma");
document.write("<br> unshift method=",list);

// splice method add or remove element from array. here 2 is the array index num for insert element and 0 is num of element for delete. 


list.splice(2,0,"rahim","karim");
console.log("splice method= " + list);

// 1 to 2 index's element will be rmove

list.splice(1,2);
console.log("splice method delete= " + list);
// slice
var newArr= list.splice(1,2);
console.log("slice method delete= " + newArr);

// sort

var sortArr=list.sort();
console.log("sortArr= " + list);
// reverse
var s=list.reverse();
console.log("reverse the sortArr= " + list);

// sorted for numeric element

var nn=[100,50,40,30,80];
nn.sort(function(a,b){

return a-b;
});
console.log("sorted numbers= " + nn);

