// Learning Function 
// Normal Function 
// Arrow Function 

function add(num1: number , num2:number): number {

    return num1 + num2;
}



// Arrow Function
const addArrow = (num1: number, num2: number):number =>{

    return num1 + num2

}




// Type use in method 
const poorUser = {
    name: 'Md Akramul Hoque ',
    balance : 0,
    addBalance(balance:number):string{
       return `My new Balance is ${this.balance + balance}` 
    }
}





// Type use in Array 

const array: number[] = [2,5,2,6,5,6,4]

const newArr: number[] = array.map((elem:number): number => elem * elem)






// func Call
add(10, 20);
addArrow(10, 20);           