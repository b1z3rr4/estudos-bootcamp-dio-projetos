import React, { Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component {

    constructor(props){
        super(props);

        this.state= {
            clock: 1000,
            copo: 'agua'
        }
    }

    componentDidMount(){
        window.setTimeout(() => {
            this.setState({
                copo: 'suco'
            })
        }, 4000)
    }

    alterarCopo = () => {
        this.setState({
            copo: 'refrigerante'
        })
    }

    render(){

        const {clock, copo} = this.state;

        return (
            <div>
                <h1>{clock}</h1>
                <button onClick={() => this.alterarCopo()}>{copo}</button>
            </div>
        );
    }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);