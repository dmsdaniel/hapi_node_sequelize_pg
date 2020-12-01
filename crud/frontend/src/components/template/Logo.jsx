import './Logo.css'
import React, { memo } from 'react'
import logo from '../../assets/images/logo.jpg'

const Logo = () => {
    return (
        <aside className="logo">
            <a href="/" className="logo">
                <img src={logo} alt="logo" />
            </a>
        </aside>
    )
}
export default memo(Logo)
