function localScopeVariable(){
    var myvar = 5; // local variable which is visible within the function
    console.log(myvar);
}
localScopeVariable();
//console.log(myvar); gives you error that local variable can't be accesed outside the function
