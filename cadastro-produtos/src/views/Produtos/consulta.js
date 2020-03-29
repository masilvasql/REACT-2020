import React from 'react'
import ProdutoService from '../../app/produtoService'
import { withRouter } from 'react-router-dom'
import Card from '../../components/card'

import ProdutosTable from './components/produtosTable'

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
               <ProdutosTable
                    produtos = {this.state.produtos}
                    editarAction = {this.preparaEditar}
                    deletarAction ={this.deletar}
               />
            </Card>
        )
    }
}

export default withRouter(ConsultaProdutos)