function alunosAprovados(arr, media = 7){
    var arrayApv = [];
    for(var i = 0; i < arr.length; i++){
  
      const {nome, nota} = arr[i];
      
      if(nota >= media){
        arrayApv.push(nome);
      }
    }
    return arrayApv
  }
  
  var array = [
    {nome: 'natalia',nota: 10},
    {nome: 'joao',nota: 9},
    {nome: 'Bruna', nota: 7},
    {nome: 'Pamela', nota: 5}
  ];
  
  console.log(alunosAprovados(array, 5));
  //console.log(array[0].nome)