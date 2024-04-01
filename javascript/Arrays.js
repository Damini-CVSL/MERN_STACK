//Arrays 

const personArray= ["Damini", "Tejas", "Sruthi", "Nuthan"];

console.log(personArray[1]);
console.log(personArray[2]);
console.log(personArray[3]);

console.log("Print even numbers from given array");
const ages = [25,6,9,45,23,22,4];
for(let i=0; i<ages.length; i++){
    if(ages[i]%2 ==0)
        console.log(ages[i]);
}


console.log("Print biggest number in an array :");
const numbers = [25,6,9,45,23,22,4];

let biggest = numbers[0];
for(let j=0; j<numbers.length; j++){
    if(numbers[j] > biggest)
        biggest = numbers[j];

}

console.log("The biggest element in given array is : "+biggest);