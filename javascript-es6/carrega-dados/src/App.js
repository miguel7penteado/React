import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Cabeçalho from './componentes/cabeçalho';
import Rodapé    from './componentes/rodapé';
import Contato   from './componentes/contato';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Cabeçalho />
        <Contato />
        <Rodapé />
      </div>
    );
  }
}

export default App;
