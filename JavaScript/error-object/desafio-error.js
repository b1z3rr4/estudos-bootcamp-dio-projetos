function validaArray (arr, num){

    try{
        if(!arr && !num) throw new ReferenceError('Envie os parâmetros');

        if(typeof arr !== 'object') throw new TypeError('O Array precisa ser do tipo object');
    
        if(typeof num !== 'number') throw new TypeError('O numero precisa ser do tipo number');
    
        if(arr.legth !== num) throw new RangeError('Tamanho é invalido')

    } 
    catch(e){
        if(e instanceof ReferenceError){
            console.log("Esse erro é um ReferenceError")
            throw e;
        }else if(e instanceof TypeError){
            console.log("Esse erro é um TypeError")
            throw e;
        } else if(e instanceof RangeError){
            console.log("Esse erro é um RangeError")
            throw e;
        } else {
            console.log("Tipo de erro não esperado: ", e);
        }
    }

}