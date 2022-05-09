//Primeiro desafio ver easy

function isPalindromo(word){
    var is;
    
    for (i = 0; i < word.length; i++){
      if(word.split('')[i] === word.split('').reverse()[i]){
        is = true;
      } else {
        is = false;
        break;
      }
    }
  
    if(is){
      console.log("É palindromo")
    } else {
      console.log("Não é palindromo")
    }
  }
  
  isPalindromo("hannah");
  
  
  //Primeiro desafio ver hard
  
  function isPalindromoText(text){
    var is;
    
    for (i = 0; i < text.split('').filter((item) => item !== ' ').length; i++){
      if(text.split('').filter((item) => item !== ' ')[i] === text.split('').filter((item) => item !== ' ').reverse()[i]){
        is = true;
      } else {
        is = false;
        break;
      }
    }
  
    if(is){
      console.log("É palindromo")
    } else {
      console.log("Não é palindromo")
    }
  }
  
  isPalindromoText('roma me tem amor')