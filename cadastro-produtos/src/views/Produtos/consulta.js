import React from 'react'
import ProdutoService from '../../app/produtoService'
import { withRouter } from 'react-router-dom'
import Card from '../../components/card'

class ConsultaProdutos extends React.Component {

    constructor() {
        super()
        this.service = new ProdutoService()
    }

    state = {
        produtos: []
    }

    componentDidMount() {
        const produtos = this.service.obterProdutos();
        this.setState({ produtos })
    }

    /*
        this.props.history --> propriedade que veio do withRouter
        permite que navegue de ações do componente para outras rotas
    */

    preparaEditar = (sku) => {
        this.props.history.push(`/cadastro-produtos/${sku}`)
    }

    deletar = (sku) => {
        const produtos = this.service.deletar(sku)
        this.setState({ produtos })
    }

    render() {
        return (
            <Card header={'Consulta Produtos'}>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>SKU</th>
                            <th>Preço</th>
                            <th>Fornecedor</th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            this.state.produtos.map((produto, i) => {
                                return (
                                    <tr key={i}>
                                        <th>{produto.nome}</th>
                                        <th>{produto.sku}</th>
                                        <th>{produto.preco}</th>
                                        <th>{produto.fornecedor}</th>
                                        <th>
                                            <button
                                                className="btn btn-primary"
                                                onClick={() => this.preparaEditar(produto.sku)}
                                            >
                                                Editar
                                                </button>

                                            <button
                                                className="btn btn-danger"
                                                onClick={() => this.deletar(produto.sku)}
                                            >
                                                Remover
                                                </button>
                                        </th>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </Card>
        )
    }
}

export default withRouter(ConsultaProdutos)