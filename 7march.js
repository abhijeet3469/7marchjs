// switch case:- first type of scenario:- we will compare the value of variable directly.
// let a =10;
// switch(a){
//     case 10: //we are not using a variable in case statement.
//     console.log("value of a is 10");
//     break; //breaks the flow and if we give return, it behaves like break as it also make the command break.
//     case 20:
//     console.log("value of b is 20");
//     break;
//     default:
//     console.log("default case");
//     break;
// }
//--------------------------------------------------------------------------------------------------------------------------
// when variable is coming inside the case statement, then we have to write true in switch statement.
// let a = 17;
// switch(true){
//     case a>0:
//         console.log("positive");
//         break;
//     case a<0:
//         console.log("negative");
//         break;
//     default:
//         console.log("zero value");
//         break;
// }
// -------------------------------------------------------------------------------------------------------------------------
// when variable is coming inside the case statement, then if i write a variable in switch statement instead of true, then
// it print always default case1.
// let a = 17;
// switch(a){
//     case a>0:
//         console.log("positive");
//         break;
//     case a<0:
//         console.log("negative");
//         break;
//     default:
//         console.log("zero value");
//         break;
// }
// ----------------------------------------------------------------------------------------------------------------------------
// loops:
// (1.) for loops:-
// for(let i=0; i<10; i++){
//     console.log("value of i is", i);
// }
// we can initialize variable outside the for but we have to give semicolon inside for because for loop takes three parameters 
// i.e. (1) initialization, (2) condition, (3) increment/decrement.
// let i = 0;
// for(; i<10; i++){
//     console.log("value of i is", i);
// }
// we can write increment/decrement outside the for parenthesis but inside the only for loop after the console.log().
// let i = 0;
// for(; i<10; ;){
//     console.log("value of i is", i);
// i++;
// }
// -----------------------------------------------------------------------------------------------------------------------------
// (2.) while loop:- 
// Conditions to avoid infinite loops:-
// (1.) You should always make sure condition that you are writing for while loop is properly written, otherwise you
// can end up in an infinite loop. 
// (2.) At the end of while loop you are either increment the value of i or decrement the value of i otherwise it will 
// never ever be able to come out of that loop which mean infinite loop.
// let i = 0;
// while (i<10){
//     console.log("value of i is", i);
//     i++;
// }
// untill unless it is not completed all the statement it will not come outside the while loop.
// console.log("outside loop");
// ------------------------------------------------------------------------------------------------------------------------------
// (3.) do-while loo:-
// do the examples and focus on results:-
// (1.)
// let i = 0;
// do{
//     console.log("value of i is:", i);
//     i++;
// } while(i<10)
// (2.)
// let i = 0;
// do{
//     console.log("value of i is:", i);
//     i++;
// } while(i<10)
// -----------------------------------------------------------------------------------------------------------------------------
// (4.) nested loop:- It happens only in the for loop.
// for(let i = 0; i<5; i++){
//     for(let j = 0; j<2; j++){
//         console.log("value of i is:", i, "and value of j is:", j);
//     }
// }
// Q:- For one iteration of i, j will run how many times?
// Ans:- 2 times.
// Q:- How many times j loop is running and for each and every iteration will be?
// Ans:- 5 times and 5*2 = 10 times.
// Note:- Never advised to write three nested loop.
// Functions in JS:-
// (1.)
// let a = 10;
// let b = 20;
// let addition = a+b;
// console.log(addition);
// (2.)
// let a = 10;
// let b= 20;
// function add(){ // fu.,m nnction definition
// console.log(a+b); // 30
// }
// add(); // function execution
// -------------------------------------------------------------------------------------------------------------------------
// Function with parameters:-
// function addTwoNumbers(a,b){ //a and b are parameters
    // console.log(a+b);
// }
// addTwoNumbers(12,13); // 12 and 13 are arguments
// addTwoNumbers(2,3); // 2 and 3 are arguments
// Arguments:- Value which get passsed to function/variable known as arguments.
// Parameters:- Value which a function recieved and it executes on, the function get executed on known as parameters.
//              Value of parameter continuously change if you are passing, executing the function with different arguments but
//              arguments value for addTwoNumbers(2,3); is 2,3 and parameter value is 2,3 but parameter is somthing
//              for refer.
// Note:- At the time of memory allocation function get the proper value but in case of variable they will assigned value
//        as undefined.
// -----------------------------------------------------------------------------------------------------------------------------
// Function with return statement:-
// function addNumbers(x,y){
// return x+y; // any code written after return is not accessible.
// }
// const result = addNumbers(12,12);
// console.log(result);
// -----------------------------------------------------------------------------------------------------------------------------
// Functions which exists only in JS:-
// (1.) 
// const add = function(){
//     console.log("value");
// }
// add();.
// (2.) Arrow Function:-
// const add = () =>{
// 
// }
// add();