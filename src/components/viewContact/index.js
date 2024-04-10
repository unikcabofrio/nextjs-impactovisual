import * as S from './style'

export default function Index(props) {
    return (
        <S.DivContainer >
            <S.H2Title>{props.store_name}</S.H2Title>
            <S.DiListNumber>
                {
                    props.listContact.map((item, index_) => {
                        var link = item.replace('-', '').replace(/\s/g, '');
                        return (
                            <S.DivNumber key={index_} >
                                <S.Icon className="fi fi-brands-whatsapp" ></S.Icon>
                                <S.ALink href={`https://wa.me/55` + link} target="_blank" >{item}</S.ALink>
                            </S.DivNumber>


                        )
                    })
                }
            </S.DiListNumber>
            <S.PText>
                <S.Icon className="fi fi-sr-marker"></S.Icon>
                {props.address}
            </S.PText>
            <S.PText>
                <S.Icon className="fi fi-sr-clock-three"></S.Icon>
                {props.operation}
            </S.PText>
            <S.DivUrlSocial>
                <S.ALink target="_blank" href={props.url_facebook}>
                    <S.Icon className="fi fi-brands-facebook"></S.Icon>
                </S.ALink>
                <S.ALink target="_blank" href={props.url_instagram}>
                    <S.Icon className="fi fi-brands-instagram"></S.Icon>
                </S.ALink>
            </S.DivUrlSocial>
        </S.DivContainer>
    )
}


