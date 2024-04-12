import * as S from './style'

export default function Index(props) {
    return (
        <S.Button onClick={props.onClick} className={props.loading ? "" : "noload"}>
        {
            props.loading ? <S.DivLoading><div></div><div></div><div></div><div></div></S.DivLoading> : props.name
        }
        </S.Button>
    )
}


