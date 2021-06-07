function add(number1, number2) {
    return number1 + number2;
}
console.log(add(2, 2));
console.log(add(2, 7));
var myArr = new Array(100, 200, 300, 400);
for (var i = 0; i < myArr.length; i++) {
    console.log(myArr[i]);
}
function calc_discount(price, rate) {
    if (rate === void 0) { rate = 0.50; }
    var discount = price * rate;
    console.log("Discount Amount: " + " " + discount);
}
calc_discount(1000);
calc_discount(1000, 0.30);
var Car = /** @class */ (function () {
    function Car(model, doors, isElectric) {
        this.model = model;
        this.doors = doors;
        this.isElectric = isElectric;
    }
    Car.prototype.displayMake = function () {
        console.log("This car is " + this.model + " and " + this.doors + " doors and Electric is " + this.isElectric + ".");
    };
    return Car;
}());
var BMW = new Car("BMWi8", 4, true);
var Ferrari = new Car("Ferrari", 2, true);
var Lambo = new Car("Lambo", 2, true);
BMW.displayMake();
Ferrari.displayMake();
Lambo.displayMake();
var myCar = {
    model: 'BMW',
    make: 'BMWi8',
    display: function () { }
};
{
    console.log("This is " + myCar.make + " Created by " + myCar.make);
}
