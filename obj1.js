let user = new Object();

user.firstName = "michel";
user.lastName = "kadi";

user["age"] = 37;

user.getFullName = function(){
    return `full name is ${user.firstName} ${user.lastName}`;
}

console.log(user);
console.log(user.firstName);
console.log(user["lastName"]);
console.log(user.age);
console.log(user.getFullName());

