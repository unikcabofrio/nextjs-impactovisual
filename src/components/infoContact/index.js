// InfoContact
import * as S from './style'

export default function InfoContact({ Img, title, children }) {
  return (
    <>
      <S.InfoContact>
        <S.SvgIcon>{Img}</S.SvgIcon>
        <S.InforText>
          <S.ItxtTitle>{title}</S.ItxtTitle>
          <br />
          {children}
        </S.InforText>
      </S.InfoContact>
    </>
  )
}
