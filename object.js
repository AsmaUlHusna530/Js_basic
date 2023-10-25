
document.write("<h1>Bismillah</h1>");
// create object. object like as a structure 
/*
var student1 = {

    name:"Asma ul husna",
    age:26,
    cgpa:3.84

}

var student2 = {

    name:"Aktar",
    age:26,
    cgpa:3.84

}


console.log(student1.name); */

// adding a constructor. constructor like as template

function student(name,age,cgpa,lang)
{
   this.name=name;
   this.age=age;
   this.cgpa=cgpa;
   this.lang=lang;
    // create funcion in constructor
   this.display=function(){
   
     console.log(this.name);
     console.log(this.age);
     console.log(this.cgpa);
     console.log(this.lang);

   }


}
// create multiple object (student1, student2) of an contructor
var student1= new student("Asma ul husna",26,3.84,["Bengali","English"]);
var student2= new student("Wasi",27,3.88,["Bengali","English","Hindi"]);

console.log(student1.lang);
console.log(student1.cgpa);

// same task using function easily
student1.display();
student2.display();

//  Math object
console.log(Math.sqrt(5));
console.log(Math.abs(-5));
console.log(Math.sin(2));
console.log(Math.pow(2,4));
console.log(Math.floor(4.65));
// ceiling
console.log(Math.ceil(4.14));
console.log(Math.round(4.14));
console.log(Math.max(4,15,16));
// create 0-1 random numbers
console.log(Math.random());
// find 0-5(less than 6) any random num but not 6
console.log(Math.random()*6);
// find 0-5 any random num
console.log(Math.floor(Math.random()*6));
// find 1-5 any random num
console.log(Math.floor(Math.random()*5)+1);

// Date object & its methods

var date = new Date();

console.log(date);

var year= date.getFullYear();
console.log(year);

// 0-11 month
var month= date.getMonth();
console.log(month);
// current date
var Current_date= date.getDate();
console.log(Current_date);

// 0-6 (sun-sat) current day
var Current_day= date.getDay();
console.log(Current_day);


var Current_hour= date.getHours();
console.log(Current_hour);

var Current_min= date.getMinutes();
console.log(Current_min);
 
var Current_second= date.getSeconds();
console.log(Current_second);

var Current_time= date.getTime();
console.log(Current_time);