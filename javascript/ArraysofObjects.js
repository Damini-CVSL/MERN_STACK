
const users = [{
    firstName : "Damini",
    gender : "female"
},{
    firstName : "Tejas",
    gender : "male"
},{
    firstName : "Sruthi",
    gender : "female"
},{
    firstName : "Lahari",
    gender : "female"
}]

for(let i=0; i<users.length; i++){
    if(users[i]["gender"] == "male"){
        console.log(users[i]["firstName"]);
    }
}