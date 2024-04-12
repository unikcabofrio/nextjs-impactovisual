import * as S from './style'

export default function Index(props) {
    return (
        <S.Button onClick={props.onClick}>
           <S.icone className={props.icone}></S.icone>
           <p>{props.name}</p>
        </S.Button>
    )
}


