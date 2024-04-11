var cloth = "cotton";

function displayClothes(){
    cloth = "silk";// local variable takes precedence over global variable
    return cloth;
}

console.log(displayClothes()); // prints silk