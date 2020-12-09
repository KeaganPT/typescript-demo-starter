var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.sayHello = function () {
        console.log("Hello", this.firstName);
    };
    Person.prototype.sayHelloFullname = function () {
        console.log("Hello", this.firstName + ' ' + this.lastName);
    };
    return Person;
}());
var phil = new Person();
phil.firstName = "Phil";
phil.lastName = "Donahue";
phil.sayHello();
phil.sayHelloFullname();
//1                 //2    //3   //4
var someVariableName = new Person();
//1) We declare a variable with our own custom name
//2) we declare the type. It's a custom type of Person
//3) we use the new keyword to instantiate a new instance.
//4) We call the class with parens. The parens invoke the constructor function
//using constructor vs no constructor
var Game = /** @class */ (function () {
    function Game(name, maker) {
        this.gameName = name;
        this.gameMaker = maker;
    }
    return Game;
}());
var battleship = new Game('Battleship', 'Hasbro');
var GameWithoutConstructor = /** @class */ (function () {
    function GameWithoutConstructor() {
    }
    return GameWithoutConstructor;
}());
var monopoly = new GameWithoutConstructor();
monopoly.gameName = 'Monopoly';
monopoly.gameMaker = 'Hasbro';
//INHERITANCE
var Vehicle = /** @class */ (function () {
    function Vehicle() {
    }
    return Vehicle;
}());
//EXAMPLE ONE
var Automobile = /** @class */ (function (_super) {
    __extends(Automobile, _super);
    function Automobile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Automobile;
}(Vehicle));
var myCar = new Automobile();
myCar.isSelfDriving = false;
myCar.topSpeed = 200;
myCar.make = "volvo";
//EXAMPLE 2
var Motorcycle = /** @class */ (function (_super) {
    __extends(Motorcycle, _super);
    function Motorcycle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Motorcycle;
}(Vehicle));
var myMotorcycle = new Motorcycle();
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
var Store = /** @class */ (function () {
    function Store(name, city) {
        this.name = name;
        this.city = city;
    }
    return Store;
}());
var ikea = new Store('Ikea', 'Fishers');
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Employee.prototype.getSalary = function () {
        return this._salary.toString();
    };
    Employee.prototype.setSalary = function (newSalary) {
        this._salary = newSalary;
    };
    return Employee;
}(Person));
var newEmployee = new Employee();
newEmployee.setSalary(30000);
//newEmployee.__salary = 0; //this breaks
var salaryResult = newEmployee.getSalary();
console.log("The salary is:", salaryResult);
//# sourceMappingURL=03-classes.js.map