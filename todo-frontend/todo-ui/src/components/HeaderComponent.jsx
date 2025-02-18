import React from 'react'
import { NavLink } from 'react-router-dom'
import { isUserLoggedIn, logout } from '../services/AuthService'
import { useNavigate } from 'react-router-dom'

const HeaderComponent = () => {

    const isAuth = isUserLoggedIn();

    const navigate = useNavigate();

    function handleLogout() {
        logout();
        navigate('/login')
    }

    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ width: "100%" }}>
                    <div>
                        <a className='navbar-brand' href=''> Todo Management </a>
                    </div>

                    <div className='collapse navbar-collapse'>
                        <ul className='navbar-nav'>
                            {/* if user is logged in then only show todos */}
                            {
                                isAuth &&
                                <li className='nav-item'>
                                    <NavLink to='/todos' className="nav-link"> todos </NavLink>
                                </li>
                            }

                        </ul>
                    </div>


                    <ul className='navbar-nav'>
                        {/* if user is not logged in show Register button */}
                        {
                            !isAuth &&
                            <li className='nav-item'>
                                <NavLink to="/register" className="nav-link"> Register </NavLink>
                            </li>
                        }

                        {
                            !isAuth &&
                            <li className='nav-item'>
                                <NavLink to="/login" className="nav-link"> Login </NavLink>
                            </li>
                        }

                        {
                            isAuth &&
                            <li className='nav-item'>
                                <NavLink to="/login" className="nav-link" onClick={handleLogout}> Logout </NavLink>
                            </li>
                        }

                    </ul>

                </nav>
            </header>
        </div >
    )
}

export default HeaderComponent