 

 var won=0;
 var loss=0;

 for(var i=1;i<=5;i++){
 var guess_num=parseInt(prompt("Enter a number from 1 to 5: "));

//  generate a random number between 1 to 5
 var random_num = Math.floor(Math.random()*5)+1;


 if (guess_num == random_num ){

    document.write("<br><br>"+i+".You are won. Congratulations!");
    document.write("<br> The Random Number is: "+ random_num );
    won++;
 }

 else {

    document.write("<br><br>"+i+".You are lost...");
    document.write("<br> The Random Number is: "+ random_num );
    loss++;
 }

}
document.write("<br>");

document.write("<br>Total Number of won: ",won);
document.write("<br>Total Number of lost: ",loss);