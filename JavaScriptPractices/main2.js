let parent={
    getchildfoo(){
        console.log('methods common to all child objects')
        return this.foo
    },
}
// generally parent object contains methods and properties common to all child objects
let child1={
    foo:"child 1 foobar",__proto__:parent
}
let child2={foo:"child 2",__proto__:parent}
console.log(child1.getchildfoo());
console.log(child2.getchildfoo());
// but we needed to manually bind above parent to child objects
// instead of manually binding child objects with parent using __proto__

// to reduce the manual parent object creation we use constructor functions
// and .prototype syntax given below
function childConstructor(bar){
    this.foo=bar;
}
childConstructor.prototype.getchildfoo=function(){
    console.log('no need of parent object manual creation')
    return this.foo
}

let child= new childConstructor('new syntax bar');
console.log(child.getchildfoo())

// here parent object prototype is initialzed but after child object creation
// in the way at top , parent object was needed to be made first

console.log(Object.getPrototypeOf(child))