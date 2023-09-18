/* defining object
[1] object literal*/

let user = {
  //property
  fName: "michel",
  lName: "kadi",
  addresses:{
    eg:"giza",
    ksa:"riyad",
    usa:"california",

    getMainAddress:function(){
      return `main address is in eg ${user.addresses.eg}`
    },
    getMainAddress:function(){
      return `main address is in ksa ${user.addresses.ksa}`
     },
  },
 
  
getFullName:function(){
    return `fullName :${user.fName} ${user.lName}`

  },
};
  


// accessing object properties
console.log(user.fName)//dot notation
console.log(user["fName"])//bracket method
console.log(user.addresses.ksa);
console.log(user["addresses"]["eg"])
console.log(user.addresses.usa)

//console.log(typeof(user.fName));
//console.log(user.addresses.eg);

// accessing object methods
console.log( user.getFullName());
console.log(user.addresses.getMainAddress());

