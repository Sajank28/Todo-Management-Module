import React, { useState } from 'react'
import { registerAPICall } from '../services/AuthService'
import { useNavigate } from 'react-router-dom'


const RegistrationComponent = () => {

    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate();

    function handleRegistrationForm(e) {
        e.preventDefault()

        const register = { name, username, email, password }
        console.log(register)

        registerAPICall(register).then((response) => {
            console.log(response.data)
            navigate('/login')
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
                            <h2 className='text-center'> User Registration Form </h2>
                        </div>
                        <div className='card-body'>
                            <form>

                                <div className='row mb-2'>
                                    <label className='col-md-3 control-label'> Name  </label>
                                    <div className='col-md-9'>
                                        <input
                                            type='text'
                                            className='form-control'
                                            placeholder='Enter name'
                                            name='name'
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className='row mb-2'>
                                    <label className='col-md-3 control-label'> Username  </label>
                                    <div className='col-md-9'>
                                        <input
                                            type='text'
                                            className='form-control'
                                            placeholder='Enter username'
                                            name='username'
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className='row mb-2'>
                                    <label className='col-md-3 control-label'> Email  </label>
                                    <div className='col-md-9'>
                                        <input
                                            type='text'
                                            className='form-control'
                                            placeholder='Enter email address'
                                            name='email'
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className='row mb-2'>
                                    <label className='col-md-3 control-label'> Password  </label>
                                    <div className='col-md-9'>
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
                                    <p> <button className='btn btn-primary' onClick={(e) => handleRegistrationForm(e)}> Submit </button> already registered? <a href="http://localhost:3000/login"> Login here </a></p>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default RegistrationComponent