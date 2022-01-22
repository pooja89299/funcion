// function sayHello(name) {
//     return "Hello How are you " + name
//    }
    
//    console.log(sayHello("Pooja Rani"))





// function sayBye(userName){
//     return "GoodBey"+" "+userName
//  }
  
//  console.log(sayBye(" Nayak Kumar"))







// (function () {
//     var x = "Hello !! Nayak";  // I will invoke myself
//     console.log(x);
//    })();
   


// function myFunction(a, b) {
//     return a * b;
//    }
//    var x = myFunction(4, 3);
//    console.log(myFunction)






// var row = 5
// while (row>=1){
//    var column=1
//    str=""
//    while(column<=5){
//        str=str+row+" ";
//        column+=1;
//    }
//    console.log(str);
//    row-=1;
// }






 
// var i =156;
// while (i<166){
//    console.log(i-155);
//    i+=1
// }




// const bioData={
//    name:"pooja",
//    age:"21",
//    pune:"Navgurukul", 
// }
// var data=fs.readFileSync("pooja.json")
// var but=JSON.parse(data)
// console.log(but)


// const jsonData=JSON.stringify(bioData)
// console.log(jsonData)

// const objData=JSON.parse(jsonData)
// console.log(objData)



// 1: convert to JSON --> done
// 2: dusre file me add krdena 
// 3: readfine
// 4: again convert back to js obj ori
// 5: console.log



// var fs=require("fs")

// const { stringify } = require("node:querystring")
// var jsonData =JSON.stringify(bioData)
// fs.writeFile("JSON6.JSON",jsonData,(err)=>{
//    console.log("done")
// // })
// var date=("poja.json","i am khusboo")



// // fs.writeFileSync("pooja.json",JSON.stringify(bioData,null,5))
// var data=fs.readFileSync("pooja.json","utf8")
// var b=JSON.parse(data)
// console.log(b)


// var obj={"p":1,"o":2,"o":3,"j":4,"a":5}
// var fs=require("fs")
// var jsonData=JSON.stringify(obj)
// fs.writeFile("json3.json",jsonData,(err)=>{
//    console.log("done")

// })





// const a=require("readline-sync")
// var n=a.questionInt("enter a number:")
// var c=0
// var i=1
// while (i<=n){
//    if (n%i==0){
//       c=+1
//    }
//    i=i+1
//    if (c==2){
//       console.log("prime number:")
//    }
//    else{
//       console.log("not prime number")
//    }
// }



// const fs=require("fs")
// fs.writeFileSync("read.txt","my name is pooja rani")
// const buf_data=fs.readFileSync("read.txt")
// console.log(buf_data)

// fs.appendFileSync("read.txt","Navgurukul in clss")

// fs.renameSync("read.txt","pooja.txt")











// Node.js program to demonstrate the 
// fs.readFileSync() method
 
// Include fs module
// const fs = require('fs');
  
// // Calling the fs.readFile() method
// // for reading file 'input1.txt'
// fs.readFile('./input1.txt',
//         {encoding:'utf8', flag:'r'},
//         function(err, data) {
//     if(err)
//         console.log(err);
//     else
//         console.log(data);
// });

