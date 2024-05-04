{
    // Generic Data Type

const numArray: Array<number> = [1,5,9,8]
const strArray : Array<string> = ['rohim', 'Korim', 'Jobbar']
const boolArray : Array<boolean> = [true, false, true]


// ReUsable Generic Type in Premetive Data Type
type GenericType<T> = Array<T>

const mentor: GenericType<string> = ['rohim', 'korim', 'jobbar']
const roll : GenericType<number> = [1,2,3,4,5,6,7,8,9,10]


// ReUsable Generic Type in Array of Object
const user : GenericType<{name: string, id: number}> = [
    {name: 'rohim', id: 1},
    {name: 'korim', id: 2},
    {name: 'jobbar', id: 3} 
]



// Generic Tuple 
type GenericTuple<X, Y> = [X, Y]
const relation: GenericTuple<string, number> = ['rohim', 1]

const user2 : GenericTuple< number, {name: string, id: number}> = [
  54257,
 {
 name: 'rohim',
 id: 1
  }
]








}





