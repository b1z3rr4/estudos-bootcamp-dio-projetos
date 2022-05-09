import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css"
import Button from './Button';


//para colocar componentes dentro de outro componente, temos que usar o porps.children
const name = 'Natalia';

function soma(a, b){
  alert(a + b);
}

function App() {

  return (
    <div className="title">Olá, {name}
    <Button onClick={() => soma(10, 20)} name='Clique aqui'/>
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);