// delete operator (property)from object

const user = {name: "michel"};

//u can't delete object only property

 delete user.name; 
// u can use dot notation or brackets
delete user['name'];
console.log(delete user['name']);

console.log(user);
console.log(user.name);
console.log("=".repeat(15));

const userName = "michel";
console.log(userName);
console.log(delete userName);
console.log(userName);
console.log("=".repeat(15));

//const freezedObj = object.freeze({age:37});
//console.log(freezedObj);
//console.log(freezedObj.age);
const freezedObj = Object.freeze({age:37});
console.log(freezedObj);
console.log(freezedObj.age);

console.log(delete freezedObj.age);

console.log(freezedObj);
console.log(freezedObj.age);

const eObj = {};
Object.defineProperty(eObj,"a", {value:1, configurable:false});//false configurable can't delete true can
console.log(eObj);
console.log(eObj.a);
console.log(delete eObj.a);
//https://www.youtube.com/watch?v=8vg20bpzIys&t=322s v#09





