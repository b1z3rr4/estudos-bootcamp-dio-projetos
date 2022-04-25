var text = document.getElementsByClassName('text-input')[0],
    divList = document.getElementsByClassName('list-tasks')[0];

function add(){
  htmlText = `<div class="item-list">
  <input type="checkbox" class="checkbox-input" />
  <span class="text-list">${text.value}</span>
</div>`;

  if(text.value != ""){
    divList.innerHTML += htmlText;
    text.value = "";
  }
}
