
class Person{
    constructor(first_name, last_name, age){
        this.firstName = first_name;
        this.last_name = last_name;
        this.age = age;
    }
    info() {
        console.log(`Name: ${this.firstName} ${this.last_name} \nAge: ${this.age}`)
    }
}

class Student extends Person {
    constructor(first_name, last_name, age, dept, sid){
        super(first_name, last_name, age)
        this.dept = dept;
        this.sid = sid;
    }
    profile(){
        super.info()
        console.log(`Department: ${this.dept} \nId: ${this.sid}`)
    }
}

let p1 = new Person('Shanta', 'Jannat', 25)
p1.info()

console.log("***")

let s1 = new Student('Sazzad', 'Saju', 29, 'CSE', 1602049)
s1.profile()