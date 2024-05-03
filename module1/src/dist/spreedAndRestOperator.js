"use strict";
{
    // Spread Operator
    // rest Operator
    // destructuring 
    // TypeScript in spread operator
    const friendList1 = ['Rohim', 'Karim', 'Kamal', 'Nahid'];
    const friendList2 = ['Jamal', 'Raihan', 'Faruk', 'Rabbil '];
    const friendList3 = friendList1.push(...friendList2);
    // typeScript in rest operator
    const friends = (...friends) => {
        return friends;
    };
}
