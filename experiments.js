class MyClass {
    constructor() {
        this.publicMember = 10;
        var _privateMember = 5;

        this.getPrivateMember = function() {
            return _privateMember;
        }
    }

    myMethod() {
        return this.publicMember;
    }
}

var myClassInstance = new MyClass();
console.log(myClassInstance.myMethod());
console.log(myClassInstance.getPrivateMember());