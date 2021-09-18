import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav/Nav';
import Authorization from './authorization/Authorization';
import Login from './login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
function Index() {
    return (
        <BrowserRouter>
            <div className="container">
                <Nav/>
                    <Route path="/auth" component={Authorization}/>
                    <Route path="/login" component={Login}/>
            </div>
        </BrowserRouter>
    );
}

export default Index;
if (document.getElementById('index')) {
    ReactDOM.render(<Index />, document.getElementById('index'));
}
require('./login/Login');
require('./authorization/Authorization');
