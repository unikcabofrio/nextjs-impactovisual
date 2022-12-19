// TextArea
import * as S from './style'

export function TextArea({ id, name, placeholder, required }) {
  return (
    <>
      <S.TextArea
        type="text"
        id={id}
        name={name}
        placeholder={placeholder}
        required={required}
      />
    </>
  )
}
