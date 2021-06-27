/*
multi
line
comment
*/

// 1. Ways to print in JavaScript
// console.log("Hello World");     // to print anything on console
// alert("me");  // to alert, not used much in modern JavaScript
// document.write("This is document write")   // to write on document


// 2. JavaScript Console API (Application Programming Interface)
console.log("Hello World", 4 + 6, "Another log");     // to print anything on console
console.warn("This is a warning");
console.error("This is an error");


// 3. JavaScript Variables - Containers to store data values
var number1 = 34;
var number2 = 56;
console.log(number1 + number2);


// 4. Data types in JavaScript

/*
At a very high level, there are two types of data types in JavaScript:-
1. Primitive data types : undefined, null, number, string, boolean, symbol
2. Reference data types : Arrays and Objects
*/

// Numbers
var num1 = 455;
var num2 = 56.76

// String
var string1 = "This is a string";
var string2 = 'This is also a string';

// Objects
var marks = {
    ravi: 34,
    shubham: 78,
    harry: 99.977
};
console.log(marks);

// Booleans
var a = true;
var b = false;
console.log(a, b);

// Undefined
// undefined means variable banake chod dia hai, usme kuch dala nhi 
// var und = undefined;
var und;
console.log(undefined);
console.log(und);

// Null
// null means ki uss variable ke andar kuch nhi rakha jata hai
var n = null;
console.log(n);

// Arrays
var arr = [1, 2, "bablu", 4, 5];
console.log(arr);


// 5. Operators in JavaScript

// Arithmetic Operators
var x = 34;
var y = 56;
console.log("The value of x + y is", x + y);
console.log("The value of x - y is", x - y);
console.log("The value of x * y is", x * y);
console.log("The value of x / y is", x / y);
console.log("The value of x % y is", x % y);

// Assignment Operators
var z = y;
z += 2;     // z = z + 2
z -= 2;     // z = z - 2
z *= 2;
z /= 2;
z %= 2;
console.log(z);

// Comparison Operators
var p = 34;
var q = 56;
console.log(p == q);
console.log(p >= q);
console.log(p <= q);
console.log(p > q);
console.log(p < q);

// Logical Operators - operate on true and false
// Logical and
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);
// Logical or
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);
// Logical not
console.log(!true);
console.log(!false);


// 5. Functions in JavaScript
function avg(a, b) {
    var c = (a + b) / 2;
    return c;
}
// DRY = Don't Repeat Yourself
var c1 = avg(4, 6);
var c2 = avg(14, 16);
console.log(c1, c2);

// 5. Conditionals in JavaScript
var age = 34;

// single if statement
if (age > 18) {
    console.log('You can drink rasna water');
}

// if else statement
if (age > 8) {
    console.log('You are not a kid');
}
else {
    console.log('You are a kid');
}

// if else ladder
if (age > 32) {
    console.log("You are not a kid");
}
else if (age > 26) {
    console.log("Bache nhi rhe");
}
else if (age > 22) {
    console.log("Yes bache nhi rhe");
}
else if (age > 18) {
    console.log("18 bache nhi rhe");
}
else {
    console.log("Bache rhe");
}
console.log("End of ladder");


// 6. Loops in JavaScript
var array = [1, 2, 3, 4, 5, 6, 7];
console.log(array);

for (var i = 0; i < array.length; i++) {
    // if (i==3) {
    //     continue;
    // }
    // if (i==5) {
    //     break;
    // }
    console.log(array[i]);
}

array.forEach(function (element) {
    console.log(element);
})

const ac = 0;
let j = 0;
while (j < array.length) {
    console.log(array[j]);
    j++;
}

j = 0;
do {
    console.log(array[j]);
    j++;
} while (j < array.length);


// 6. Array Methods in JavaScript
let myArr = ["Fan", "Camera", 34, null, true];
console.log(myArr.length);
myArr.push("harry");    // to add an element to the last
myArr.unshift("hello");     // to add an element to the first 
console.log(myArr);
const newLen = myArr.unshift("abc");    // returns length of new array
console.log(newLen);
myArr.pop();    // to remove the element from last
myArr.shift();  // to remove first element
console.log(myArr);
// myArr.toString() - converts array to string
// myArr.sort() - sorts the array
// sort method by default coverts everything to string and then sees which one comes first in dictionary and sorts accordingly


// 7. String Methods in JavaScript
let myLovelyString = "Harry is a good boy good good";
console.log(myLovelyString.length);
console.log(myLovelyString.indexOf("good"));    // returns starting index of first good
console.log(myLovelyString.lastIndexOf("good"));    // returns starting index of last good
console.log(myLovelyString.slice(0,3));     // 0 se start karte hue 3-1 = 2 index tak characters le liye 
d = myLovelyString.replace("Harry", "Rohan");
d = d.replace("good", "bad");       // replaces only first occurrence
console.log(d, myLovelyString);


// 8. Dates in JavaScript
let myDate = new Date();    // new keyword is used to make a new date
console.log(myDate);
console.log(myDate.getTime());      // gives time in seconds
console.log(myDate.getFullYear());      // gives the year
console.log(myDate.getDay());      // gives the day
// sun mon tues wed thurs fri sat --> 0 1 2 3 4 5 6 
console.log(myDate.getMinutes());      // gives the minutes
console.log(myDate.getHours());      // gives the hour


