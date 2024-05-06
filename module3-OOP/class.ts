{



    class Animal  {
        // name: string;  // Class Property
        // age: number;  //Class Property
        // sound : string; // Class Property
    
    
        constructor( public name: string, public age: number, public sound: string){} // public is Parameter propertyes

        // When write a function in class this is called method 
        makeSound(){
            console.log(`the ${this.name} is making ${this.sound}`);
            
        }
    
    }
    
    // create object with Animal Class

    const cat = new Animal("cat", 2, "meow");
    const dog = new Animal("dog", 3 , "Gew Gew ")

    dog.makeSound();

    


}