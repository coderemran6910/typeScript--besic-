{
    
    // Type Alias in Object  
type UserType = {
    name: string,
    age: number,
    address: string
    
}

const user1: UserType = {
    name: 'Md. Akramul Hoque',
    age: 21,
    address: 'Dhaka'
}

const user2: UserType ={
    name: 'Md. Akramul Hoque',
    age: 21,
    address: 'Dhaka'

}

type NameType = string
const name: NameType = 'Md. Akramul Hoque'; //String type alias

type AgeType = number
const age: AgeType = 21 //Number type alias

type IsAdmin = boolean
const isAdmin: IsAdmin = true //Boolean type alias



// TypeScript Function Alias 

type AddType = (num1: number, num2:number)=> number
const add: AddType = (num1, num2) => num1 + num2 






}