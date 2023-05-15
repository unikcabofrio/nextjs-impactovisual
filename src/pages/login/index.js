import { useEffect } from 'react'
import jQuery from 'jquery'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Preload from '@/Components/Preload'
import Top from '@/Components/TopBar'

export default function Index() {
  useEffect(() => {
    ;(function ($) {
      $('html, body').animate({ scrollTop: 0 }, 0)
    })(jQuery)
  }, [])

  async function checkLogin(e) {
    e.preventDefault()
    const res = await fetch(`/api/AuthLogin`, {
      body: JSON.stringify({
        valueKey: document.getElementById('chave').value
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })

    const data = await res.json()

    if (!data.result) {
      const divfalse = document.getElementById('loginfalse')
      divfalse.style.display = 'inline'
    } else {
      setCookie('authlogin', document.getElementById('chave').value, 900)
      window.location.href = '/panel'
    }
  }

  function setCookie(name, value, days) {
    let expires = ''
    if (days) {
      let date = new Date()
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
      expires = '; expires=' + date.toUTCString()
    }
    document.cookie = name + '=' + (value || '') + expires + '; path=/'
  }

  const dataAtual = new Date()
  const anoAtual = dataAtual.getFullYear()

  return (
    <>
      <Preload />
      <Top id={`div_Top`} />
      <div className="loginpage">
        <FontAwesomeIcon icon={['fas', 'lock']} className={'icon'} />
        <h1>Tela de Login</h1>
        <form>
          <label htmlFor="chave">Chave de Autenticação:</label>
          <input
            style={{
              textAlign: 'center'
            }}
            type="password"
            id="chave"
            name="chave"
            placeholder="Cole sua chave de autenticação aqui"
          />
          <div
            id="loginfalse"
            style={{
              display: 'none',
              width: '100%',
              textAlign: 'center',
              color: 'red'
            }}
          >
            <p
              style={{
                color: 'red'
              }}
            >
              Infelizmente essa não e a chave correta.
            </p>
          </div>

          <br />
          <button
            type="submit"
            onClick={(e) => {
              checkLogin(e)
            }}
          >
            Registrar Autenticação
          </button>
        </form>
      </div>
      <footer
        style={{
          position: 'absolute',
          bottom: 0
        }}
      >
        © {anoAtual} - Todos os direitos reservados a - <p>Unik Cabo Frio</p>
      </footer>
    </>
  )
}
