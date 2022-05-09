var myInputTextPrincipal = document.getElementById('inputPrincipal'),
    myInputDatePrincipal = document.getElementById('inputDatePrincipal'),
    myButtonAdd = document.getElementById('add'),
    myButtonClean = document.getElementById('clean'),
    myButtonEdit = document.getElementById('buttonEdit'),
    myButtonDelete = document.getElementById('buttonDelete'),
    myButtonConcluded = document.getElementById('buttonConcluded'),
    myUlPrincipal = document.getElementById('ulPrincipal'),
    myErrorFi = document.getElementById('forErrorFI'),
    myErrorSi = document.getElementById('forErrorSI'),
    html = '',
    bloqEdit = 0;



function add(){
  if(myInputTextPrincipal.value != ''){
    if(myInputDatePrincipal.value != ''){
      if(bloqEdit == 0){
        html = `<li class="li-tasks gridTasksBody">
        <div class="checkbox"><input type="checkbox"/></div>
        <div class="title-task">${myInputTextPrincipal.value}</div>
        <div class="date-task">${myInputDatePrincipal.value}</div></li>`;
    myUlPrincipal.innerHTML += html;
    myInputTextPrincipal.value = '';
    myInputDatePrincipal.value = '';
      } else{
        myErrorFi.innerHTML = '<small>Por favor, finalize sua edição primeiro.</small>'
    setTimeout(()=> {
      myErrorFi.innerHTML = '';
    }, 5000);
      }
    } else{
      myErrorFi.innerHTML = '<small>Por favor, dê um prazo a sua tarefa.</small>'
    setTimeout(()=> {
      myErrorFi.innerHTML = '';
    }, 5000);
    }
  }else {
    myErrorFi.innerHTML = '<small>Por favor, dê um nome a sua tarefa.</small>'
    setTimeout(()=> {
      myErrorFi.innerHTML = '';
    }, 5000);
  }
}

function clean(){
  if(myInputTextPrincipal.value != '' || myInputDatePrincipal.value != ''){
    myInputTextPrincipal.value = '';
    myInputDatePrincipal.value = '';
  }
}

function edit(){
  myChecks = document.querySelectorAll(':checked')

    Object.keys(myChecks).forEach((item) => {
      myDiv = myChecks[item].parentElement;
      divText = myDiv.nextElementSibling;
      divDate = divText.nextElementSibling;
      
      divText.innerHTML = `<div class="title-task"><input class="inputEdit" type="text" value="${divText.innerText}"/></div>`
  
      divDate.innerHTML = `<div class="date-task"><input class="inputEdit" type="date" value="${divDate.innerText}"/></div>`

        bloqEdit = 1;
    });
}

function saveEdit(){
  myChecks = document.querySelectorAll(':checked')
  
  Object.keys(myChecks).forEach((item) => {
      myDiv = myChecks[item].parentElement;
      divText = myDiv.nextElementSibling;
      divDate = divText.nextElementSibling;
      myInputText = divText.querySelector('input'); 
      myInputDate = divDate.querySelector('input');

    
    divText.innerHTML = `<div class="title-task">${myInputText.value}</div>`
       divDate.innerHTML = `<div class="date-task">${myInputDate.value}</div>`

    bloqEdit = 0;
  });
}


function deleteCheck(){
  myChecks = document.querySelectorAll(':checked')
  
  Object.keys(myChecks).forEach((item) => {
      myDiv = myChecks[item].parentElement;
      myLi = myDiv.parentElement;
      myLi.remove();
  });
}