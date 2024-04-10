import * as S from './style'

export default function Index(props) {
    return (
        <S.Button onClick={props.onClick}>
           {props.name}
        </S.Button>
    )
}


