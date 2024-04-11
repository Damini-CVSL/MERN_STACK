var myvar = 5;// Global variables can be accessed inside and outside a function
function fun1(){
    var output = " ";
    if(typeof myvar != "undefined"){
        output += "GlobalScopeVariable : " + myvar;
    }

    console.log(output);
}
fun1();
console.log(myvar);