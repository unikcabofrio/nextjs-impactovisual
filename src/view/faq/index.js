import './style.css'
import Imagem from '@/components/image'
import FaqIMG from '@/assets/faq.png'
import LoudDetails from './loudDetails'

export default function FAQ({ faq }) {
    return (
        <header id={'faq'} className='faq'>
            <Imagem src={FaqIMG} alt="FAQ Image" />
            {
                !faq ? (
                    <LoudDetails />
                ) : (
                    <div className='divD'>
                        {faq.length === 0 ? (
                            <p>Nenhuma pergunta frequente disponível no momento.</p>
                        ) : (
                            faq.map((item, index) => {
                                return (
                                    <details key={index} open={false}> {/* Ou true, dependendo de seu controle de estado */}
                                        <summary>{item.questions} ?</summary>
                                        <p>{item.answers}</p>
                                    </details>
                                );
                            })
                        )}
                    </div>
                )
            }
        </header>
    );
}
