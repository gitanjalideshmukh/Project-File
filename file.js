// console.log("this is generai log")
// console.info("this is info")
// console.warn("warning message")
//  console.log(document.getElementById('id1'))
//  variable declaration
// const a ="to define a constant";
// let b = "this is scope variables";
// let c= 20;
// document.write(c)
// console.log(a);
// console.log(b);
// console.log(c);

// 1.ways to print in JavaScript
// console.log("Hello");
// alert("me");
// document.write("this is document write");

//2. JavaScript consol API(Application Programming interface)
// console.log("Hello");
// console.warn("this is warning");
// console.error("this is an error");

// 3.JavaScript Variables
// What are Variables?-Containers to store data values

//4. data types in js
//  1.String
//  2.Number
//  3.BigInt
//  4.Boolean
//  5.undefined
//  6.Null
//  7.Symbol
//  8.object

//    Number
// const Number='2';
// const float = 3.2;

//  String
// const str2="Rani Ostwal";
// const str1 ="Ram Kumar";

//   object
// const marks={
//     Ravi:78,
//     Sham:50,
//     Harshad:90
// }
// console.log(marks);

// Booleans
// const a = true;
// const b = false;
// console.log(a,b);

// const trueval =true;
// const flaseval = false;
//  const undefined=undefined;
// const nullval =null ?? null;
// const BigInt=BigInt('123432')
// const arrayEg =[1,2,3,4,5];
// console.log(arrayEg)
// let un
// un ='test';
// console.log(un)

/* Two types of data types in JavaScript 
1.Primitive data types:undefine, null, number,String, boolean, symbol
2.Reference data types: Arrays and Objects
*/

// Operators in JavaScript
// Arithmetic Operators
// let a=10;
// let b=20;
// console.log("The value of a+b is",a+b);
// console.log("The value of a+b is",a-b);
// console.log("The value of a+b is",a*b);
// console.log("The value of a+b is",a/b);
// // Assignment Oprerators
// let c=b;
// c+=2;
// c-=2; means(c=c-2)
// console.log(c);

// comparison Operators
// let a=10;
// let b=30;
// console.log(a==b);
// console.log(a>=b);
// console.log(a<=b);
// console.log(a>b);
// console.log(a<b);

// Logical Operators
// Logical And
// console.log(true&&true);
// console.log(true&&false);
// console.log(false&&true);
// console.log(false&&false);

// Logical OR
// console.log(true|| true);
// console.log(true|| false);
// console.log(false|| true);
// console.log(false|| false);

// Logical not
// console.log(!false); output true
// console.log(!true); output false


// Function in JavaScript
function avg(a,b){
    c=(a+b)/2;
    return c;
}
c1 =avg(4,6);
c2 =avg(14,16);
// console.log(c1,c2);

// Conditionals in JavaScript
 let age=19;

//  single statement
// if(age>18){
//     console.log("You are eligible")
// }

// if-else statement
// if (age>=18){
//   console.log("You are eligible for voting")
// }
// else{
//     console.log("You are not eligible for voting")
// }

// if-else ladder

/*if(age>18){
    console.log("You are eligible for Board Exam");
}
else if(age=12){
    console.log("You are not eligible for Board exam");
}
else if(age>60){
    console.log("You are age is over");
}
else if(age<5){
    console.log("you are kid ");
}
else{
    console.log("This is is-else ladder");
}
console.log("End of Ladder")*/
// document.write( confirm("Would you like to exit"))
// document.write(prompt("Enter your name"))
// alert("Hello world")
// window.alert("How are you")
// document.write("This is your name")
// let a =10
// let b=20
// document.write("a+b =",(a+b))
// document.write("<br>")
// document.write("a-b = ",(a-b),"<br>")
// document.write("a*b = ",(a*b),"<br>")
// document.write("a/b = ",(a/b),"<br>")
// document.write(typeof a,"<br>")
// var name = "Ram"
// document.write(typeof name)
// v
// let x=10;
// document.write(x,"<br>");
// const y= 20;
// document.write(y);
// above two let and const replace var for better scoping

// let addNewRow=()=>{
//     const inputRow='<input type="text" name="newRow" id="newRow" value="test" readonly/><br>';
//     const divSelector=document.getElementsByClassName('test')[0];
//     console.log(divSelector);
//     divSelector.innerHtml=inputRow;
// }

/*let n= prompt("Enter Number")
let a = parseInt(n)
if  (a>0){
   true
   document.write("Positive")
}else if (a<0){ 
    false
    document.write("Negative")
}else{
document.write("Zero")
 }
*/

// const paragraph=document.getElementById("para")
// if(paragraph.hasAttribute("class")){
//     console.log("class atribute exist")
// }

// 
// const classValue = paragraph.getAttribute("class");
//   console.log("Class value:", classValue);

// const classValue = paragraph.setAttribute("class", "updated-class");
// console.log("class","updated class



