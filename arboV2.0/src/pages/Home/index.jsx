import React from 'react'
import AuthConsumer from '../../hooks/auth'

function Home() {

  const [authed] = AuthConsumer()
  return (
    <div className='pageHome boxContent'>
      
      <h1>Home</h1>
        <h5>Olá, {authed.name ? authed.name : 'Usuário'}!</h5>
        <p>Desejamos uma ótima navegação pelo ambiente da plataforma.</p>
        <p>Caso haja necessidade, solicite ajuda aos administradores. Para isso, basta acessar o menu <span className='mark'>Opcões</span> e depois clicar em <span className='mark'>Contato</span>.</p>
    </div>
  )
}

export default Home