import './Logo.css'
import React, { memo } from 'react'
import logo from '../../assets/images/x64.png'
import { Link  } from 'react-router-dom'

const Logo = () => {
    return (
        <aside className="logo">
            <Link to="/" className="logo">
                <img src={logo} alt="logo"/>
            </Link>
        </aside>
    )
}
export default memo(Logo)
