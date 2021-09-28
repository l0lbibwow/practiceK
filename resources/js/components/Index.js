import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav/Nav';
import Login from './authorization/login'
import Signup from './signup/signup'
import Profile from "./authorization/profile";
import {BrowserRouter, Route} from 'react-router-dom';
function Index() {
    return (
        <BrowserRouter>
                <Nav/>
                    {/*<Route path="/home" component={Index}/>*/}
                    <Route path="/auth" component={Login}/>
                    <Route path="/login" component={Signup}/>
                    <Route path="/profile" component={Profile}/>
        </BrowserRouter>
    );
}

export default Index;
if (document.getElementById('index')) {
    ReactDOM.render(<Index />, document.getElementById('index'));
}

