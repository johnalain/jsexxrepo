let mainObj ={
    hasDiscount:true,
    showMessg:function(){
        return `you ${this.hasDiscount ? "" :"don't"} have discount`;
    },

};
console.log(mainObj.hasDiscount);
console.log(mainObj.showMessg());

let otherobj = Object.create(mainObj);
otherobj.hasDiscount = false;
console.log(otherobj.hasDiscount);
console.log(otherobj.showMessg());

let lastobj = Object.create(mainObj);
console.log(lastobj.hasDiscount);
console.log(lastobj.showMessg());

//next video#08 https://www.youtube.com/watch?v=Sfag8fVDMNY


