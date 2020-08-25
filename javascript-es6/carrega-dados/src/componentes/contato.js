import React, { Component } from 'react';
import {Card} from 'primereact/card';

let tipo_perfil = {
	            nome: '', 
	            username: '', 
	            email: '', 
	            endereco: '', 
	            telefone: '', 
	            website: '', 
	            empresa: ''
	           };

class Contato extends Component
{
    constructor()
    {
        super();
        this.state = {variavel_perfil: tipo_perfil};
    }

    componentDidMount()
    {
        fetch('https://my-json-server.typicode.com/miguel7penteado/React/perfil/1')
        .then(res => res.json())
        .then(res => { 
			           console.log(res); 
			           this.setState( {variavel_perfil: res} );
			         }
			 );
    }

    render()
    {
        return(
            <div>
                <div className="title">
                    <h4>Contato</h4>
                    <p>Aqui estão as informações Contato mim:</p>
                </div>

                <Card>
                    <p><strong>Nome    : </strong>{this.state.variavel_perfil.nome}</p>
                    <p><strong>Username: </strong>{this.state.variavel_perfil.username}</p>
                    <p><strong>Email   : </strong>{this.state.variavel_perfil.email}</p>
                    <p><strong>Endereço: </strong>{this.state.variavel_perfil.endereco}</p>
                    <p><strong>Telefone: </strong>{this.state.variavel_perfil.telefone}</p>
                    <p><strong>Website : </strong>{this.state.variavel_perfil.website}</p>
                    <p><strong>Empresa : </strong>{this.state.variavel_perfil.empresa}</p>
                </Card>

            </div>
        );
    }
}
export default Contato;
