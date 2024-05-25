// Part 1: Employee Data
// Challenge:
// 1. Design a type alias named Employee to represent an employee object with properties like
// name (string), department (string), and role (string).
// 2. Include an optional nested object named contact to hold phone and email information (if
// provided).
// 3. Employ a union type for the role property to restrict it to "Manager", "Engineer", or
// "Intern".
// 4. Make the skills property an optional array of strings for listing an employee's skills (if any).
var car = {
    name: "Toyota",
    year: 2024,
    engine: {
        horsePower: 200,
    },
    getHorsePower: function () {
        return car.engine.horsePower;
    }
};
console.log(car.getHorsePower());
var tShirt = {
    name: "tShirt",
    price: 1000,
    color: "White",
    inventory: {
        stock: 10,
        colorOption: ["red", "blue", "black"],
        changeColor: function (newColor) {
            if (newColor === "red") {
                tShirt.price *= 1.1;
            }
            else if (newColor === "blue") {
                tShirt.price *= 0.95;
            }
            tShirt.color = newColor;
        }
    }
};
tShirt.inventory.changeColor("red");
console.log(tShirt.price);
console.log(tShirt.color);
