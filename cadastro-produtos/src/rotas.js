import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'

import Home from './views/Home'
import CadastroProduto from './views/Produtos/cadastro'

export default () => (
    <HashRouter>
        <Switch>
            <Route exact path ="/cadastro-produtos" component = {CadastroProduto}/>
            <Route exact path ="/" component = {Home} />
        </Switch>
    </HashRouter>
)