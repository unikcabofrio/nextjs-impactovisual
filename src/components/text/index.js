// Text
import * as S from './style'

export function TitlesTop({ titles, description }) {
  return (
    <>
      <S.Titles>
        <h1>{titles}</h1>
        <p>{description}</p>
      </S.Titles>
    </>
  )
}

export function InforMsg({ text, color, id }) {
  return (
    <>
      <S.InforMsg
        id={id}
        style={{
          color: color
        }}
      >
        {text}
      </S.InforMsg>
    </>
  )
}
