let myObj = {
    "one":1,
    "two":2
};
//console.log(myObj."one");syntax error
console.log(myObj.one);
console.log(myObj.two);//dot notation
console.log(myObj["one"]);
console.log(myObj["two"]);//bracket notation

let myObj1 = {
    1:"one",
    2:"two"
};
//console.log(myObj.1);//identifier must not be a number
//console.log(myObj.2);//identifier must not be a number

console.log(myObj1["1"]);
console.log(myObj1["2"]);

let myVariable = "name";

let myLastObj={
    name : "michel"
};
console.log(myLastObj.myVariable);//undefined
console.log(myLastObj);
console.log(myLastObj[myVariable]);//michel
console.log(myLastObj["name"]);//michel


