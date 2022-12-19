// Preload
import { useEffect } from 'react'
import jQuery from 'jquery'
import * as S from './style'

export default function Preload() {
  useEffect(() => {
    ;(function ($) {
      $('#preload').fadeOut(800)
    })(jQuery)
  }, [])
  return (
    <>
      <S.Preload id="preload">
        <S.containerCube>
          <S.Cube1 />
          <S.Cube2 />
          <S.Cube3 />
          <S.Cube4 />
        </S.containerCube>
      </S.Preload>
    </>
  )
}
