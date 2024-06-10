import './style.css'
import IconeSVG from '@/components/icon'
import Imagem from '@/components/image'

import Face from '@/assets/facebook.svg'
import Insta from '@/assets/instagram.svg'
import Zap from '@/assets/whatsapp.svg'

export default function Contato({ contact }) {

    function editContato(contato) {
        try {
            const data = []
            contato.forEach(element => {
                data.push({
                    contato: element,
                    link: `https://wa.me/55${element.replace('(', '').replace(')', '').replace('-', '').replace(' ', '')}`
                })
            });
            return data
        } catch (error) {
            return [{
                contato: contato,
                link: `https://wa.me/55${contato.replace('(', '').replace(')', '').replace('-', '').replace(' ', '')}`
            }]
        }
    }

    return (
        <header id={'contato'} className='contato'>
            <h1>Contato</h1>
            <p>Nossas Lojas</p>
            <div className='boxLojas'>
                {
                    contact &&
                    contact.map((item, index) => {
                        return (
                            <div key={index} className='cardBoxLojas'>
                                <div className='titulo'>
                                    <h1>{item.nome_loja}</h1>
                                </div>
                                <div className='listContato'>
                                    {
                                        editContato(item.contato).map((itemContato, indexContato) => {
                                            return (
                                                <div key={indexContato}>
                                                    <Imagem src={Zap}/>
                                                    <p key={indexContato} onClick={() => { window.open(itemContato.link, '_blank') }}>{itemContato.contato}</p>
                                                </div>
                                            )
                                        }
                                        )
                                    }
                                </div>

                                <div className='Adress'>
                                    <IconeSVG icone={'pin_drop'} />
                                    <p>{item.endereco}</p>
                                </div>

                                <div className='timeHour'>
                                    <IconeSVG icone={'schedule'} />
                                    <p>{item.funcionamento}</p>
                                </div>

                                <div className='social'>
                                    <Imagem src={Face} onClick={() => { window.open(item.link_facebook, '_blank') }} />
                                    <Imagem src={Insta} onClick={() => { window.open(item.link_instagram, '_blank') }} />
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </header>
    )
}