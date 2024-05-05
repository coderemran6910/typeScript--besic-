{


    const createPromise = () => {
       return  promise = new Promise((resolve, reject)=>{
            const data:string = "hello World"
            if(data){
                resolve(data)
            }else{
                reject("error")
            }
        })
    }













}

