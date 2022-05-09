var usuarios = new Map();

usuarios.set('fulano', 'admin');
usuarios.set('ciclano', 'admin');
usuarios.set('beltrano', 'user');

usuarios.delete('admin')

function getAdmin(map){
  var adms = [];
  for(let item of map){
    if(item[1] == 'admin'){
      adms.push(item[0])
    }
  }
 return adms;
}
//map tem set, get e delete
//set tem add has e delete e o size que é para verificar o tamanho
console.log(getAdmin(usuarios));

var array = [20, 30, 40, 20, 5, 7, 5, 9, 30]

function numOnly(array){
  var mySet =  new Set(array);
  return [...mySet];
}

console.log(numOnly(array));
