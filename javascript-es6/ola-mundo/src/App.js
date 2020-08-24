import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Cabeçalho from './componentes/cabeçalho';
import Rodapé    from './componentes/rodapé'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Cabeçalho />
        <Rodapé />
      </div>
    );
  }
}

export default App;
