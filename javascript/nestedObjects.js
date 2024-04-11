var myStorage = {
    "car" :{
        "inside" : {
            "glove box" : "maps",
            "passenger seat" : "crumbs",
        },
        "outside" : {
            "trunk" : "jack"
        }
    }
};

console.log(myStorage);

//accessing objects from nested objects
console.log(myStorage.car.inside["glove box"]);
console.log(myStorage.car.inside["passenger seat"]);