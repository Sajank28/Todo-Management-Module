import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const HeaderComponent = () => {

    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ width: "100%" }}>
                    <div>
                        <a className='navbar-brand' href='http://localhost:3000'> Todo Management </a>
                    </div>
                    <div className='collapse navbar-collapse'>
                        <ul className='navbar-nav'>
                            <li className='nav-item'>
                                <NavLink to="https://www.google.com" className="nav-link"> About </NavLink>
                            </li>
                        </ul>
                    </div>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <NavLink to="/register" className="nav-link"> Register </NavLink>
                        </li>

                        <li className='nav-item'>
                            <NavLink to="/login" className="nav-link"> Login </NavLink>
                        </li>
                    </ul>

                </nav>
            </header>
        </div >
    )
}

export default HeaderComponent