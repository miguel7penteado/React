# Criando uma aplicação Olha Mundo


## 1 Tenha o create-react-app instalado na versão 1.0.14

Instale globalmente o **create-react-app** na versão **1.0.14**

```bash

npm i -g create-react-app@1.4.1

```

Agora escolha uma das 3 ferramentas, **npx**, **npm** ou **yarn** 
(a que você tiver instalada) para criar seu projeto olha-mundo:

```bash
# Se você usa a ferramenta npx (npm 5.2+)
npx create-react-app olha-mundo --scripts-version=1.0.14

# Se você usa a ferramenta npm (npm 6+)
npm init react-app olha-mundo --scripts-version=1.0.14

# Se você usa a ferramenta  yarn (yarn 0.25+)
yarn create react-app olha-mundo --scripts-version=1.0.14
```

entre dentro do diretório de sua aplicação **ola-mundo**
```bash
cd ola-mundo
```

## Criando componentes:
Criaremos uma pasta para criar os arquivos javascript que serão os 
componentes importados para a aplicação. Essa pasta será a pasta
**src/componentes**

```bash
mkdir src/componentes
```

### O componente **Cabeçalho**

Crie o arquivo **cabeçalho.js** dentro da pasta **src/componentes**.
Coloque nete o seguinte conteúdo:
```javascript
import React from 'react';

const Cabeçalho = () => (
    <header>
        <h1>Meu projeto React em ES6</h1>
    </header>
);

export default Cabeçalho;
```
### O componente **Rodapé**

Crie o arquivo **rodapé.js** dentro da pasta **src/componentes**.
Coloque nete o seguinte conteúdo:
```javascript
import React from 'react';

const Rodapé = () => (
    <footer>
        <p>&copy; 2019</p>
    </footer>
);

export default Rodapé;
```

### Colocando os componentes na aplicação **App.js**

Deixe o seu arquivo **src/App.js** com o seguinte código:

```javascript
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
```

## Rode sua aplicação:

```bash
cd olha-mundo
yarn start
```
Será carregado o navegador ouvindo na porta **3000**

