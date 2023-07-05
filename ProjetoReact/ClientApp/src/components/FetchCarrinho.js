import React, { Component } from "react"
import { Link } from 'react-router-dom'

export class Fetchcarrinho extends Component {
    static displayName = "Carrinhos";

    constructor() {
        super();
        this.state = { carrinhos: [], loading: true }
    }

    componentDidMount() {
        this.populacarrinhoData();
    }

    static handleEdit(id) {
        window.location.href = "/carrinho/edit/" + id;
    }

    static handleDelete(id) {
        if (!window.confirm("Você deseja deletar o carrinho : " + id)) {
            return;
        }
        else {
            fetch('api/carrinhos/' + id, { method: 'delete' })
                .then(json => {
                    window.location.href = "fetch-carrinho";
                    alert('Deletado com Sucesso!');
                })
        }
    }

    static rendercarrinhosTabela(carrinhos) {

        return (
            <table className='table table-striped' aria-labelledby="tabelLabel" >
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Descrição</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {carrinhos.map(prod =>
                        <tr key={prod.id}>
                            <td>{prod.id}</td>
                            <td>{prod.descricao}</td>

                            <td>
                                <button className="btn btn-success" onClick={(id) => this.handleEdit(prod.id)}>Edit</button> &nbsp;
                                <button className="btn btn-danger" onClick={(id) => this.handleDelete(prod.id)}>Delete</button>
                            </td>

                        </tr>

                    )}
                </tbody>
            </table>
        );

    }

    render() {
        let contents = this.state.loading
            ? <p><em> Carregando... </em> </p>
            : Fetchcarrinho.rendercarrinhosTabela(this.state.carrinhos);

        return (
            <div>
                <h1 id="tabelLabel" >carrinhos</h1>
                <p>Tela de Listagem de carrinhos</p>
                <p>
                    <Link to="/add-carrinho">Cadastrar carrinho</Link>
                </p>
                {contents}
            </div>
        );
    }


    async populacarrinhoData() {
        const response = await fetch('api/carrinhos');
        const data = await response.json();
        this.setState({ carrinhos: data, loading: false });
    }

}