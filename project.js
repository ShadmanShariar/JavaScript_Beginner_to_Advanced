const readline = require("prompt-sync")({sigint:true}); 

// let n = readline();
// function isprime(number){
//     let count = 0;
//     for(let i = 2; i<n ;i++){
//     if(number%i==0){
//     count++;
//     break;
//     }}
//     // console.log(count);
//     if(count > 0 )return false;
//     else return true;
//     }

// let n = prompt("Enter a number : ");
// console.log(isprime(n))

// let n = readline();

// for( let i = 0 ; i < n ; i++){

//     let s = prompt();
//     let s2 = "codeforces";
//     s.toLowerCase();
//     let c = 0;

// for(let j =0 ; j<s.length;j++){
// if(s[j]!=s2[j])c++;

// }
// console.log(c);
// }

// var num = prompt("Eneter a number");
// console.log(Number.parseInt(num)+10);
// var x = prompt("");
// let a = 10
// let b = 2
// console.log(typeof(a));
// let p = "The sum is"
// console.log(p,(a**b));
// const items  = {
// "Anik" : 1 ,

// "Defen" : 2

// }
// items ["Anik"] = 3;

// console.log(items["Anik"]);

// let num = prompt("");

// num = Number.parseInt(num);

// console.log(num+12);


// If Else

// let num  = Number.parseInt(prompt("Enter a number "));

// if(num%2==0){

// console.log("This is a even number");

// }
// else{

// console.log("This is a odd number");

// }

// Loop 

// let n = prompt("Enter the height of triangle");

// for(let i = 0 ; i < n ; i++){
// for(let j = 0 ; j < n-i ;j++){
//     process.stdout.write(" ");
// }
// for(let j =0 ; j <= i ;j++){
//     process.stdout.write("* ");
// }
// console.log();

// }

// Function 

// let a = prompt("Enter a number ");
// let b = prompt("Enter another number ")

// console.log(add(Number.parseInt(a),Number.parseInt(b)))

// Type 1

// function add (a,b){

// return a+b;


// }

// // Type 2

// const hello = () =>{

// console.log("Hello Guys")


// }
// hello()

// let items = {

// "Anik" : 100,
// "Defen" : 20,
// "Akib" : 10

// }

// For Loop

// for(let i = 0 ; i < Object.keys(items).length;i++){


// console.log(Object.keys(items)[i],"  :  ",items[Object.keys(items)[i]]);


// }

// // For In

// for( let i in items){


// console.log(i," : ",items[i]);

// }

// String 

//  let name  = prompt("Enter your name");
// console.log(name.includes("a"));
// console.log(name.toUpperCase());
// console.log(name[0]);
// console.log(name.length);
// console.log(name.slice(1,4));
// console.log(name.replace("s","a"));
// let boy1 = "Anik"
// let boy2 = "Akib"
// literals
// let sen = `${boy1} is a friend of ${boy2}`
// console.log(sen);

// let arr = [1,4,2,3,8,6,5,7,4,3];
// let brr = [11,1,1,1,1,,1,1,1,1,1,1];
// let a = arr.concat(brr);
// for (let i = 0 ; i < 4; i++){
// arr[i] = readline();
// }
// for (let i = 0 ; i < 4; i++){
//    console.log(arr[i]);}
// arr.forEach((element) => { console.log (element * element);})
// let arr = [1,2,2,3,3,];
// for(let x of arr){

// console.log(x);

// }
// for(let x in arr){

//     console.log(arr[x]);
    
//     }

// arr.pop(); // at the end
// arr.push(10);  // at the end
// arr.shift(); //  at the begining
// arr.unshift(122); // at the begining
// delete arr[0]; // del buy index
// let c = arr.join("-");
// let b = arr.toString();
// console.log(a.toString());
// arr.sort();  // Alphabetical Sort
// let compare = (a, b) =>{
//     return a - b; }
// arr.sort(compare);
// let key  =  [1,2,3,4,5,4];
// let new_arr = arr.slice(2,4); // one type sub string
// key.reverse();
// let del_values = arr.splice(2,2,100,111,222,333,444); // 1st idx to start del....
// // 2nd idx how many ind need to delete, after that all add element
// console.log(key.toString());

// String to array

// let name = "Shadman Shariar";

// let array  = Array.from(name);

// console.log(array[9]);

// let br = []

// br[0] = [1,2,3,3]

// console.log(br[0][2]);


//////// Map , Filetr , Reduce /////////


 let arr = [1,2,2,2,3,4,45,5,42,3];

// Map

//  let newArr = arr.map((element, index , arr)=>{ /// return, foreach dont
//console.log(element, index , arr); can use these 3
// return element + 1;

//  }

//  )
// console.log(newArr);

// Filter

//  let newArr = arr.filter((element)=>{ /// return, foreach dont
// return element>4;

//  }
//  )
// console.log(newArr);


// Reduce

// type 1
//  let newArr = arr.reduce((element1, element2)=>{ /// return, foreach dont
// return element1 + element2;
// // take 2 then sum the previous
//  }
//  )
// console.log(newArr);

// // type 2

// let fnc = (h1,h2) =>{

// return h1+h2;

// }

// let newArr2 = arr.reduce(fnc);

// console.log(newArr2);

// Hash Map

// const map1 = new Map();

// map1.set('a', 1);
// map1.set('b', 2);
// map1.set('c', 3);

// console.log(map1.get('a'));
// // Expected output: 1

// map1.set('a', 97);

// console.log(map1.get('a'));
// // Expected output: 97

// console.log(map1.size);
// // Expected output: 3

// map1.delete('b');

// console.log(map1.size);
// // Expected output: 2


// Hash Set 


// const mySet1 = new Set();

// mySet1.add(1); // Set(1) { 1 }
// mySet1.add(5); // Set(2) { 1, 5 }
// mySet1.add(5); // Set(2) { 1, 5 }
// mySet1.add("some text"); // Set(3) { 1, 5, 'some text' }
// console.log(mySet1);