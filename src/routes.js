import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Main from './pages/quiz';
import Home from './pages/home'
import HomePage from './pages/homePage'

const Routes = () => (
    // Dois componentes sejam exibidos quando a rota for acessado
    <BrowserRouter>
        {/* Força que apenas uma rota seja chamada ao mesmo tempo */}
        <Switch>
            {/* exact -> Verifica se a url é exatamente igual ao path */}
            <Route path="/" exact component = {Main}/>
            <Route path="/home" component = {Home}/>
            <Route path="/homePage" component = {HomePage}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;

