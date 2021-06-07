function add(number1: number, number2: number) {
    return number1 + number2;
}

console.log(add(2, 2));
console.log(add(2, 7));

var myArr: number[] = new Array(100, 200, 300, 400);

for (var i = 0; i < myArr.length; i++) {
    console.log(myArr[i])
}

function calc_discount(price: number, rate: number = 0.50) {
    var discount = price * rate;
    console.log("Discount Amount: " + " " + discount);
}

calc_discount(1000);
calc_discount(1000, 0.30);

class Car {
    model: String;
    doors: Number;
    isElectric: Boolean;

    constructor(model: String, doors: Number, isElectric: Boolean) {
        this.model = model;
        this.doors = doors;
        this.isElectric = isElectric;
    }

    displayMake(): void {
        console.log(`This car is ${this.model} and ${this.doors} doors and Electric is ${this.isElectric}.`);
    }
}

const BMW = new Car("BMWi8", 4, true);
const Ferrari = new Car("Ferrari", 2, true);
const Lambo = new Car("Lambo", 2, true);
BMW.displayMake();
Ferrari.displayMake();
Lambo.displayMake();

interface ICar {
    model: String,
    make: String,
    display(): void
}

const myCar: ICar = {
    model: 'BMW',
    make: 'BMWi8',
    display() => {
    console.log(`This is ${myCar.make} Created by ${myCar.make}`);
}
}