import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'

import Home from './views/Home'
import CadastroProduto from './views/Produtos/cadastro'
import ConsultaProdutos from './views/Produtos/consulta'

/**
 *  o parâmetro que vem após a url da rota é o 
 * parâmetro (variável) que a rota pode esperar, 
 * a interroção após  o parâmetro, faz com que ele seja opcional
 */

export default () => (
 
        <Switch>
            <Route exact path ="/cadastro-produtos/:sku?" component = {CadastroProduto}/>
            <Route exact path ="/consulta-produtos" component = {ConsultaProdutos}/>
            <Route exact path ="/" component = {Home} />
        </Switch>
  
)