// function greet (){
//     console.log("hello pooja rani")

// }
// greet()





// // program to print the text
// // declaring a function
// function greet(name) {
//     console.log("Hello " + name + ":)");
    
// }
// // calling function
// greet("pooja");





// // program to add two numbers using a function
// // declaring a function
// function add(a, b) {
//     console.log(a + b);
// }

// // calling functions
// add(3,4);
// add(2,9);







// program to add two numbers
// // declaring a function
// function add(a, b) {
//     return a + b;
// }

// // take input from the user
// let number1 = parseFloat(prompt("Enter first number: "));
// let number2 = parseFloat(prompt("Enter second number: "));

// // // calling function
// // let result = add(number1,number2);

// // display the result
// console.log("The sum is " + result);
// add()









// // program to find the square of a number
// // function is declared inside the variable
// let x = function (num) { return num * num };
// console.log(x(4));

// // can be used as variable value for other variables
// let y = x(3);
// console.log(y);











// // Defining function
// function Sum(num1, num2) {
//     var total = num1 + num2;
//     console.log(total);
//    }
    
//    // Calling function
   
//    Sum(6, 20); // 0utputs: 26
//    Sum(-5, 17); // 0utputs: 12






// // Defining function
// function getSum(num1, num2) {
//     var total = num1 + num2;
//     return total;
//    }
//     var re=getSum(8,78)
//     console.log(re)
//     var re1=getSum(-9,38)
//     console.log(re1)






// // Defining function
// function getSum(num1, num2) {
//     var total = num1 + num2;
//     return total;
//    }
   
//    // Displaying returned value
//    var result1 = getSum(6, 20);
//    console.log(result1) // 0utputs: 26
//    var result2 = getSum(-5, 17);
//    console.log(result2) // 0utputs: 12






// // Defining function
// function sayHello(name) {
//     return "Hello " + name
//    }
    
//    console.log(sayHello("Pragna"))




 
// function insertingElement(arr){
//     var a=5;
//     arr.push(a);
//     return arr;
//     // console.log(arr);
  
//  }
//  console.log(insertingElement([1,2,3,4]));






// var isEqual = function(str1,str2){
//     console.log(str1===str2)
//  }
//  isEqual("kumar","kumar");






// (function () {
//     var x = "Hello!! Nayak";  // I will invoke myself
//     console.log(x);
//    })();
   





// (function(str1,str2){
//     console.log(str1===str2)
//  })("kumar","kumar");






// function myFunction(a, b) {
//     return a * b;
//    }
//    var x = myFunction(4, 3);
//    console.log(x)








// var Name=['m','a','l','a','y','a','l','a','m'];
// var new_array=[];
// for (var i=Name.length-1; i>=0;i--){
//    new_array.push(Name[i]);
// }
// var count=0;
// for (var j=0; j<Name.length; j++){
//    if (new_array[j]===Name[j]){
//        count++;
//    }
// }
// if(count===Name.length){
//    console.log("this is palindrome");
// }else{
//    console.log("this is not a palindrome");
// }





// list1 = [1,2,3,4,5,6]
// list2 = [2,3,1,0,6,7]
// elements=[]
// for(var i of list1){
//    if (!list2.includes(i)){
//        elements.push(i)
//    }
// }
// console.log(elements);









// marks = [
//     [78, 76, 94, 86, 88],
//     [91, 71, 98, 65, 76],
//     [95, 45, 78, 52, 49]
//  ]
//  var sum=0
//  for(var i of marks){
//     for(var j of i){
//         sum+=j
//     }
//  }
//  console.log(sum);
 














// var number = 30
// var n = [10, 11, 12, 13, 14, 17, 18, 19]
// // Output: [[11,19], [12,18],[13,17]]









// elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43]
 
// var odd_numbers=0
// var even_numbers=0
// for(var i of elements){
//    if(i%2 ===0){
//        even_numbers+=1
//    }
//    else{
//        odd_numbers+=1
//    }
// }
// console.log(odd_numbers);
// console.log(even_numbers);









// elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43]
 
// var sum_odd_numbers=0
// var sum_even_numbers=0
// for(var i of elements){
//    if(i%2 ===0){
//        sum_even_numbers+=i
//    }
//    else{
//        sum_odd_numbers+=i
//    }
// }
// console.log(sum_odd_numbers);
// console.log(sum_even_numbers);

