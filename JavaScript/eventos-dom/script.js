function changeMode(){
    changeClasses();
    changeText();
  }
  
  function changeClasses(){
    button.classList.toggle('dark-mode-button');
    title.classList.toggle('dark-mode-h1');
    body.classList.toggle('dark-mode-body');
    footer.classList.toggle('dark-mode-footer');
  }
  
  function changeText(){
    const light = "Light Mode";
    const dark = "Dark Mode";
  
    if(body.classList.contains('dark-mode-body')){
      button.innerHTML = light;
      title.innerHTML = dark + " ON";
      return;
    }
  
    if(!body.classList.contains('dark-mode-body')){
      button.innerHTML = dark;
      title.innerHTML = light + " ON";
      return;
    }
  }
  
  const button = document.getElementById('button');
  const title = document.getElementById('title');
  const body = document.getElementsByTagName('body')[0];
  const footer = document.getElementsByTagName('footer')[0];
  
  
  button.addEventListener('click', changeMode);