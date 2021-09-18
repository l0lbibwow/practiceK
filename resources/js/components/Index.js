import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
function Index() {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Главная</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Регистрация</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Авторизация</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Index;
if (document.getElementById('index')) {
    ReactDOM.render(<Index />, document.getElementById('index'));
}
