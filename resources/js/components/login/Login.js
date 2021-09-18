import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
function Login() {
    return (
        <div className="container">
            <form className="form-inline">
                <div className="form-group mb-2">
                    <label htmlFor="staticEmail2" className="sr-only">Email</label>
                    <input type="text" readOnly className="form-control-plaintext" id="staticEmail2" value="email@example.com"/>
                </div>
                <div className="form-group mx-sm-3 mb-2">
                    <label htmlFor="inputPassword2" className="sr-only">Password</label>
                    <input type="password" className="form-control" id="inputPassword2" placeholder="Password"/>
                </div>
                <button type="submit" className="btn btn-primary mb-2">Confirm identity</button>
            </form>
        </div>
    );
}

export default Login;

if (document.getElementById('login')) {
    ReactDOM.render(<Login />, document.getElementById('login'));
}
