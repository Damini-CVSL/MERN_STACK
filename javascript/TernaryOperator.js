function TernaryOperator(a,b){
    return a === b ? "yes" : "no";
}

console.log(TernaryOperator(5,8));


function checkSign(num){
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}

console.log(checkSign(0));