import './Footer.css'
import React, { memo } from 'react'

const Footer = () => {
    return (
        <footer className="footer">
            <span>
                Desenvolvido com <i className="fa fa-heart text-danger"></i> por
                <strong>Dan</strong><span className="fa text-danger"></span>13<strong>l</strong>
            </span>
        </footer>
    )
}
export default memo(Footer)
