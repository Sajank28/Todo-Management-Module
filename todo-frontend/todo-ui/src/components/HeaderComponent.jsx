import React from 'react'

const HeaderComponent = () => {
    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark" style={{ width: "100%" }}>
                    <div>
                        <a className='navbar-brand' href='http://localhost:3000'> Todo Management </a>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default HeaderComponent