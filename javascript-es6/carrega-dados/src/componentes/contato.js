import React from 'react';
import {Card} from 'primereact/card';

let profile = {nome: '', username: '', email: '', endereco: '', telefone: '', website: '', empresa: ''};

class Contato extends Component {
    constructor() {
        super();
        this.state = {profile: profile};
    }

    componentDidMount() {
        fetch('https://my-json-server.typicode.com/giuliana-bezerra/demo/profile/1')
        .then(res => res.json())
        .then(res => {
            console.log(res);
            this.setState({profile: res});
        });
    }

    render() {
        return (
            <div>
                <div className="title">
                    <h4>Contato</h4>
                    <p>Aqui estão as informações Contato mim:</p>
                </div>
                <Card>
                    <p><strong>Nome: </strong>{this.state.profile.nome}</p>
                    <p><strong>Username: </strong>{this.state.profile.username}</p>
                    <p><strong>Email: </strong>{this.state.profile.email}</p>
                    <p><strong>Endereço: </strong>{this.state.profile.endereco}</p>
                    <p><strong>Telefone: </strong>{this.state.profile.telefone}</p>
                    <p><strong>Website: </strong>{this.state.profile.website}</p>
                    <p><strong>Empresa: </strong>{this.state.profile.empresa}</p>
                </Card>

            </div>
        );
    }
}
export default Contato;
