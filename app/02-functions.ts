function addNumbers(numOne: number, numTwo: number) {
    return numOne + numTwo;
}

// works
addNumbers(1,2);

//Errors
//addNumbers(1,2,3);
//addNumbers(1,2,3,"Foo")

function fullName(firstName: string, lastName: string) {
    console.log(firstName + ' ' + lastName)
}

fullName('Keagan','Talbot')

function sayHello(name: string) : string {
    return name;
}

sayHello("Kenn");

function Auth(username: string, pass: string) : boolean {
    if(username === 'elevenfiftyuser'){
        if(pass === 'Letmein1234!'){
            return true
        } else {
            return false
        }
    } else{
        return false
    }
}

// OPTIONALS //

//optionals allow felxibility in the paramaters. using optionals an argument can be left out if needed. optionals are declared using a question mark after them.

function addNumbersWithOptional(numOne: number, numTwo: number, someString?: string){
    console.log(someString);
    return numOne+numTwo;
}

addNumbersWithOptional(1,2)
addNumbersWithOptional(1,2, 'This is optional');

//! OPTIONAL PARAMS MUST GO AFTER REQUIRED PARAMS

function fullNameOptional(firstName: string, lastName: string, middleName?: string){
    if(middleName === undefined){
        return firstName + lastName
    } else {
        return firstName + middleName + lastName
    }
}

console.log(fullNameOptional('Keagan','Talbot','Pierce'))
console.log(fullNameOptional('Keagan','Talbot'))