import React from 'react'
import ProdutoService from '../../app/produtoService'


const estadoInicial = {
    nome: '',
    sku: '',
    descricao: '',
    preco: 0,
    fornecedor: '',
    sucesso: false,
    errors: []
}

export default class CadastroProduto extends React.Component {

    constructor() {
        super()
        this.service = new ProdutoService();
    }

    state = estadoInicial

    onChange = (event) => {
        const valor = event.target.value
        const nomeDoCampo = event.target.name
        //setando valores dinamicamente
        this.setState({ [nomeDoCampo]: valor })
    }

    onSubmit = () => {
        const produto = {
            nome: this.state.nome,
            sku: this.state.sku,
            descricao: this.state.descricao,
            preco: this.state.preco,
            fornecedor: this.state.fornecedor
        }

        try {
            this.service.salvar(produto)
            this.limpaCampos()
            this.setState({ sucesso: true })
        } catch (erro) {
            const errors = erro.errors
            this.setState({ errors })
        }


    }

    limpaCampos = () => {
        this.setState(estadoInicial)
    }

    render() {
        return (
            <>
                <div className="card">
                    <div className="card-header">
                        Cadastro de Produto
                    </div>
                    <div className="card-body">

                        {this.state.sucesso &&
                            <div className="alert alert-dismissible alert-success hidden">
                                <button type="button" className="close" data-dismiss="alert" onClick={() => this.setState({ sucesso: false })}>&times;</button>
                                <strong>Aviso!</strong>
                                Cadastro Realizado com Sucesso.
                        </div>
                        }

                        {this.state.errors.length > 0 &&
                            this.state.errors.map((msg) => {
                                return (
                                    <div className="alert alert-dismissible alert-danger hidden">
                                        <button type="button" className="close" data-dismiss="alert"  >&times;</button>
                                        <strong>Erro!</strong> {msg}
                                    </div>
                                )
                            })


                        }

                        <div className='row'>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Nome: *</label>
                                    <input
                                        type="text"
                                        className='form-control'
                                        value={this.state.nome}
                                        name="nome"
                                        onChange={this.onChange}
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>SKU:</label>
                                    <input
                                        type="text"
                                        className='form-control'
                                        value={this.state.sku}
                                        name="sku"
                                        onChange={this.onChange}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label>Descrição:</label>
                                    <textarea
                                        className="form-control"
                                        value={this.state.descricao}
                                        name="descricao"
                                        onChange={this.onChange}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className='row'>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Preço: *</label>
                                    <input
                                        type="text"
                                        className='form-control'
                                        value={this.state.preco}
                                        name="preco"
                                        onChange={this.onChange}
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Fornecedor :*</label>
                                    <input
                                        type="text"
                                        className='form-control'
                                        value={this.state.fornecedor}
                                        name="fornecedor"
                                        onChange={this.onChange}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-1">
                                <button
                                    className="btn btn-success"
                                    onClick={this.onSubmit}
                                >Salvar</button>
                            </div>
                            <div className="col-md-1">
                                <button
                                    className="btn btn-primary"
                                    onClick={this.limpaCampos}
                                >Limpar</button>
                            </div>
                        </div>

                    </div>
                </div>
            </>
        )
    }
}