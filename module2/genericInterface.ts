{

    interface Developer<T> {
        name: string;
        skill: {
            html: string,
            css: string 
        },
        computer : {
            name: string ,
            brand : string
        },
        address : T
    }


    type Developer1Address = {
        village: string,
        dist: string,
        post: number
    }

    const developer1: Developer<DeveloperAddress> = {

        name: 'rohim',
        skill: {
            html: '5',
            css: '10'
        },
        computer: {
            name: 'asus',
            brand: 'asus'
        },
        address: {
            village: 'gulshan',
            dist: 'dhaka',
            post: 1212
        }
    }


    type Developer2Addaress = {
        village : string,
        dist : string,
        post : number,
        city : string,
        country : string
    }

    const developer2: Developer<Developer2Addaress> = {

        name: 'rohim',
        skill: {
            html: '5',
            css: '10'
        },
        computer: {
            name: 'asus',
            brand: 'asus'
        },
        address: {
            village: 'gulshan',
            dist: 'dhaka',
            post: 1212,
            city: 'dhaka',
            country : 'bangladesh'
        }
    }


}