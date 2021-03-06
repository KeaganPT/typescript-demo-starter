let username: string = "instructor";
let password: string = "Letmein1234!";
let instructorId: number = 5;

//can also declare variable and type without initializing,
let phoneNumber: number;
let socialSecurity: number;
let isMarried: boolean;

// or have implicit typing 
let greeting = "Hello"

//TypeScript supports ES6 octal literals (numbers are one of the most common)
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;

//String: same as js just be consistent with '' or ""
let appName: string = 'Twitter';
appName = "Instagram";

//Boolean: exact same
let isLoggedIn: boolean = true;

//Array: can be expressed in 2 ways
//1 (more prevelant)
let studentList: string[] = ['Tom', 'Tracy', 'Nikaya']
//2
let allScores: Array<number> = [100, 92, 95, 96];

//accessing the array indicies works the same
console.log("Student List:", studentList[0]);

//Specific to typescript there is the any type that is used to toggle off forced types if it is not known during development such as a 3rd prty package giving a variable

let dataFromThirdParty: any = '12345';
console.log(dataFromThirdParty);
console.log(typeof dataFromThirdParty);

dataFromThirdParty = 12345;
console.log(dataFromThirdParty);
console.log(typeof dataFromThirdParty)

//Void: a void type has no type at all, not really seen in variables but more common to see in functions that return no value

function sayHelloToAll() : void {
    console.log("Hello to all!")
}

//null and undefined
let undefinedVariable: undefined = undefined
let nullVariable: null = null;

//Tuple: allows you to create an array with different types
//declare a tuple type
let usernameAndId: [number, string];
//initialize it
usernameAndId = [1, "kennisreally40"];
//MUST BE INPUTED IN SAME ORDER: the tuple is looking for a number at index 0 and a string at index 1

//Enum: allows us to give names to numeric values
enum WeaponType { Sword, Saber, Spear }
let weapon: WeaponType = WeaponType.Sword

//like arrays, enums start at 0, but that starting index can be assigned a different number

enum CardType { Ace = 1, Two, Three, Four}
let cardType: string = CardType[2]
console.log(cardType)

//UNION TYPES:
//union types allow us to have more flexibility with our variables but still keep the intent of declaring a specific type for our variables

let x: number | string;
let y: number | null;

//the above code allows x to be either a number or a string
x = '1234';
x = 1234;

