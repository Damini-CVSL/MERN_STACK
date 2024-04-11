function nextInLine(arr,item){
    arr.push();
    return arr.shift();
}


var testArr = [1,2,3,4,5];

console.log("Berofre : " +JSON.stringify(testArr));
console.log(nextInLine(testArr,6));
console.log("After : " +JSON.stringify(testArr));