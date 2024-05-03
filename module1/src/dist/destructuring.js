"use strict";
{
    // Object Destructuring
    const friendsDetails = {
        name: 'Md. Akramul Hoque',
        age: 21,
        address: 'Dhaka',
        education: 'Masters',
        phone: '0170000000',
        likes: {
            food: 'Rice',
            color: 'Blue',
            car: 'BMW'
        }
    };
    const { name, likes: { food: Food, color, car } } = friendsDetails;
    // Arry Destructuring
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    // Need access 4
    // const [, , , fourth] = arr;
    const [, , , fourth, ...bakiNumber] = arr;
}
