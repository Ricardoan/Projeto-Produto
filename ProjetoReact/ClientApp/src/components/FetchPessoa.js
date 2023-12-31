﻿import React, { Component } from "react"
import { Link } from 'react-router-dom'

export class FetchPessoa extends Component {
    static displayName = "Pessoas";

    constructor() {
        super();
        this.state = { Pessoas: [], loading: true }
    }

    componentDidMount() {
        this.populaPessoaData();
    }

    static handleEdit(id) {
        window.location.href = "/pessoa/edit/" + id;
    }

    static handleDelete(id) {
        if (!window.confirm("Você deseja deletar a pessoa : " + id)) {
            return;
        }
        else {
            fetch('api/pessoas/' + id, { method: 'delete' })
                .then(json => {
                    window.location.href = "fetch-pessoa";
                    alert('Deletado com Sucesso!');
                })
        }
    }

    static renderPessoasTabela(pessoas) {

        return (
            <table className='table table-striped' aria-labelledby="tabelLabel" >
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>CPFNome</th>
                    </tr>
                </thead>
                <tbody>
                    {pessoas.map(prod =>
                        <tr key={prod.id}>
                            <td>{prod.Nome}</td>
                            <td>{prod.CPF}</td>

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
            : FetchPessoa.renderPessoasTabela(this.state.Pessoas);

        return (
            <div>
                <h1 id="tabelLabel" >Pessoas</h1>
                <p>Tela de Listagem de Pessoas</p>
                <p>
                    <Link to="/add-pessoa">Cadastrar Pessoa</Link>
                </p>
                {contents}
            </div>
        );
    }


    async populaPessoaData() {
        const response = await fetch('api/Pessoas');
        const data = await response.json();
        this.setState({ Pessoas: data, loading: false });
    }

}