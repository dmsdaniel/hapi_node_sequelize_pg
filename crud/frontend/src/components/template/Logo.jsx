import './Logo.css'
import React, { memo } from 'react'
import logo from '../../assets/images/x64.png'

const Logo = () => {
    return (
        <aside className="logo">
            <a href="/" className="logo">
                <img src={logo} alt="logo"/>
            </a>
        </aside>
    )
}
export default memo(Logo)
