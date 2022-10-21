import {useEffect,useState} from 'react'
import jQuery from 'jquery'

import JsonProduto from '../../json/produtos.json'

export default function Index(props) {

    let linkzap = "https://api.whatsapp.com/send?phone=55"
    const Whatsapp = ['22981591576','22992158462']
    const Whatsapp_ = ['22999722326']
    const [RandoZap,setRandoZap] = useState(0);

    useEffect(() => {
        (function ($) {})(jQuery);
        setRandoZap(Math.floor(Math.random() * 2))
    },[jQuery])

    return (
    <div id={props.id} className="main-one">
        <h3>Nossos Produtos</h3>
        <p>
            Esses sãos os produtos vendidos em nossas lojas, caso não encontre o que procura
            fique a vontade para entrar em contato para ter mais informações.
            <br/>
            <br/>
            {/* <a href={'https://wa.me/55'+Whatsapp[RandoZap]}>
                Entrar em contato
            </a> */}
        </p>
        <div className='main-one-produtos'> 
          <div className='mo-grid'> 
            {JsonProduto.map((ImgArray, index)=> (
              <div key={index} className='mo-items'> 
                <img src={"/assets/produtos/"+ImgArray.img+".webp"} alt={ImgArray.title} />
                <h3><strong>COMPRAR </strong>{ImgArray.title}</h3>
                <p>{ImgArray.description}</p>
                <div className='mo-items-modelos-title'>
                    <p>Tipos</p>
                    <p>Preços</p>
                </div>
                {ImgArray.modelos.map((itensmodelos, index_)=> (
                  <div key={index_} id={index_} className='mo-items-modelos'>
                    <p className='mo-items-drescrip'>{itensmodelos.descri}</p>
                    <p className='mo-items-price'>R$ {itensmodelos.price}</p>
                  </div>
                ))}
                <br/>
                <div className='mo-items-contato'>
                  <a href={linkzap+Whatsapp[RandoZap]+"&text=Ola, Gostaria de comprar *"+ImgArray.title+"*, "+ImgArray.description}>Cabo Frio</a>
                  <a href={linkzap+Whatsapp_[0]+"&text=Ola, Gostaria de comprar *"+ImgArray.title+"*, "+ImgArray.description}>Jardim Esperança</a>
                </div>
              </div>
            ))}
          </div>
        </div>
    </div>
    )
}
