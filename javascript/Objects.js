//objects


console.log("Defining and accessing array elements");
const personArray = ["Damini", "Tejas"];
const genderArray = ["female", "male"];

for(let i=0; i<personArray.length; i++){
    if(genderArray[i] == "male"){
        console.log(personArray[i]);
    }
}


console.log("Defining and accessing objects");
const users = {
    firstName : "Damini",
    lastName : "Chilakalapudi",
    age  : 20,
    gender : "female",
    isMarried : false

}

console.log(users["firstName"]);
console.log(users["age"]);
console.log(users["gender"]);

