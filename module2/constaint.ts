{


    const addCourseToStudent = <T extends {name: string, id: number}>(student: T)=>{

        const course = 'Angular'
        return{
            ...student,
            course
        }
    }

    const student1 = addCourseToStudent({
        name: 'rohim',
        id: 1,
        wmni: true
    })







}