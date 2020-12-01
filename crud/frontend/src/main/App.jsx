import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import React, { memo } from 'react'
import Logo from '../components/template/Logo'
import Nav from '../components/template/Nav'
import Main from '../components/template/Main'
import Footer from '../components/template/Footer'

const App = () => {
    return (
        <div className = "app" >
            <Logo />
            <Nav />
            <Main icon="home" title="Início"
                subtitle="Segundo projeto"
            />
            <Footer />
        </div >
    )
}
export default memo(App)