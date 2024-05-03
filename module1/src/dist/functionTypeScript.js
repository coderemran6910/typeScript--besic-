"use strict";
// Learning Function 
// Normal Function 
// Arrow Function 
function add(num1, num2) {
    return num1 + num2;
}
// Arrow Function
const addArrow = (num1, num2) => {
    return num1 + num2;
};
// Type use in method 
const poorUser = {
    name: 'Md Akramul Hoque ',
    balance: 0,
    addBalance(balance) {
        return `My new Balance is ${this.balance + balance}`;
    }
};
// Type use in Array 
const array = [2, 5, 2, 6, 5, 6, 4];
const newArr = array.map((elem) => elem * elem);
// func Call
add(10, 20);
addArrow(10, 20);
