import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import Tharlei from './pages/Tharlei';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path='/' exact={true} component={App}/>
            <Route path='/tharleialeixo' component={Tharlei}/>
            <Route path='*' component={App} />
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
