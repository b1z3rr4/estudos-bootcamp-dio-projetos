function calculaIdade(anos){
    return `Daqui ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`
  }
  
  var arrayDeObj = [
    {
      nome: 'Natalia',
      idade: 21
    },
    {
      nome: 'Lorenzo',
      idade: 9
    },
    {
      nome: 'Bruna',
      idade: 17
    }
  ]
  
  var array = [20, 30]
  
  console.log(calculaIdade.call(arrayDeObj[2], 20));
  console.log(calculaIdade.apply(arrayDeObj[0], array));