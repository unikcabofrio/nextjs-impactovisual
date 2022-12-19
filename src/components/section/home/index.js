// Home
import { useEffect, useState } from 'react'
import jQuery from 'jquery'
import * as S from './style'

function Home({ id }) {
  var duracao = 1000
  var intervalo = 4400
  let [imgName, setImgName] = useState('slider-respo')

  useEffect(() => {
    if (window.screen.width > 768) {
      setImgName('slider')
    }

    ;(function ($) {
      setInterval(function () {
        $('#carrossel>*:first-child').animate(
          { 'margin-left': '-100%' },
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

      if (window.screen.width > 768) {
        $('img').css('object-fit', 'cover')
      }
    })(jQuery)
  }, [duracao, intervalo])

  return (
    <>
      <S.container id={id}>
        <S.carrossel id={'carrossel'}>
          <S.carrosselItem>
            <S.sliderImg
              src={'/assets/slider-home/' + imgName + ' (1).webp'}
            ></S.sliderImg>
          </S.carrosselItem>
          <S.carrosselItem>
            <S.sliderImg
              src={'/assets/slider-home/' + imgName + ' (2).webp'}
            ></S.sliderImg>
          </S.carrosselItem>
          <S.carrosselItem>
            <S.sliderImg
              src={'/assets/slider-home/' + imgName + ' (3).webp'}
            ></S.sliderImg>
          </S.carrosselItem>
          <S.carrosselItem>
            <S.sliderImg
              src={'/assets/slider-home/' + imgName + ' (4).webp'}
            ></S.sliderImg>
          </S.carrosselItem>
          <S.carrosselItem>
            <S.sliderImg
              src={'/assets/slider-home/' + imgName + ' (5).webp'}
            ></S.sliderImg>
          </S.carrosselItem>
        </S.carrossel>
      </S.container>
    </>
  )
}

export default Home
