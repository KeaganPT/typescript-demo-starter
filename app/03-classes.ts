class Person {
    firstName: string;
    lastName: string;

    sayHello() {
        console.log("Hello", this.firstName);
    }

    sayHelloFullname() {
        console.log("Hello", this.firstName+' '+this.lastName)
    }
}

let phil: Person = new Person();

phil.firstName = "Phil";
phil.lastName = "Donahue";

phil.sayHello();

phil.sayHelloFullname();

    //1                 //2    //3   //4
let someVariableName: Person = new Person()

//1) We declare a variable with our own custom name
//2) we declare the type. It's a custom type of Person
//3) we use the new keyword to instantiate a new instance.
//4) We call the class with parens. The parens invoke the constructor function


//using constructor vs no constructor
class Game {
    constructor(name: string, maker: string) {
        this.gameName = name;
        this.gameMaker = maker;
    }
    gameName: string;
    gameMaker: string;
}

let battleship: Game = new Game('Battleship','Hasbro');

class GameWithoutConstructor {
    gameName: string;
    gameMaker: string;
}

let monopoly: GameWithoutConstructor = new GameWithoutConstructor();

monopoly.gameName = 'Monopoly';
monopoly.gameMaker = 'Hasbro';

//INHERITANCE

class Vehicle {
    type: string;
    make: string;
    model: string;
    manufactureYear: number;
    runs: boolean;
    topSpeed: number;
}

//EXAMPLE ONE

class Automobile extends Vehicle {
    isSelfDriving: boolean;
}

let myCar: Automobile = new Automobile();
myCar.isSelfDriving = false;
myCar.topSpeed = 200;
myCar.make = "volvo";

//EXAMPLE 2

class Motorcycle extends Vehicle {
    easyToDoWheelie: boolean;
}

let myMotorcycle: Motorcycle = new Motorcycle();
myMotorcycle.easyToDoWheelie = true;
myMotorcycle.topSpeed = 180;

//Practice: create animal with 3 props and 2 sub classes
// class Animal {
//     size: string;
//     color: string;
//     staysOnLand: boolean;
// }

// class Bear extends Animal{
//     typeOfBear: string;
// }

// class Tiger extends Animal{
//     inLocalZoo: boolean;
// }

// let theBear: Bear = new Bear();
// theBear.size = "large";
// theBear.color = "Brown";
// theBear.staysOnLand = false;
// theBear.typeOfBear = "Brown Bear"

// let theTiger: Tiger = new Tiger();
// theTiger.inLocalZoo = false;
// theTiger.color = "white";
// theTiger.size = "large";
// theTiger.staysOnLand = true;

// class Store {
//     constructor(name: string, city: string){
//         this.name = name;
//         this.city = city;
//     }
//     name: string; 
//     city: string;
// }

// let ikea: Store = new Store('Ikea', 'Fishers');

//TypeScript allows the above to be rewritten as such


//(also used in almost every Angular component you see these days)
class Store {
    constructor(public name: string, public city: string){}
}

let ikea: Store = new Store('Ikea', 'Fishers');

class Employee extends Person{
    private _salary: number;

    getSalary(): string {
        return this._salary.toString();
    }

    setSalary(newSalary: number) {
        this._salary = newSalary;
    }
}

let newEmployee: Employee = new Employee();
newEmployee.setSalary(30000);
//newEmployee.__salary = 0; //this breaks
let salaryResult: string = newEmployee.getSalary();
console.log("The salary is:", salaryResult);