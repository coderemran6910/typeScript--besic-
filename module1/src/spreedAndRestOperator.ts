{

    // Spread Operator
    // rest Operator
    // destructuring 

    
// TypeScript in spread operator
const friendList1: string[] = ['Rohim', 'Karim', 'Kamal', 'Nahid'];
const friendList2: string[] = ['Jamal', 'Raihan', 'Faruk', 'Rabbil '];

const friendList3 = friendList1.push(...friendList2);


// typeScript in rest operator
const friends = (...friends: string[]): string[] => {

    return friends
}




}