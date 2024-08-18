// chapter 6
// Question 01
console.log("result:");
console.log("The value of a is :",10);
console.log("The value of ++a is :",11);
console.log(" Now The value of a is :",11);
console.log("The value of a++ is :",11);
console.log(" Now The value of a is :",12);
console.log("The value of --a is :",11);
console.log(" Now The value of a is :",11);
console.log("The value of a-- is :",11);
console.log(" Now The value of a is :",10);
// Question 02
//--a 1
// --a --b = 1,0;
// --a --b ++b = 1 , 0 , 2;
// --a --b ++b b-- = 1 ,0 ,2 ,1;


// Qustion 03
var user_name= prompt("Enter your name");
alert("you are the best");


// Question 04
var num1=2;
var num2=+prompt("Enter a number table");
if(num1==num2){
    console.log("2*1=",2);
    console.log("2*2=",4);
    console.log("2*3=",6);
    console.log("2*4=",8);
    console.log("2*5=",10);
    console.log("2*6=",12);
    console.log("2*7=",14);
    console.log("2*8=",16);
    console.log("2*9=",18);
    console.log("2*10=",20);
}else{
    console.log("5*1=",5);
    console.log("5*2=",10);
    console.log("5*3=",15);
    console.log("5*4=",20);
    console.log("5*5=",25);
    console.log("5*6=",30);
    console.log("5*7=",35);
    console.log("5*8=",40);
    console.log("5*9=",45);
    console.log("5*10=",50);
}
// Question 05
 var English = prompt("Enter you are Subject name");
 var Maths = prompt("Enter you are Subject name");
 var urdu = prompt("Enter you are Subject name");
 
 var Eng_marks=100;
  var maths_marks=75;
 var urdu_marks=75;


var obt_marks_Eng=54;
 var obt_marks_maths=64;
 var obt_marks_urdu=74;


var obt_marks_Eng1 = +prompt("Enter you are  English obtained marks ");
var obt_marks_maths2 = +prompt("Enter you are  maths obtained marks ");
var obt_marks_urdu3 = +prompt("Enter you are urdu obtained marks ");

var total_marks = obt_marks_Eng1 + obt_marks_maths2 + obt_marks_urdu3;
console.log("Total marks " , total_marks);
var per_Eng= obt_marks_Eng1/ Eng_marks*100;
var per_maths= obt_marks_maths2/maths_marks *100;
var per_urdu= obt_marks_urdu3/urdu_marks *100;


console.log("Percentage of English" ,per_Eng );
console.log("Percentage of maths" , per_maths);
 console.log("Percentage of urdu" , per_urdu);



    
