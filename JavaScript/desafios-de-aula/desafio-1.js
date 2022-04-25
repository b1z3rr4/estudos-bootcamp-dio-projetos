var num1 = 5, num2 = 15, soma = num1 + num2;

function isEqual(){
  let textTrue = "Os numeros são iguais.";
  let textFalse = "Os numeros não são iguais.";
  
  return (num1 === num2) ? textTrue : textFalse;
}

function isTallerThan10(){
  let textTrue = "A soma é maior que 10";
  let textFalse = "A soma não é maior que 10";
  
  return (soma > 10) ? textTrue : textFalse;
}

function isTallerThan20(){
  let textTrue = "e é maior que 20.";
  let textFalse = "e não é maior que 20.";
  
  return (soma > 20) ? textTrue : textFalse;
}

console.log("Os numeros são: ", num1," e ",num2,".",
  isEqual(), 
  isTallerThan10(), 
  isTallerThan20());