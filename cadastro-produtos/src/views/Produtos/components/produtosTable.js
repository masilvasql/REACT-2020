import React from 'react'

export default (props) => (
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
                props.produtos.map((produto, i) => {
                    return (
                        <tr key={i}>
                            <th>{produto.nome}</th>
                            <th>{produto.sku}</th>
                            <th>{produto.preco}</th>
                            <th>{produto.fornecedor}</th>
                            <th>
                                <button
                                    className="btn btn-primary"
                                    onClick={() => props.editarAction(produto.sku)}
                                >
                                    Editar
                                </button>

                                <button
                                    className="btn btn-danger"
                                    onClick={() => props.deletarAction(produto.sku)}
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
)