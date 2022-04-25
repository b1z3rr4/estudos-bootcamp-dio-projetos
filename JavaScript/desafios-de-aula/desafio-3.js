// Desafio 3

function trocaNumPar(array){
    if(!array){return -1;};
  
    for(i = 0; i < array.length; i++){
      if(array[i] % 2 === 0){
        array[i] = 0;
      }
    }
    return array;
  }
  
  var array = [1,2,3,4,5,6,7,8,9,0];
  
  console.log(trocaNumPar(array))