// 9. DOM Manipulation
// DOM (Document Object Model) means the document which is visible, using this we can manipulate HTML dynamically
let elem = document.getElementById('click');   // this method is used when we want to target an element by its identifier
console.log(elem);

let elemClass = document.getElementsByClassName("container");       // we will get HTML collection
console.log(elemClass);
// elemClass[0].style.background = "yellow";
elemClass[0].classList.add("bg-primary");    // to add class in element
elemClass[0].classList.add("text-success"); 
// elemClass[0].classList.remove("text-success");      // to remove a class
// elemClass[0].innerHTML;     // to access HTML of any element which will be returned as a string 
// // elemClass[0].innerText;   // to get just the text
console.log(elem.innerHTML);
console.log(elem.innerText);
console.log(elemClass[0].innerHTML);
console.log(elemClass[0].innerText);
let tn = document.getElementsByTagName('div');      // to find elements by tag name 
console.log(tn);
let createdElement = document.createElement('p');    // to create an element
createdElement.innerText = "This is a created para";
tn[0].appendChild(createdElement);    // to add a child to an element 
let createdElement2 = document.createElement('b');    // to create an element
createdElement2.innerText = "This is a created bold";
tn[0].replaceChild(createdElement2, createdElement);    // to replace a child with another
tn[0].removeChild(createdElement2);    // to remove a child 
// document.location --> gives the location of document
// document.title --> gives the title of document
// document.URL --> gives the URL of document
// document.scripts --> gives all the scripts of the document
// document.links --> gives all the links in the document
// document.forms --> gives all the forms in the document
// document.images --> gives all the images the document
// document.domain --> gives the domain of the document

// Selecting using Query
let sel = document.querySelector('.container');
console.log(sel);   // gives the first element of container class
let sel2 = document.querySelectorAll('.container');
console.log(sel2);   // gives the Node list which contains all elements of container class


// 10. Events (vo chize jo ho rhi hoti hai) in JavaScript
function clicked(){
    console.log("The button was clicked");
}
// window.onload = function(){
//     console.log("The document was loaded");
// }   // used to various things when document loads
// firstContainer.addEventListener('click', function(){    // in addEventListener parameters, we furst write event and then function
//     console.log("Clicked on container");
//     document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked </b>"   // changing text after listening to the event
// })    // to attach an event listener to the firstContainer
// firstContainer.addEventListener('mouseover', function(){    
//     console.log("Mouse on container");
// }) 
// firstContainer.addEventListener('mouseout', function(){    
//     console.log("Mouse out of container");
// }) 
let prevHTML = document.querySelectorAll('.container')[1].innerHTML;
firstContainer.addEventListener('mouseup', function(){    // click karke chod dia
    document.querySelectorAll('.container')[1].innerHTML = prevHTML;
    console.log("Mouse up when clicked on container");
}) 
firstContainer.addEventListener('mousedown', function(){    // click karke hold kia
    document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked </b>" 
    console.log("Mouse down when clicked on container");
}) 

// 11. Arrow Functions
function sum(a,b){
    return a+b;
}
sum = (a,b)=>{      // another way to write the above function
    return a+b;
}
logKaro = ()=>{      
    document.querySelectorAll('.container')[1].innerHTML = "<b> Set timeout fired </b>" 
    console.log("I am your log");
}

// 12. SetTimeout and SetInterval
// setTimeout(logKaro, 2000);   // schedules the function
// first argument is a function and second argument is kitne milliseconds ke baad logKaro function ko run karna chahte ho
// clr = setTimeout(logKaro, 2000);    // clr will contain an ID which when wrtitten - clearTimeout(clr), the function not run at all
// setInterval(logKaro, 2000);  // repeatedly koi chiz karana chahte ho to
// clr = setInterval(logKaro, 2000);  // clr will contain an ID which when wrtitten - clearInterval(clr), the function will stop running
// use clearTimeout(clr)/clearInterval(clr) to cancel setTimeout/setInterval


// 13. JavaScript local storage
// local storage helps to store data in user's computer in the form of a string
localStorage.setItem('name', 'harry');      // adds the item to local storage (key value pair)
localStorage;    // gives the local storage
localStorage.clear();    // to clear whole local storage
// every domain has its own local storage
localStorage.getItem('name');     // to get the item
localStorage.removeItem('name');     // to remove the item, removes only one item which is name


// 14. JSON - JavaScript Object Notataion
obj = {name: "harry", length: 1, a: {this: 'th"at'}};   // obj is a JavaScript object
jso = JSON.stringify(obj);      // converts object to valid JSON string, valid JSON means only double quotes
console.log(typeof jso);
console.log(jso);
// typeof variable     // to know the type of variable
parsed = JSON.parse(`{"name":"harry","length":1,"a":{"this":"th\\"at"}}`);      // to convert JSON string to object 
// in function we pass a valid JSON string
// we can write the string in backticks
console.log(parsed);


// 15. Template Literals - Backticks
a = 34;
console.log(`This is my ${a}`);     // ${a} is replaced by variable a