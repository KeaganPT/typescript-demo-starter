function addNumbers(numOne, numTwo) {
    return numOne + numTwo;
}
// works
addNumbers(1, 2);
//Errors
//addNumbers(1,2,3);
//addNumbers(1,2,3,"Foo")
function fullName(firstName, lastName) {
    console.log(firstName + ' ' + lastName);
}
fullName('Keagan', 'Talbot');
function sayHello(name) {
    return name;
}
sayHello("Kenn");
function Auth(username, pass) {
    if (username === 'elevenfiftyuser') {
        if (pass === 'Letmein1234!') {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return false;
    }
}
// OPTIONALS //
//optionals allow felxibility in the paramaters. using optionals an argument can be left out if needed. optionals are declared using a question mark after them.
function addNumbersWithOptional(numOne, numTwo, someString) {
    console.log(someString);
    return numOne + numTwo;
}
addNumbersWithOptional(1, 2);
addNumbersWithOptional(1, 2, 'This is optional');
//! OPTIONAL PARAMS MUST GO AFTER REQUIRED PARAMS
function fullNameOptional(firstName, lastName, middleName) {
    if (middleName === undefined) {
        return firstName + lastName;
    }
    else {
        return firstName + middleName + lastName;
    }
}
console.log(fullNameOptional('Keagan', 'Talbot', 'Pierce'));
console.log(fullNameOptional('Keagan', 'Talbot'));
//# sourceMappingURL=02-functions.js.map