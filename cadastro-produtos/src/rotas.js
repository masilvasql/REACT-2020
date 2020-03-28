import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'

import Home from './views/Home'
import CadastroProduto from './views/Produtos/cadastro'
import ConsultaProdutos from './views/Produtos/consulta'

export default () => (
    <HashRouter>
        <Switch>
            <Route exact path ="/cadastro-produtos" component = {CadastroProduto}/>
            <Route exact path ="/consulta-produtos" component = {ConsultaProdutos}/>
            <Route exact path ="/" component = {Home} />
        </Switch>
    </HashRouter>
)