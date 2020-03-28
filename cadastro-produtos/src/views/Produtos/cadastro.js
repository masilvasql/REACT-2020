import React from 'react'

export default class CadastroProduto extends React.Component {

    state = {
        nome: '',
        sku: '',
        descricao: '',
        preco: 0,
        fornecedor: ''
    }

    onChange = (event) => {
        const valor = event.target.value
        const nomeDoCampo = event.target.name
        //setando valores dinamicamente
        this.setState({ [nomeDoCampo]: valor })
    }

    onSubmit = (event) => {
        console.log(this.state)
    }

    render() {
        return (
            <>
                <div className="card">
                    <div className="card-header">
                        Cadastro de Produto
                    </div>
                    <div className="card-body">

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
                                <button className="btn btn-primary">Limpar</button>
                            </div>
                        </div>

                    </div>
                </div>
            </>
        )
    }
}