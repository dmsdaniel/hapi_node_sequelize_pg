import './Nav.css'
import React, { memo } from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <aside className="menu-area">
            {/* refatorar */}
            <nav className="menu">
                <Link to="/">
                    <i className="fa fa-home"></i>Início
                </Link>
                <Link to="/users">
                    <i className="fa fa-users"></i>Usuários
                </Link>
            </nav>
        </aside>
    )
}
export default memo(Nav) 
