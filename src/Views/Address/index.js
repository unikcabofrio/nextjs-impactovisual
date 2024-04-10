/* eslint-disable @next/next/no-img-element */
import * as S from './style'
import ViewContact from '@/components/viewContact'

export default function Index({ contact }) {
    return (
        <S.DivContainer>
            {
                contact.map((item, index) => {
                    var listContact = item.contact.split(',');
                    return (
                        <ViewContact
                            key={index}
                            store_name={item.store_name}
                            listContact={listContact}
                            address={item.address}
                            operation={item.operation}
                            url_facebook={item.url_facebook}
                            url_instagram={item.url_instagram}
                        />
                    )
                })
            }
        </S.DivContainer>
    )
}


