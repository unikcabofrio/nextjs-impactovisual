import { useEffect, useState } from 'react'
import jQuery from 'jquery'
import sha256 from 'crypto-js/sha256'
import Preload from '@/Components/Preload'
import Login from '@/Components/painel/login'
import DashBoard from '@/Components/painel/dashboard'
import Menu from '@/Components/painel/menu'

export default function Index() {
  useEffect(() => {
    AuthLogin()
    ;(function ($) {
      $('html, body').animate({ scrollTop: 0 }, 0)
    })(jQuery)
    setTimeout(() => {
      setPreload(false)
    }, 1000)
  }, [])

  async function AuthLogin() {
    const token = localStorage.getItem('token')

    const req = await fetch(`/api/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ token: token })
    })
    await req
      .json()
      .then((result) => {
        if (result['code'] == 'ER_BAD_FIELD_ERROR') {
          setAuth(false)
        } else if (token == sha256(token).sigBytes) setAuth(true)
      })
      .catch((error) => {
        console.log(error)
        setAuth(false)
      })
  }

  const [preload, setPreload] = useState(true)
  const [erro] = useState(false)
  const [auth, setAuth] = useState(false)
  const [screen, setScreen] = useState(<DashBoard />)

  return (
    <>
      {preload ? (
        <Preload />
      ) : erro ? (
        <div
          style={{
            width: '100vw',
            padding: '2vw',
            textAlign: 'center',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <h2>504</h2>
          <p>
            Sem problemas! Entendo que você está enfrentando um problema de
            conexão e estamos tentando corrigir isso. Se o problema persistir,
            entre em contato com o suporte.
          </p>
          <br />
          <a
            href="https:\\www.unikcabofrio.com.br"
            style={{
              color: 'red'
            }}
          >
            Suporte Unik Cabo Frio
          </a>
        </div>
      ) : (
        <div
          id={'__main'}
          style={{
            height: '95vh'
          }}
        >
          {auth ? (
            <div
              style={{
                width: '100%'
              }}
            >
              <Menu setScreen={setScreen} />
              {screen}
            </div>
          ) : (
            <Login setAuth={setAuth} />
          )}
        </div>
      )}
    </>
  )
}
