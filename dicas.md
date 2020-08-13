# Configurando ambiente
Para usar o create-react-app você precisa ter o Node e o NPM instalado na sua máquina.

# JSX e Babel
*JSX* é um JavaScript extendido, que suporta tags de XML. É mais fácil do que escrever JavaScript ao natural.
É preciso usar um transpilador como o Babel para ler a sintaxe mais nova e converter para a padrão dos navegadores.
Plugins do Babel como React Extension Converter e ES2015 Converter, interpretam o JSX e o converte para JavaScript entendível pelo navegador.
Por exemplo, import e class são sintaxes do ES2015 que precisam ser transpiladas.

# Webpack
É um agrupador de módulos, como o Browserify.
Permite gerar um agrupamento, compilando seus ativos dentro de um único arquivo.
Por exemplo, converte CSS, SVG em um JS, e 
os insere dentro do seu arquivo HTML.

# Usando CSS
## Pure.css

Podemos usar o Pure.css, uma biblioteca compacta com grades, botões e outros 
elementos prontos. Quem importa o estilo CSS dentro do React é o empacotador Webpack.
Lembrando que toda tag em JSX precisa ser fechada:

```html
<img src={caminho_da_imagem} alt={Nome_Da_Imagem} />
```

A palavra `class` é reservada no ES6, então você deve usar `className` :

```html
<img src={caminho_da_imagem} className={Nome_Da_Imagem} />
```

# Comentários
 Como é um comentário de código

```javascript 
{/* seu comentário vai aqui */}
```

# Importando Componentes

```javascript
import React, { Component } from 'react';
```

Ao importar o `React` é um módulo default de `react`, e o `Component` dentro das chaves é algo a mais que você deseja importar.

# Classes
Você pode criar uma classe para definir seu componente, e ela ser uma extensão do `Component` puro do React.


# Sem JSX

```javascript
const Menu = React.createClass({
  render(){
    return()
  }
});
export default Menu;
```

# Com JSX

```javascript
class Menu extends Component{
  render(){
    return()
  }
}
export default Menu;
```

# Render
É na função `render(){}` que tudo acontece. Pode ser escrita também como `render: function(){}` .
Dentro do Render tudo que deve aparecer vai dentro do `return()` .

# ReactDOM Render
Com o *ReactDOM.render* você renderiza os componentes importados criados em classes exportadas:

# Sem JSX

```javascript
import Menu from './Menu';
ReactDOM.render( React.createElement(Menu) );
```

# Com JSX

```javascript
import Menu from './Menu';
ReactDOM.render( <Menu/> );
```

# Orientação a Objetos no React
> Comportamento + Estado

# Estado dos Componentes
Você só pode guardar estado no React na variável que ele te traz chamada
* `state`
Você usa um construtor do ES6, para definir o estado inicial do componente.

# Construtor
No seu construtor você deve inicializar o estado das coisas. 
Para usar o `this` no seu construtor, primeiro você precisa chamar `super()`.
Depois você atribui seu JSON ao estado desse `this`.
No nosso caso, o JSON inicial será um objeto vazio:


```javascript
constructor()
{
  super();
  this.state = {};
}
```

# Atribuindo uma lista ao estado inicial
Se você quiser atribuir uma lista ao estado inicial do seu componente,
dentro da lista, crie seu objeto:

```javascript
this.state = 
{
  lista : [ {nome: 'miguel', email: 'eu@miguelpenteado.com.br'} ] 
}
```

# Utilizando código dinâmico
Para renderizar seu código dinâmico dentro do seu componente, utiliza as chaves `{ ... }` .

```javascript
<tbody>
  { this.state.lista }
</tbody>
```

Para mapear o array da sua lista, utilize a função map do ES6:

```javascript
<tbody>
  { 
    this.state.lista.map(function(obj){
      return (
        <tr>
          <td>{obj.nome}</td>
          <td>{obj.email}</td>
        </tr>
      );
    })
  }
</tbody>
```

# Utilizando jQuery para fazer requisições XHR

```bash
npm install jquery --save
```

No código:

```javascript
import $ from 'jquery';
```

#Atualização do estado dos componentes
Algumas funções do React facilitam identificar quando o estado deve ser alterado.

## `componentDidMount()`
Logo após o `render` ser executado, significa que o componente acabou de ser montado, esta função será executada. Você pode usá-la logo após o construtor:

```javascript
componentDidMount(){ 
  $.ajax({
    ... sua função ajax
  });
}
```

## `componentWillMount()`
Logo antes do `render` ser executado, significa que o componente ainda será montado, e esta função será executada antes.

> O ideal é que toda vez que o state mudar, o render() execute novamente.

## setState
Toda vez que você quiser alterar o estado de um componente, utilize setState . Porém, ao usá-lo dentro do jQuery, você precisa fazer um bind() informando que o this é referente ao React, e não o this do jQuery:

```javascript
componentDidMount(){ 
  $.ajax({
    url:"http://cdc-react.herokuapp.com/api/autores",
    dataType: 'json',
    success: function(response){
      this.setState({lista:reponse});
    }.bind(this)
  });
}
```

No exemplo acima, a cada vez que você fizer uma requisição, e ela retornar uma resposta com sucesso, "defina o novo estado" ( setState ) com a resposta da sua requisição ajax.

# Ciclo de Vida do DOM

Adicionar propriedades key aos seus elementos ajuda o React a entender quais partes ele deve renderizar toda vez que você atualizar o estado:


```javascript
<tbody>
  { 
    this.state.lista.map(function(obj){
      return (
        <tr key={obj.id}>
          <td>{obj.nome}</td>
          <td>{obj.email}</td>
        </tr>
      );
    })
  }
</tbody>
```

> Você não altera seu componente. Você apenas atualiza o estado.

# Eventos
O React traz eventos próprios que serão mapeados depois de compilados para eventos do DOM, são os SyntheticEvents - eventos do React que mapeiam para eventos reais:

## `onSubmit`

```javascript
<form onSubmit={this.enviaForm} method="post">...</form>
```

## `onChange`

```javascript
<Input id="id" 
       type="email" 
	   name="email" 
	   value={this.state.email} 
	   onChange={this.setEmail} 
	   label="email" 
/>
```

# Função — Enviar dados de um formulário disparado por um evento
Um exemplo de como declarar a função disparada pelo evento para enviar um formulário, usando XHR Ajax com jQuery, prevenindo bubbling e usando JSON.stringify para enviar os dados através de um formulário:

```javascript
enviaForm(evento){
    evento.preventDefault();
    $.ajax({
      url:'yourapi.com',
      contentType:'application/json',
      dataType:'json',
      type:'post',
      data: JSON.stringify({nome:''}),
      success: function(resposta){
        console.log(resposta);
      },
      error: function(resposta){
        console.log(resposta);
      }
    });
  }
```

No construtor, lembre-se de fazer o bind do this :

```javascript
this.enviaForm = this.enviaForm.bind(this)
```

# Manutenção do estado

> Não manipulamos elementos DOM diretamente. Modificamos o state. O responsável por manipular o elemento DOM é o React.

Portanto, para enviarmos dados de um formulário devemos enviar o estado do campo que foi preenchido:

```javascript
data: JSON.stringify({
  nome:this.state.nome
})
```

No construtor, adicione o campo ao state :

```javascript
this.state = {lista: [], nome:''}
```

https://medium.com/@dnvtrn/como-fazer-um-crud-com-create-react-app-f0402ff89c05













