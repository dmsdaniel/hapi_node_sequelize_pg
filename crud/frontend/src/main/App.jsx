import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import React, { memo } from 'react'
import Logo from '../components/template/Logo'
import Nav from '../components/template/Nav'
import Footer from '../components/template/Footer'
import { BrowserRouter } from 'react-router-dom'
import Routes from './Routes'

const App = () => {
    return (
        <BrowserRouter>
            <div className="app" >
                <Logo />
                <Nav />
                <Routes />
                <Footer />
            </div >
        </BrowserRouter>
    )
}
export default memo(App)