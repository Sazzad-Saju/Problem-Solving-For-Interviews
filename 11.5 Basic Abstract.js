//Creating a constructor function
function Vehicle(){
    this.vehicleName = "vehicleName";
    throw new Error("Cannot create instance of abstract class");
}

Vehicle.prototype.display = function(){
    return "Bike Name: "+this.vehicleName
}

//Creating a constructor function  
function Bike(vehicleName){
    this.vehicleName = vehicleName
}

//Creating object without using the function constructor  
Bike.prototype = Object.create(Vehicle.prototype)

let myBike = new Bike("Honda")
console.log(myBike.display())
console.log(myBike instanceof Vehicle)
console.log(myBike instanceof Bike)