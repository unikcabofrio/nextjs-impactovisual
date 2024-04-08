/* eslint-disable @next/next/no-img-element */
import * as S from './style'

export default function Header({ contact }) {
    return (
        <S.DivContainer>
            {
                contact.map((item, index) => {
                    var listContact = item.contact.split(',');
                    return (
                        <div key={index} className='contact'>
                            <h2>{item.store_name}</h2>
                            <div className='listNumber'>
                                {
                                    listContact.map((item, index_) => {
                                        var link = item.replace('-', '').replace(/\s/g, '');
                                        return (
                                            <div key={index_} >
                                                <i className="fi fi-brands-whatsapp" ></i>
                                                <a href={`https://wa.me/55` + link} target="_blank" >{item}</a>
                                            </div>


                                        )
                                    })
                                }
                            </div>
                            <p>
                                <i className="fi fi-sr-marker"></i>
                                {item.address}
                            </p>
                            <p>
                                <i className="fi fi-sr-clock-three"></i>
                                {item.operation}
                            </p>
                            <div className='urlSocial'>
                                <a target="_blank"  href={item.url_facebook}>
                                    <i className="fi fi-brands-facebook"></i>
                                </a>
                                <a target="_blank" href={item.url_instagram}>
                                    <i className="fi fi-brands-instagram"></i>
                                </a>
                            </div>
                        </div>
                    )
                })
            }
        </S.DivContainer>
    )
}


