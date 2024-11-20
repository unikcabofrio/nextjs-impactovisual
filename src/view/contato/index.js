import './style.css';
import IconeSVG from '@/components/icon';
import Imagem from '@/components/image';

import Face from '@/assets/facebook.svg';
import Insta from '@/assets/instagram.svg';
import Zap from '@/assets/whatsapp.svg';

export default function Contato({ contact }) {

    function editContato(contato) {
        try {
            return contato.map(element => ({
                contato: element,
                link: `https://wa.me/55${element.replace(/[^\d]/g, '')}`
            }));
        } catch (error) {
            return [{
                contato: contato,
                link: `https://wa.me/55${contato.replace(/[^\d]/g, '')}`
            }];
        }
    }

    return (
        <header id={'contato'} className='contato'>
            <h1>Contato</h1>
            <p>Nossas Lojas</p>
            <div className='boxLojas'>
                {contact && contact.map((item, index) => (
                    <div key={index} className='cardBoxLojas'>
                        <div className='titulo'>
                            <h1>{item.city}</h1>
                        </div>
                        <div className='listContato'>
                            {editContato(item.numbers).map((itemContato, indexContato) => (
                                <div key={indexContato}>
                                    <Imagem src={Zap} />
                                    <p onClick={() => window.open(itemContato.link, '_blank')}>{itemContato.contato}</p>
                                </div>
                            ))}
                        </div>
                        <div className='Adress'>
                            <IconeSVG icone={'pin_drop'} />
                            <p>{item.adress}</p>
                        </div>
                        <div className='timeHour'>
                            <IconeSVG icone={'schedule'} />
                            <p>{item.openingHours}</p>
                        </div>
                        <div className='social'>
                            <Imagem src={Face} onClick={() => window.open(item.face, '_blank')} />
                            <Imagem src={Insta} onClick={() => window.open(item.insta, '_blank')} />
                        </div>
                    </div>
                ))}
            </div>
        </header>
    );
}
