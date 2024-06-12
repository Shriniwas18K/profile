// INHERITANCE
// by default every object we create in js has its
// parent object called as its prototype which can be
// seen using 
// console.log(Object.getPrototypeOf(childObject))
// this chaining goes till last parent object which is null

// In js concept of inheritance is completely diffirent and occurs everywhere silently

// here by default the child object gets all the properties and methods of parent object
// once we manually set parent object , or even of default parent object's too
// the methods and properties go inside child

// whenever any method uses   "this" keyword then it only refers to object that has called it
// not to anyone of its parent or child objects
let child=new String("str");
let parent={'a':'b' , 
        foo:function(){
                console.log(this,"parent foo here");
            }
};
Object.setPrototypeOf(child,parent);
// console.log(
// Object.getPrototypeOf(Object.getPrototypeOf(    Object.getPrototypeOf(s)))
// );
// console.log(Object.getPrototypeOf(child));
// console.log(parent.foo());
// console.log(child.foo());

// OUTPUT
// { a: 'b', foo: [Function: foo] }
// { a: 'b', foo: [Function: foo] } here
// undefined
// { '0': 's', '1': 't', '2': 'r' } here
// undefined



// POLYMORPHISM: same as other languages : child objects override function bodys
child.foo=()=>{console.log('child method overrides parent one')};
console.log(parent.foo());
console.log(child.foo());