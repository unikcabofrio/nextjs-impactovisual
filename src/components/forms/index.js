// Forms
import * as S from './style'

function Forms({ onSubmit, children }) {
  return (
    <>
      <S.Forms onSubmit={onSubmit}>{children}</S.Forms>
    </>
  )
}

export default Forms
