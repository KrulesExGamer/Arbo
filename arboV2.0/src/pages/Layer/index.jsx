import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router';
import axios from 'axios';

import AuthConsumer from '../../hooks/auth';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './layer.css'

function Layer() {

  const navigate = useNavigate()
  const [authed, dispatch] = AuthConsumer() // eslint-disable-line

  const checkLogin = async function () {

    const token = localStorage.getItem('USPArboreo')

    if (token) {
      const url = 'http://localhost:3001/users/check'
      const object = { token: token }

      try {
        const response = await axios.post(url, object)
        const data = response.data

        if (response.status === 200) {
          dispatch({
            type: 'login',
            token: data.token,
            nusp: data.nusp,
            id: data.id,
            name: data.name,
            email: data.email,
            admin: data.admin
          })

          navigate('home')
        }
      }
      catch (e) {
        console.error('Ocorreu algum problema com o servidor. Checar conexão.')
      }
    }
  }

  // Executa a checagem de login anterior.
  useEffect(() => {
    checkLogin()
  }, []) // eslint-disable-line

  return (
    <div className='containerPrincipal container-root'>
        <Header />
        <Outlet />
        <Footer />
    </div>
        
    
  )
}

export default Layer