import React, { useState } from 'react'
import { loginAPICall, saveLoggedInUser, storeToken } from '../services/AuthService';
import { useNavigate } from 'react-router-dom';

const LoginComponent = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate();

    async function handleLoginForm(e) {
        e.preventDefault();

        const loginObj = { username, password };
        console.log(loginObj)

        await loginAPICall(username, password).then((response) => {
            console.log(response.data);

            //Basic auth token
            // const token = 'Basic ' + window.btoa(username + ":" + password);
            //store token in browser local storage
            // storeToken(token);


            //JWT token
            const token = 'Bearer ' + response.data.accesssToken;
            const role = response.data.role;

            storeToken(token);

            saveLoggedInUser(username, role);

            navigate('/todos')

            //refresh page after you login
            window.location.reload(false);
        }).catch(error => {
            console.error(error);
        })

    }

    return (
        <div className='container'>
            <br /> <br />
            <div className='row'>
                <div className='col-md-6 offset-md-3'>
                    <div className='card'>
                        <div className='card-header'>
                            <h2 className='text-center'> Login Form </h2>
                        </div>
                        <div className='card-body'>
                            <form>
                                <div className='row mb-3'>
                                    <label className='col-md-3 control-label'> Username </label>
                                    <div className='col-md-8'>
                                        <input
                                            type='text'
                                            className='form-control'
                                            placeholder='Enter Username or Email'
                                            name='username'
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className='row mb-2'>
                                    <label className='col-md-3 control-label'> Password  </label>
                                    <div className='col-md-7'>
                                        <input
                                            type='password'
                                            className='form-control'
                                            placeholder='Enter password'
                                            name='password'
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className='form-group mb-3'>
                                    <p> <button className='btn btn-primary' onClick={(e) => handleLoginForm(e)}> Login </button> Not registered? <a href='http://localhost:3000/register'> Register Here </a></p>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default LoginComponent