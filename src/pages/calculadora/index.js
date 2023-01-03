// Home
import { useEffect, useState } from 'react'
// import jQuery from 'jquery'
import * as S from './style'

function Index() {
  //   useEffect(() => {
  //     if (window.screen.width > 768) {
  //       setImgName('slider')
  //     }

  //     ;(function ($) {
  //       setInterval(function () {
  //         $('#carrossel>*:first-child').animate(
  //           { 'margin-left': '-100%' },
  //           duracao,
  //           'linear',
  //           function () {
  //             $(this).appendTo(this.parentElement).css('margin-left', '0')
  //           }
  //         )
  //       }, intervalo)

  //       $('img').bind('contextmenu', function () {
  //         return false
  //       })

  //       if (window.screen.width > 768) {
  //         $('img').css('object-fit', 'cover')
  //       }
  //     })(jQuery)
  //   }, [duracao, intervalo])

  const [Result, SetResult] = useState(0)
  const [Result2, SetResult2] = useState('')
  const [MetroQuad, SetMetroQuad] = useState(0)

  useEffect(() => {}, [Result])

  function HandleonSubmit() {
    SetResult(0)
    SetResult2(0)
    let comprimento = document.getElementById('comprimento').value
    let altura = document.getElementById('altura').value
    let vm = document.getElementById('vm').value

    try {
      if (comprimento.includes(',')) comprimento = comprimento.replace(',', '.')
      if (altura.includes(',')) altura = altura.replace(',', '.')

      comprimento = parseFloat(comprimento)
      altura = parseFloat(altura)
      var resultm = comprimento * altura
      SetMetroQuad(resultm.toFixed(3))

      var resultv = 0

      if (resultm >= 4) {
        var vm1 = vm - 5
        resultv = resultm * vm1
        SetResult(resultv.toFixed(2).replace('.', ','))

        var vm2 = vm - 10
        resultv = resultm * vm2
        SetResult2(resultv.toFixed(2).replace('.', ','))
      } else if (resultm >= 3) {
        resultv = resultm * vm
        SetResult2(resultv.toFixed(2).replace('.', ','))

        vm2 = vm - 5
        resultv = resultm * vm2
        SetResult(resultv.toFixed(2).replace('.', ','))
      } else {
        resultv = resultm * vm
        SetResult(resultv.toFixed(2).replace('.', ','))
      }
    } catch (error) {
      alert(error)
    }
  }

  return (
    <>
      <S.container>
        <S.Calculadora>
          <div id={'top'}>
            <h3>CALCULANDO O M²</h3>
            <p>*informe o comprimento e largura, em metros.</p>
          </div>
          <div id={'middle'}>
            <div id={'form'}>
              <label>
                Comprimento:
                <input
                  type={'text'}
                  id={'comprimento'}
                  placeholder={'00.00cm'}
                />
              </label>
              <label>
                Altura:
                <input type={'text'} id={'altura'} placeholder={'00.00cm'} />
              </label>
              <label>
                Valor do M²:
                <input type={'text'} id={'vm'} placeholder={'R$ 0,00'} />
              </label>
              <button onClick={HandleonSubmit}>Calcular</button>
            </div>
          </div>
          <div id={'bottom'}>
            <p>Resultado:</p>
            <p>
              Valor varia entre: <strong>R$ {Result}</strong> a R${' '}
              <strong>{Result2}</strong>
            </p>

            <p>
              Tamanho em M²: <strong>{MetroQuad}m²</strong>
            </p>
          </div>
        </S.Calculadora>
      </S.container>
    </>
  )
}

export default Index
