import { useState } from 'react'
import sha256 from 'crypto-js/sha256'
export default function Login({ setAuth }) {
  const [opInfor, setOpInfor] = useState(0)
  const [msgInfor, setMsgInfor] = useState(
    'Desculpe! Seu token está incorreto, tente novamente'
  )

  function SetStorage(key, value) {
    localStorage.setItem(key, value)
  }

  async function AuthLogin(e) {
    e.preventDefault()

    const token = document.getElementById('tokenValue').value

    if (!token) {
      setMsgInfor('O campo "token" não pode está vazio')
      setOpInfor(1)
      setTimeout(() => {
        setOpInfor(0)
      }, 5000)
      return
    }

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
          setMsgInfor('Desculpe! Seu token está incorreto, tente novamente')
          setOpInfor(1)
          setTimeout(() => {
            setOpInfor(0)
          }, 5000)
        } else if (
          sha256(result[0]['token']).sigBytes == sha256(token).sigBytes
        ) {
          SetStorage('token', sha256(result[0]['token']).sigBytes)
          setAuth(true)
        }
      })
      .catch((error) => {
        console.log(error)
        setMsgInfor('Desculpe! Seu token está incorreto, tente novamente')
        setOpInfor(1)
        setTimeout(() => {
          setOpInfor(0)
        }, 5000)
      })
  }

  return (
    <>
      <div
        style={{
          width: '100%',
          height: '100%',
          textAlign: 'center',
          display: 'flex',
          padding: '0 1rem',
          flexDirection: 'colunm',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <form
          style={{
            borderRadius: '1rem',
            padding: '1rem',
            boxShadow: 'rgba(0, 0, 0, 0.1) 0px 0px 20px 0px'
          }}
        >
          <h1
            style={{
              marginBottom: '2rem'
            }}
          >
            Painel de Login
          </h1>
          <br />
          <label
            style={{
              textAlign: 'left',
              float: 'left',
              width: '100%'
            }}
          >
            Token de acesso
            <input
              style={{
                marginBottom: '3rem'
              }}
              type="password"
              id={'tokenValue'}
              placeholder="Digite o token..."
            />
          </label>
          <button
            onClick={(e) => {
              AuthLogin(e)
            }}
          >
            Acessar
          </button>
          <p
            style={{
              fontSize: '.8rem',
              marginTop: '1rem',
              backgroundColor: 'red',
              borderRadius: '1rem',
              padding: '.5rem',
              color: '#fff',
              opacity: opInfor,
              transition: 'all .2s'
            }}
          >
            {msgInfor}
          </p>
        </form>
      </div>
    </>
  )
}
