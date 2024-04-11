function  phoneticLookup(value){
    var result = " ";

    var lookup = {
        "alpha" : "Adams",
        "bravo" : "Boston",
        "charlie" : "Chicago",
        "delta" : "Denver",
        "echo" : "Easy",
        "foxtrot" : "frank"
    };
    result = lookup[value];

    return result;
}

console.log(phoneticLookup("charlie"));


// checking if property is existed or not

var lookup = {
    "alpha" : "Adams",
    "bravo" : "Boston",
    "charlie" : "Chicago",
    "delta" : "Denver",
    "echo" : "Easy",
    "foxtrot" : "frank"
};

function checkObj(checkprop){
   
    if(lookup.hasOwnProperty(checkprop)){
        return lookup[checkprop];
    }else{
        return "Not fount";
    }
} 

console.log(checkObj("bravo"));

if(lookup.hasOwnProperty("echo")){
    console.log("yes");
}
