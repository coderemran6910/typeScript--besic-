{

// Pick Type
    type Person = {
        name: string;
        age: number;
        address: string;
        salary: number;
    }

    type Person2 = Pick<Person, "name" |"age">


    // Omit Type
    type person2 = Omit<Person, "address" | "salary">


    // Required Type
    type person3 = Required<Person>

    // Pertial Type
    type person4 = Partial<Person>



type readonlyPerson = Readonly<Person>
    const person5: readonlyPerson =  {
        name: "sakib",
        age: 23,
        address: "dhaka",
        salary: 200
    }

    // person5.name = "sakibur Rahman" // change name of person5 object








}