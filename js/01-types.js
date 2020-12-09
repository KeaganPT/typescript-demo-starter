var username = "instructor";
var password = "Letmein1234!";
var instructorId = 5;
//can also declare variable and type without initializing,
var phoneNumber;
var socialSecurity;
var isMarried;
// or have implicit typing 
var greeting = "Hello";
//TypeScript supports ES6 octal literals (numbers are one of the most common)
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
//String: same as js just be consistent with '' or ""
var appName = 'Twitter';
appName = "Instagram";
//Boolean: exact same
var isLoggedIn = true;
//Array: can be expressed in 2 ways
//1 (more prevelant)
var studentList = ['Tom', 'Tracy', 'Nikaya'];
//2
var allScores = [100, 92, 95, 96];
//accessing the array indicies works the same
console.log("Student List:", studentList[0]);
//Specific to typescript there is the any type that is used to toggle off forced types if it is not known during development such as a 3rd prty package giving a variable
var dataFromThirdParty = '12345';
console.log(dataFromThirdParty);
console.log(typeof dataFromThirdParty);
dataFromThirdParty = 12345;
console.log(dataFromThirdParty);
console.log(typeof dataFromThirdParty);
//Void: a void type has no type at all, not really seen in variables but more common to see in functions that return no value
function sayHelloToAll() {
    console.log("Hello to all!");
}
//null and undefined
var undefinedVariable = undefined;
var nullVariable = null;
//Tuple: allows you to create an array with different types
//declare a tuple type
var usernameAndId;
//initialize it
usernameAndId = [1, "kennisreally40"];
//MUST BE INPUTED IN SAME ORDER: the tuple is looking for a number at index 0 and a string at index 1
//Enum: allows us to give names to numeric values
var WeaponType;
(function (WeaponType) {
    WeaponType[WeaponType["Sword"] = 0] = "Sword";
    WeaponType[WeaponType["Saber"] = 1] = "Saber";
    WeaponType[WeaponType["Spear"] = 2] = "Spear";
})(WeaponType || (WeaponType = {}));
var weapon = WeaponType.Sword;
//like arrays, enums start at 0, but that starting index can be assigned a different number
var CardType;
(function (CardType) {
    CardType[CardType["Ace"] = 1] = "Ace";
    CardType[CardType["Two"] = 2] = "Two";
    CardType[CardType["Three"] = 3] = "Three";
    CardType[CardType["Four"] = 4] = "Four";
})(CardType || (CardType = {}));
var cardType = CardType[2];
console.log(cardType);
//UNION TYPES:
//union types allow us to have more flexibility with our variables but still keep the intent of declaring a specific type for our variables
var x;
var y;
//the above code allows x to be either a number or a string
x = '1234';
x = 1234;
//# sourceMappingURL=01-types.js.map