var contacts = [{
    "firstname" : "Tejas",
    "lastname" : "Niranjan",
    "number" : 6556565665,
    "likes" : ["Coding", "Photography", "Fitness"]

},{
    "firstname" : "Damini",
    "lastname" : "Chilakalapudi",
    "number" : 5567878688,
    "likes" : ["Coding","dancing", "singing","Java"]
},{
    "firstname" : "Harshitha",
    "lastname" : "Vaitla",
    "number" : 5358445857,
    "likes" : ["Travelling","Coding"]
},{
    "firstname" : "Geethika Sai",
    "lastname" : "Madhavi",
    "number" : "unknown",
    "likes" : ["Coding, Social MEdia"]
}]

function lookUpProfile(name,prop){
    for(var i=0; i<contacts.length; i++){
        if(contacts[i].firstname == name || contacts[i].lastname == name){
            return contacts[i][prop] || "No Such Property"
        }
    }
    return "No Such Property"
}

var data = lookUpProfile("Harshitha", "number");
console.log(data);