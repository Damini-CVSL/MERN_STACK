var myArray = [["Damini", 101], ["Tejas", 102]];

console.log(myArray);

console.log("Accessing elements from nested arrays");
var myArray1 = [[1,2,3],[4,5,6],[7,8,9],[[10,11,12],13,14]];

console.log(myArray1[3][0][1]);
console.log(myArray1[2][2]);

console.log("Using \"push function\" to add an array as element to existing array");

myArray1.push([15,16,17]);
console.log("Inserted ");

console.log(myArray1);


console.log("using \"pop function\" to remove an element from an array");

myArray1.pop();
console.log(myArray1);

//shift function
console.log("Removing First Element from an array using \"shift function \"");
var firstElement = myArray1.shift();

console.log("First Element in array is : "+firstElement);
console.log(myArray1);


// unshift function
console.log("Add  Element to an array at first position using \"unshift function \"");
myArray1.unshift([1,2,3]);
console.log(myArray1);