{

    // Inheritence OOP

    class Person {
        name: string;
        age: number;
        address: string;

        constructor(name: string, age: number, address: string){
            this.name = name;
            this.age = age ;
            this.address = address;
        }


        // method
        makeSleef(numberOfHour: number){
            console.log(`the ${this.name} is sleeping ${numberOfHour} hours`); 
        }
    }





    class Student extends Person {
        
        constructor(name: string, age: number, address: string){
            super(name, age, address)
        }

    }


    class Teacher extends Person {
        designation: string;

        constructor(name: string, age: number, address: string, desiction: string){
            super(name, age, address)
            this.designation = desiction;
        }


        // method

        makeClass(numberOfHour: number){
            console.log(`the ${this.name} is make ${numberOfHour} classes`); 
        }

    }

    const student1 = new Student("rahim", 23, "dhaka");
    student1.makeSleef(3);

    const teacher1 = new Teacher("sakib", 23, "dhaka", "sweeper");
    teacher1.makeClass(3);







}