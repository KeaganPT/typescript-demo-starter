//first rule of interfaces: you can't instantiate them. the following would throw err
// let a: Animal = new Animal();
//interfaces are used to shape objects not create them.
//we impose an interface on an object or class to dictate certain aspects of how that object should be shaped
var lassie = {
    name: 'Lassie',
    numberOfLegs: 4
};
var Apples = /** @class */ (function () {
    function Apples() {
    }
    Apples.prototype.setTimeOfPurchase = function (d) {
        console.log("Apples purchased on ", d);
    };
    return Apples;
}());
var myApples = new Apples();
myApples.setTimeOfPurchase(new Date(Date.now()));
//# sourceMappingURL=04-interfaces.js.map