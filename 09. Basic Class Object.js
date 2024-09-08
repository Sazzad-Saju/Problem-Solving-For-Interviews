
class Car{
    constructor(name, year){
        this.name = name;
        this.year = year;
    }
    age(){
        let currentYear = new Date().getFullYear();
        return currentYear - this.year;
    }
}

const myCar = new Car('Ford', 2014);
let age = myCar.age();
console.log(`My car is ${age} years old!`);