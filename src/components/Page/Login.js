import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

import '../../style/style.css';

const URL = "http://localhost/ws-login/login.php";

const sendData = async (url, data) => {

    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const json = await response.json();

    return json;
}

export const Login = (props) => {
    const [error, setError] = useState(null);
    const [wait, setWait] = useState(false);


    const refUser = useRef(null);
    const refPass = useRef(null);

    const handleLogin = async (e) => {
        setWait(true);
        e.preventDefault();
        const data = {
            "User": refUser.current.value,
            "Pass": refPass.current.value
        };

        const response = await sendData(URL, data);
        props.authed.access(response.conectado);
        setError(response.error)
        setWait(false);
    }


    return (
        <div className="container mt-5">
            <div className="d-flex justify-content-center h-100">
                <div className="card">
                    <div className="card-header">
                        <h3>Sign In</h3>
                        <div className="d-flex justify-content-end social_icon">
                            <span>
                                <i className="fab fa-facebook-square" />
                            </span>
                            <span>
                                <i className="fab fa-google-plus-square" />
                            </span>
                            <span>
                                <i className="fab fa-twitter-square" />
                            </span>
                        </div>
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="input-group form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">
                                        <i className="fas fa-user" />
                                    </span>
                                </div>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="username"
                                    ref={refUser}
                                />
                            </div>
                            <div className="input-group form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">
                                        <i className="fas fa-key" />
                                    </span>
                                </div>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="password"
                                    ref={refPass}
                                />
                            </div>
                            {
                                error &&
                                <div className="align-items-center remember">
                                    {error}
                                </div>
                            }
                            <div className="row align-items-center remember">
                                <input type="checkbox" />
                                Recuerdame
                            </div>
                            <div className="form-group">
                                <button
                                    disabled = {wait}
                                    onClick={handleLogin}
                                    className="btn float-right login_btn">Entrar</button>
                            </div>
                        </form>
                    </div>
                    <div className="card-footer">
                        <div className="d-flex justify-content-center">
                            <Link to="#" >Forgot your password?</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
