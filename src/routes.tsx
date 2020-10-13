import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Landing from './pages/landing';
import MapaDeOrfanatos from './pages/MapaDeOrfanatos';

function Routes(){
    return(
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Landing} />
            <Route path = '/app' component={MapaDeOrfanatos} />
            </Switch>
        </BrowserRouter>
        
    );
}

export default Routes;