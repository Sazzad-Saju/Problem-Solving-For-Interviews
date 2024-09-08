class ComplexNumber{
    constructor(real, imaginary){
        this.real = real;
        this.imaginary = imaginary
    }
    
    add(other){
        let realSum = this.real + other.real
        let imgSum = this.imaginary + other.imaginary
        return new ComplexNumber(realSum, imgSum)
    }
}

let c1=new ComplexNumber(3,7);
let c2 = new ComplexNumber(4,5);
let result =  c1.add(c2);
console.log(`(${c1.real} + ${c1.imaginary}i) + (${c2.real} + ${c2.imaginary}i) = ${result.real} + ${result.imaginary}i`)


