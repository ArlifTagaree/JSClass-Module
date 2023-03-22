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

// ============================= EX 3 =============================
class Animal {
    constructor() {
      this.type = "unknown";
      this.car = "unknown";
    }
  }
  class Dog extends Animal {
    constructor() {
      super(); // calling parent constructor with no arguments
      this.type = "dog";
      this.car = 'benz';
    }
  }
  const myDog = new Dog();
  console.log(myDog.type); // Output: "dog"
  console.log(myDog.car); // Output: "benz"




//try Class by myself reference Project
class Users {
    constructor(email,password,displayName,height,weight,gender,image){
        this.email = email;
        this.password = password;
        this.displayName = displayName;
        this.height = height;
        this.weight = weight;
        this.gender = gender;
        this.image = image;
    }
    get showEmail(){
        return this.email;
    }
    get showDisplay(){
        return this.displayName;
    }
    get showImage(){
        return this.image;
    }
}

class userLogin extends Users {
    constructor(email, password, isLogin){     
        super(email, password, isLogin);
        this.isLogin = isLogin;
    }
}
const pramote = new userLogin('test@gmail.com', '123456789', 1);
console.log(pramote.showEmail);