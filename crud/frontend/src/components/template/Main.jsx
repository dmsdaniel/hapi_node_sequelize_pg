import './Main.css'
import './Header.css'
import Header from './Header'
import React from 'react'

function Main(props)  {
    return (
        <React.Fragment>
        <Header {...props}/>
        <main className="content container-fluid" >
            <div className="p-3 mt-3">
                {props.children}
            </div>
        </main>
    </React.Fragment>
    )  
}
export default Main
    
