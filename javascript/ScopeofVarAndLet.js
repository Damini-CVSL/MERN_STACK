function checkScopeofVar(){
    var i = "FunctionScope";
    if(true){
         i = "block Scope";
        console.log("Block Scope is : "+i);
    }
    console.log("Function Scope i is : "+i)
}

checkScopeofVar();

function checkScopeofLet(){
    let i = "FunctionScope";
    if(true){
       let   i = "block Scope";
        console.log("Block Scope is : "+i);
    }
    console.log("Function Scope i is : "+i)
}
checkScopeofLet();