// Clientes
import { useEffect, useState } from 'react'
import jQuery from 'jquery'
import * as S from './style'

// Import Components
import { TitlesTop } from 'components/text'

function Clientes({ id }) {
  var duracao = 1400
  var intervalo = 3400
  const [Width] = useState(5)
  const [arrayImg, setArrayImg] = useState([''])

  useEffect(() => {
    const Array = []
    for (let index = 1; index < 18; index++) {
      const element = '/assets/slider-clientes/img (' + index + ').png'
      Array.push(element)
    }
    setArrayImg(Array)
    ;(function ($) {
      setInterval(function () {
        $('#carrosselSlide>*:first-child').animate(
          { 'margin-left': '-' + (Width + 1.5) + 'vw' },
          duracao,
          'linear',
          function () {
            $(this).appendTo(this.parentElement).css('margin-left', '0')
          }
        )
      }, intervalo)

      $('img').bind('contextmenu', function () {
        return false
      })
    })(jQuery)
  }, [Width, duracao, intervalo])

  return (
    <>
      <S.container id={id}>
        <TitlesTop
          titles={'NOSSOS CLIENTES'}
          description={
            'A Gráfica impacto Visual, mantem uma rede de clientes fidelizados há mais de 14 anos.'
          }
        />
        <S.carrossel id={'carrosselSlide'}>
          {arrayImg.map((items, key) => {
            return (
              <S.carrosselItem key={key} style={{ width: Width + 'rem' }}>
                <S.sliderImg src={items}></S.sliderImg>
              </S.carrosselItem>
            )
          })}
        </S.carrossel>
      </S.container>
    </>
  )
}

export default Clientes
