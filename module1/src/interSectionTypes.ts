{
    type FrontEndDeveloper ={
        name: string,
        skills : string[],
        role: "Front End Developer"
    }

    type BackEndDeveloper ={
        name: string,
        skills : string[],
        role2: "Back End Developer"
    }


    // InterSection Types
    type FullStackDeveloper = FrontEndDeveloper & BackEndDeveloper

    const fullStackDeveloper: FullStackDeveloper = {
        name: 'Md. Akramul Hoque',
        skills: ['HTML', 'CSS', 'JavaScript'],
        role: 'Front End Developer',
        role2: 'Back End Developer'
    }
}