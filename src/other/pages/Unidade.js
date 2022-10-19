import {useEffect} from 'react'
import jQuery from 'jquery';

export default function Index(props) {

  const ArrayMenu = [
    {titulo:"Quem Somos" , className:"ml-und2-li-active"},
    {titulo:"Metodologia"},
    {titulo:"Em Prática"},
    {titulo:"Nossos Selos"}
  ];

    useEffect(() => {

        (
          function ($) {
            $( 'document' ).ready(function() {});
          }
        )
        (jQuery);
        
    },[])

  return (
    <>
      <div className='ml-und' id={props.id}>
        <div className='ml-und-top'> 
          <h1>ONBYTE CABO FRIO</h1>
          <p>
            Diferenciada na metodologia de ensino, somos pioneiros no sistema 
            interativo, possibilitando o nosso aluno estudar no seu ritmo e tempo, 
            temos horários flexíveis, tornando possível o aluno escolher seu dia e 
            horário para estudar, nós nos ajustamos a sua rotina.
          </p>
        </div>
        <div className='ml-und-middle'>
          <div className='ml-und-imgs'>
            <img src="/assets/und/und1.webp" alt="Image-und"/>
            <p>A On Byte é a rede de ensino que mais cresce no Brasil!</p>
          </div>
          <div className='ml-und-imgs'>
            <img src="/assets/und/und2.webp" alt="Image-und"/>
            <p>Além da metodologia diferenciada, tradição, premiações e confiança dos mais de 20 anos de atuação!</p>
          </div>
          <div className='ml-und-imgs'>
            <img src="/assets/und/und3.webp" alt="Image-und"/>
            <p>A On Byte forma uma geração de cidadãos cada vez melhores para o nosso Brasil e que possam assumir as melhores posições no mercado de trabalho!</p>
          </div>
        </div>
      </div>
      {/* <div className='ml-und2'>
        <ul>
          {ArrayMenu.map((Array, index)=> (
            <li key={index} className={Array.className}>
              <strong>{Array.titulo}</strong>
            </li>
          ))} 
        </ul>
      </div> */}
    </>
  )
}
    