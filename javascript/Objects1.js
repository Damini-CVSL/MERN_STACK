// Object Creation 

var myDog = {
    "Name" : "Jasmin",
    "Age" : 2,
    "Tail" : 1,
    "Legs" : 4,
    "Gender" : "Male"
}

// accessing Object properties with (.) Operator
console.log(myDog.Name);
console.log(myDog.Age);

//accessing Object properties with bracket notations

console.log(myDog["Tail"]);
console.log(myDog["Gender"]);


// accessing object properties with variables

var myvar = "Legs";
console.log(myDog[myvar]);


//updating an object property
myDog["Gender"] = "Female";
console.log(myDog);

// Adding new Object

myDog.Bark = "Bow Bow";
console.log(myDog);

// delete properties

delete myDog.Tail;
console.log(myDog);
