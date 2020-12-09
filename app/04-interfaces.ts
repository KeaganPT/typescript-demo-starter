interface Animal {
    name: string;
    numberOfLegs: number;
}
//first rule of interfaces: you can't instantiate them. the following would throw err
// let a: Animal = new Animal();

//interfaces are used to shape objects not create them.
//we impose an interface on an object or class to dictate certain aspects of how that object should be shaped

let lassie: Animal = {
    name: 'Lassie',
    numberOfLegs: 4
}

interface Product {
    name: string;
    price: number;

    setTimeOfPurchase(d: Date);
}

class Apples implements Product {
    name: 'Apples';
    price: 5.50;

    setTimeOfPurchase(d: Date) {
        console.log("Apples purchased on ", d)
    }
}

let myApples: Apples = new Apples();
myApples.setTimeOfPurchase(new Date(Date.now()));