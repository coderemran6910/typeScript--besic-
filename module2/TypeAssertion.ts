{
    // Type AsserTion 

    const kgToGm =(value: number | string | undefined)=>{

        if( typeof value === "string"){
            const convertedNumber = parseFloat(value);
            return `Converted Number is ${ convertedNumber * 1000} gm`
        }else if(typeof value === "number"){
            return value * 1000;
        }
    }

   const result = kgToGm(3) as number;
   const result2 = kgToGm('3') as string;
   console.log(result);
   
}