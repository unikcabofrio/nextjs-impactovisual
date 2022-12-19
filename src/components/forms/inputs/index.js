// Inputs
import * as S from './style'

export function InputText({ id, placeholder, required }) {
  return (
    <>
      <S.Input
        type="text"
        id={id}
        name={id}
        placeholder={placeholder}
        required={required}
      />
    </>
  )
}

export function InputEmail({ id, placeholder, required }) {
  return (
    <>
      <S.Input
        type="email"
        id={id}
        name={id}
        placeholder={placeholder}
        required={required}
      />
    </>
  )
}

export function InputPassword({ id, placeholder, required }) {
  return (
    <>
      <S.Input
        type="password"
        id={id}
        name={id}
        placeholder={placeholder}
        required={required}
      />
    </>
  )
}
