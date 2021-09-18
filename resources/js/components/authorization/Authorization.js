import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
function Authorization() {
    return (
        <div className="container">
            <form>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputEmail4">Email</label>
                        <input type="email" className="form-control" id="inputEmail4" placeholder="Email"/>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputPassword4">Password</label>
                        <input type="password" className="form-control" id="inputPassword4" placeholder="Password"/>
                    </div>
                </div>
                <div classname="form-row">
                    <div classname="form-group">
                        <label htmlfor="inputaddress">first name</label>
                        <input type="text" classname="form-control" id="inputaddress" placeholder="bibigul"/>
                    </div>
                    <div classname="form-group">
                        <label htmlfor="inputaddress">address</label>
                        <input type="text" classname="form-control" id="inputaddress" placeholder="1234 main st"/>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Sign in</button>
            </form>
        </div>
    );
}

export default Authorization;

if (document.getElementById('authorization')) {
    ReactDOM.render(<Authorization/>, document.getElementById('authorization'));
}
