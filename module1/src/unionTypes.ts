{

    type FrontEndDeveloper = {
        name: string,
        skills : string[],
        role: "Front End Developer" | "Pakibaz Developer"
    
    }
    
    type BackEndDeveloper = {
        name: string,
        skills : string[],
        role: "Back End Developer" | "Pakibaz Developer"
    
    }


    const frontEndDeveloper: FrontEndDeveloper = {
        name: 'Md. Akramul Hoque',
        skills: ['HTML', 'CSS', 'JavaScript'],
        role: 'Pakibaz Developer'
    }


    const backEndDeveloper: BackEndDeveloper = {
        name: 'Md. Akramul Hoque',
        skills: ['HTML', 'CSS', 'JavaScript'],
        role: 'Back End Developer'
    }
}