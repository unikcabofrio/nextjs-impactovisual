import { useState } from 'react'

export default function Forms({ data, PathAPI, id, typeRes, children }) {
  const [submit, setSubmit] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault()

    const res = await fetch(`/api/${PathAPI}`, {
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })

    if (checkContact(data.whatsApp)) {
      await res
        .json()
        .then((result) => {
          if (result.response.includes(typeRes)) {
            showInfor('Recebemos sua menssagem!')
          } else {
            showInfor('Desculpe, tivemos um problema ao enviar sua menssagem!')
          }
        })
        .catch(() => {
          showInfor('Desculpe, tivemos um problema ao enviar sua menssagem')
        })
    } else {
      showInfor('Número de Contato Não e Valido')
    }
  }

  function checkContact(contact) {
    // eslint-disable-next-line no-useless-escape
    const regexContato = /^[1-9]{2}[0-9]{5}[0-9]{4}$/
    return regexContato.test(contact) ? true : false
  }

  function showInfor(str) {
    setSubmit(str)
    document.getElementById(id).style.opacity = 1
    setTimeout(() => {
      document.getElementById(id).style.opacity = 0
      setSubmit('')
    }, 6000)
  }

  return (
    <form onSubmit={handleSubmit}>
      {children}
      <p id={id} className="inforForm">
        {submit}
      </p>
    </form>
  )
}
