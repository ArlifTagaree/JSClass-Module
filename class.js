// ============================= EX 1 =============================
class Carone {
    constructor(make,model,year) {
        // Properties
        this.make = make;
        this.model = model;
        this.year = year;
        this.speed = 0;
    }
    // Method
    drive(speed){
        this.speed += speed;
        console.log(`${this.make} speed: ${this.speed}`); // Ben speed: 230
    }
}

// create a new car instance
let myCar = new Carone('Ben','E220',2000); 
// Call method drive
myCar.drive(230); 

// ============================= EX 2 =============================
class Car {
    constructor(make,model,year) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.speed = 0;
    }
    
    static listOfcar() {
        const carMake = ['Ben','Toyota','Honda'];
        return carMake;
    }
}
console.log(Car.listOfcar()); // [ 'Ben', 'Toyota', 'Honda' ]

const carList = new Car();

// got all undefined
console.log(carList);


//try Class by myself
