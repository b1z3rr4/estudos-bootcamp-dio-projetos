var array = [1, 2, 3, 4];

console.log(array.map((numero) => numero * 2));

//Usando o thisArgs no map 

const five = {
  value: 5
}

const seven = {
  value: 7
}

function mapComThis(array, thisArgs){
  return array.map(function(item){ return item * this.value}, thisArgs);
}
var array = [2, 3, 6]
console.log(mapComThis(array, five));


//filter

var array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function numsPares(arr){
  return arr.filter((num) => num % 2 === 0);
}

console.log(numsPares(array));


//reduce

var array = [1, 3];

function somarArray(arr){
  return arr.reduce((soma, item) => soma + item);
}

console.log(somarArray(array));

//o reduce tem o initialValue que é o valor inicial da soma caso vc queira usar

var precos = [2.49, 3.58, 23.57, 30.76]

function calculaCompra(arr, saldo){
  return arr.reduce((total, item) => total - item, saldo)
}

console.log(calculaCompra(precos, 70))
