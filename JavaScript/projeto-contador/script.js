var numberHTML = document.getElementById('number');
var number = 0;

function increment(){
  if(number > -2){
    valorPositivo();
  }
  if(number <10){
    number = number + 1;
    numberHTML.innerHTML = number;
  }
}

function decrement(){
  if(number < 1 && number != -1){
    valorNegativo();
  }
  if(number > -10){
    number = number - 1;
    numberHTML.innerHTML = number;
  }
}

function valorNegativo(){
  numberHTML.style.color = '#fa0000';
}

function valorPositivo(){
  numberHTML.style.color = '#000';
}