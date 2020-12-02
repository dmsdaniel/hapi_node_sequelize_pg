import React, { memo } from 'react'
import Main from '../template/Main'

function Home() {
    return (
        <Main icon="home" title="Início"
            subtitle="Segundo projeto">
            <div className='display-4'>Bem Vindo!</div>
            <hr />
            <p className="mb-0">Sistema para exemplificar
        a construcao de um cadastro desenvolvido em React!</p>

        </Main>
    )
}

export default memo(Home)